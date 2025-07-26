# /last_version

用来获取最新版本数据

请求类型为：`post`

::: tip 小提示
在正式版中`version`的值会少一个版本号位数
:::

## 请求

::: code-group

```javascript{6}
await fetch('https://api.mcarc.top/last_version', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ b: '1' })
});
```

```python{6}
import requests

requests.post("https://api.mcarc.top/last_version",
    headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
    data = { 
        'b': '1' 
    })
```

:::

| 参数 | 可选 |                          说明 |
|----|:--:|----------------------------:|
| b  | 是  | 是否为测试版(不填：获取全部，1：测试版，0：正式版) |

## 响应

```json5 [json5]
{
  "status": 200,
  "message": [
    {
      "version_all": "1.xx.xx.x",
      "version": "1.xx.xx",
      "is_beta": 0,
      // 0:正式版 1:测试版
      "update_time": "2025-01-01T16:00:00.000Z",
      // 记得utc+8
      "file_size": "520.00MB/521.00MB",
      "link": {
        "网盘名1": {
          "ARMv7": "https://下载链接",
          "ARMv8": "https://下载链接"
        },
        "网盘名2": {
          "ARMv7": "https://下载链接",
          "ARMv8": "https://下载链接"
        }
      }
    },
    {
      "version_all": "1.xx.xx.x",
      "version": "1.xx.xx.x",
      "is_beta": 1,
      "update_time": "2025-01-01T16:00:00.000Z",
      "file_size": "520.00MB/521.00MB",
      "link": {
        "网盘名1": {
          "ARMv7": "https://下载链接",
          "ARMv8": "https://下载链接"
        },
        "网盘名2": {
          "ARMv7": "https://下载链接",
          "ARMv8": "https://下载链接"
        }
      }
    }
  ]
}
```

## 尝试

<PostButton url="last_version" method="POST" :body="{ b: '1' }" />

