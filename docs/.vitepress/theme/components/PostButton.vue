<script lang="ts" setup>
import {computed, ref, watch} from "vue";

const props = withDefaults(
    defineProps<{
        url?: string;
        method?: string;
        body?: Record<string, any> | string;
        baseUrl?: string;
    }>(),
    {
        url: '',
        method: 'POST',
        baseUrl: 'https://api.mcarc.top/'
    }
);

const normalizedMethod = computed(() => {
    return (props.method || 'POST').trim().toUpperCase();
});

const formatInitialBody = () => {
    if (typeof props.body === 'object' && props.body !== null) {
        return JSON.stringify(props.body, null, 2);
    }
    if (typeof props.body === 'string') {
        return props.body;
    }
    return '{}';
};

const formatInitialQuery = () => {
    if (typeof props.body === 'string') {
        return props.body;
    }
    if (typeof props.body === 'object' && props.body !== null) {
        try {
            return new URLSearchParams(props.body).toString();
        } catch {
            return '';
        }
    }
    return '';
};

const bodyInput = ref(formatInitialBody());
const queryInput = ref(formatInitialQuery());

watch(() => props.body, () => {
    bodyInput.value = formatInitialBody();
    queryInput.value = formatInitialQuery();
});

const isDirty = computed(() => {
    if (normalizedMethod.value === 'GET') {
        return queryInput.value !== formatInitialQuery();
    }
    return bodyInput.value !== formatInitialBody();
});

const resetParams = () => {
    bodyInput.value = formatInitialBody();
    queryInput.value = formatInitialQuery();
    errorMessage.value = null;
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement;
        const start = target.selectionStart;
        const end = target.selectionEnd;
        target.value = target.value.substring(0, start) + '  ' + target.value.substring(end);
        target.selectionStart = target.selectionEnd = start + 2;
        bodyInput.value = target.value;
    }
};

const cleanBaseUrl = computed(() => props.baseUrl.replace(/\/+$/, ''));
const cleanUrl = computed(() => props.url.replace(/^\/+/, ''));
const fullEndpoint = computed(() => {
    if (cleanUrl.value.startsWith('http://') || cleanUrl.value.startsWith('https://')) {
        return cleanUrl.value;
    }
    return `${cleanBaseUrl.value}/${cleanUrl.value}`;
});

const requestPreviewUrl = computed(() => {
    if (normalizedMethod.value === 'GET') {
        const q = queryInput.value.trim().replace(/^\?/, '');
        if (!q) return fullEndpoint.value;
        const sep = fullEndpoint.value.includes('?') ? '&' : '?';
        return `${fullEndpoint.value}${sep}${q}`;
    }
    return fullEndpoint.value;
});

const isOpen = ref(false);
const loading = ref(false);
const hasRequested = ref(false);
const responseData = ref<any>(null);
const responseStatus = ref<number | null>(null);
const responseStatusText = ref('');
const responseTime = ref<number | null>(null);
const errorMessage = ref<string | null>(null);
const isCopied = ref(false);

const formattedResponse = computed(() => {
    if (responseData.value === null || responseData.value === undefined) {
        return '';
    }
    if (typeof responseData.value === 'object') {
        return JSON.stringify(responseData.value, null, 2);
    }
    return String(responseData.value);
});

const sendRequest = async () => {
    if (loading.value) return;

    errorMessage.value = null;
    let postBody: string | undefined = undefined;

    if (normalizedMethod.value === 'POST') {
        const raw = bodyInput.value.trim();
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                if (typeof parsed === 'object' && parsed !== null) {
                    const params = new URLSearchParams();
                    for (const [key, val] of Object.entries(parsed)) {
                        params.append(key, typeof val === 'object' ? JSON.stringify(val) : String(val));
                    }
                    postBody = params.toString();
                } else {
                    postBody = String(parsed);
                }
            } catch (err: any) {
                errorMessage.value = `请求参数 JSON 语法错误: ${err.message || '请检查格式'}`;
                isOpen.value = true;
                return;
            }
        }
    }

    loading.value = true;
    hasRequested.value = true;
    const startTime = performance.now();

    try {
        const response = await fetch(requestPreviewUrl.value, {
            method: normalizedMethod.value,
            headers: normalizedMethod.value === 'POST' ? {
                'Content-Type': 'application/x-www-form-urlencoded',
            } : undefined,
            body: postBody,
        });

        responseTime.value = Math.round(performance.now() - startTime);
        responseStatus.value = response.status;
        responseStatusText.value = response.statusText;

        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            responseData.value = await response.json();
        } else {
            const text = await response.text();
            try {
                responseData.value = JSON.parse(text);
            } catch {
                responseData.value = text;
            }
        }
        isOpen.value = true;
    } catch (err: any) {
        responseTime.value = Math.round(performance.now() - startTime);
        responseStatus.value = 0;
        responseStatusText.value = 'Failed';
        errorMessage.value = `网络请求失败: ${err.message || '请检查网络连接或接口跨域限制'}`;
        responseData.value = null;
        isOpen.value = true;
    } finally {
        loading.value = false;
    }
};

const copyResponse = async () => {
    if (!formattedResponse.value && !errorMessage.value) return;
    const textToCopy = formattedResponse.value || errorMessage.value || '';
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(textToCopy);
            isCopied.value = true;
            setTimeout(() => {
                isCopied.value = false;
            }, 2000);
        } catch (err) {
            console.error('复制到剪贴板失败:', err);
        }
    }
};
</script>

<template>
    <div class="api-tester">
        <!-- 端点行 -->
        <div class="api-endpoint">
            <code class="method" :data-method="normalizedMethod">{{ normalizedMethod }}</code>
            <code class="url" :title="requestPreviewUrl">{{ requestPreviewUrl }}</code>
            <button v-if="isDirty" class="vp-link reset-btn" @click="resetParams">重置</button>
        </div>

        <!-- 参数输入 -->
        <p class="param-label">{{ normalizedMethod === 'POST' ? '请求体 (JSON)' : '查询参数 (Query String)' }}</p>
        <textarea
            v-if="normalizedMethod === 'POST'"
            v-model="bodyInput"
            class="api-input"
            rows="4"
            spellcheck="false"
            @keydown="handleKeydown"
        ></textarea>
        <input
            v-else
            v-model="queryInput"
            class="api-input"
            spellcheck="false"
            type="text"
            @keydown.enter="sendRequest"
        />

        <!-- 操作行 -->
        <div class="api-actions">
            <button class="vp-button medium brand" :disabled="loading" @click="sendRequest">
                <svg v-if="loading" class="spinner" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity=".25"/>
                    <path fill="currentColor" opacity=".85" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                {{ loading ? '请求中…' : '发送请求' }}
            </button>
            <span v-if="hasRequested && responseStatus !== null" class="status-tag" :class="responseStatus >= 200 && responseStatus < 300 ? 'ok' : 'err'">
                {{ responseStatus || 'ERR' }} {{ responseStatusText }}
            </span>
            <span v-if="responseTime !== null && hasRequested" class="resp-time">{{ responseTime }}ms</span>
        </div>

        <!-- 响应折叠区 -->
        <details class="custom-block details resp-details" :open="isOpen" @toggle="isOpen = ($event.target as HTMLDetailsElement).open">
            <summary>{{ hasRequested ? '响应数据' : '点击查看数据' }}<span v-if="hasRequested && !isOpen" class="summary-hint">（已返回，点击展开）</span></summary>

            <!-- 错误提示 -->
            <div v-if="errorMessage" class="custom-block danger resp-error">
                <p>{{ errorMessage }}</p>
            </div>

            <!-- 工具栏 + 代码块 -->
            <div v-if="formattedResponse" class="resp-code-wrap language-json vp-adaptive-theme">
                <button class="copy" :class="{ copied: isCopied }" @click="copyResponse" :title="isCopied ? '已复制' : '复制'"></button>
                <span class="lang">json</span>
                <pre class="shiki"><code>{{ formattedResponse }}</code></pre>
            </div>

            <p v-else-if="!errorMessage && !loading" class="resp-empty">暂无数据，请先发送请求</p>
        </details>
    </div>
</template>

<style scoped>
/* ── 容器 ── */
.api-tester {
    margin: 1.5em 0;
    padding: 1em 1.2em;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
}

/* ── 端点行 ── */
.api-endpoint {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 0.75em;
    min-width: 0;
}

.method {
    flex-shrink: 0;
    padding: 0.1em 0.5em;
    border-radius: 4px;
    font-size: 0.78em;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}
.method[data-method="POST"] { color: #0d9488; background: rgba(13,148,136,.12); }
.method[data-method="GET"]  { color: #2563eb; background: rgba(37,99,235,.12); }

.url {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.85em;
    color: var(--vp-c-text-2);
    background: none;
}

.reset-btn {
    flex-shrink: 0;
    font-size: 0.8em;
    cursor: pointer;
    border: none;
    background: none;
    color: var(--vp-c-brand-1);
}
.reset-btn:hover { color: var(--vp-c-brand-2); }

/* ── 标签 ── */
.param-label {
    margin: 0 0 0.35em;
    font-size: 0.85em;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

/* ── 输入框 ── */
.api-input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0.55em 0.8em;
    font-size: 0.875em;
    line-height: 1.5;
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: vertical;
    tab-size: 2;
}
.api-input:focus {
    outline: none;
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

/* ── 操作行 ── */
.api-actions {
    display: flex;
    align-items: center;
    gap: 0.75em;
    margin-top: 0.75em;
    margin-bottom: 0.85em;
    flex-wrap: wrap;
}

/* 复用 VitePress button 样式 */
.vp-button {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 0.875em;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}
.vp-button.medium { line-height: 32px; font-size: 0.8125em; padding: 0 16px; }
.vp-button.brand {
    color: var(--vp-button-brand-text);
    border-color: var(--vp-button-brand-border);
    background-color: var(--vp-button-brand-bg);
}
.vp-button.brand:hover:not(:disabled) {
    color: var(--vp-button-brand-hover-text);
    border-color: var(--vp-button-brand-hover-border);
    background-color: var(--vp-button-brand-hover-bg);
}
.vp-button:disabled { opacity: 0.6; cursor: not-allowed; }

/* ── 转圈动画 ── */
.spinner {
    width: 1em;
    height: 1em;
    animation: spin 0.9s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── 状态标签 ── */
.status-tag {
    padding: 0.15em 0.55em;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 600;
}
.status-tag.ok  { color: var(--vp-c-green-1);  background: var(--vp-c-green-soft); }
.status-tag.err { color: var(--vp-c-red-1);    background: var(--vp-c-red-soft); }

.resp-time {
    font-size: 0.8em;
    color: var(--vp-c-text-3);
}

/* ── 响应折叠 ── */
.resp-details {
    margin: 0 !important;
}
.resp-details summary { cursor: pointer; }

.summary-hint {
    margin-left: 0.4em;
    font-size: 0.85em;
    font-weight: normal;
    color: var(--vp-c-brand-1);
}

/* ── 错误 ── */
.resp-error { margin: 0.75em 0 0; }

/* ── 代码块：沿用 VitePress 的 .language-* 壳 ── */
.resp-code-wrap {
    position: relative;
    margin: 0.75em 0 0;
}
.resp-code-wrap pre {
    max-height: 360px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-all;
}
.resp-code-wrap code {
    font-size: 0.875em;
    line-height: 1.6;
}

.resp-empty {
    margin: 0.5em 0 0;
    font-size: 0.875em;
    color: var(--vp-c-text-3);
    text-align: center;
    padding: 1.5em 0;
}
</style>