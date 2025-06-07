
# 公告以及后续更新

## 版本更新规则说明
- **版本格式**：`主版本.次版本.修订版.热更新版`（例如 `1.21.60.0`）
- **更新规则**：
- 发布新正式包时，**第四位版本号递增**（如 `1.21.60.0 → 1.21.70.0`）。
- 所有低于最新第四位版本号的客户端**将无法更新**。
- **版本号位置**：游戏主菜单右下角查看。

## 重要免责声明
以下情况需玩家**自行承担责任**：
- 游戏存档数据丢失/损坏
- 自定义皮肤/材质无法加载
- 第三方光影组件失效
- 模组兼容性问题导致的异常

## 更新指引
1. 定期检查游戏启动器的更新
2. 更新前**手动备份**：
   - `minecraftWorlds/`（存档）
   - `resource_packs/`（材质包）
   - `behavior_packs/`（模组）
3. 更新完成后重启游戏

---

# Minecraft 去 OreUI 改包教程

> **视频教程**：[点击查看](https://b23.tv/7acXsHh)

## 准备工具
1. [MT管理器](https://mt2.cn/download)
2. [Termux](https://bbk.endyun.ltd/alist/！！打包教程(点击此处查看)/版本/com.termux_1001.apk)
3. [libForceCloseOreUI.so](https://bbk.endyun.ltd/alist/！！打包教程(点击此处查看)/版本/1.0.1/libForceCloseOreUI.so)（[备用链接](https://gitcode.com/yinghuaji/apk-release/releases/download/1.0.1/libForceCloseOreUI.so)）

## 文件操作步骤
1. 打开 **MT管理器** → 进入根目录：`/storage/emulated/0/`
2. 找到 `Download` 文件夹 → 定位 Minecraft 安装包
3. 点击安装包 → 查看 → 进入 `lib/arm64-v8a/` → 长按 `libminecraftpe.so`
4. 新建英文文件夹（如 `minecraft`）→ 解压文件至此
5. 将 `libForceCloseOreUI.so` 放入同一文件夹

## Termux 操作步骤
# 1. 更新环境（首次运行）
```bash
pkg update -y && pkg upgrade -y && pkg install -y patchelf
```
# 2. 进入目标目录（注意大小写）
```bash
cd /storage/emulated/0/Minecraft
```
# 3. 若权限不足：
```bash
termux-setup-storage
```
# 同意系统授权弹窗
---
# 4. 执行关键命令（无提示即成功）
```bash
patchelf --add-needed libForceCloseOreUI.so libminecraftpe.so
```

> **注意事项**：
> - 命令执行后请耐心等待
> - 若路径提示为绿色说明目录正确

## 重新打包安装
1. 将修改后的 `.so` 文件拖入安装包的 `lib/arm64-v8a/`
2. 退出安装包界面 → 点击安装
3. **签名冲突处理**：
   - 备份存档/材质/模组
   - 卸载旧版 → 安装修改版

## 常见问题与解决方案

| 问题类型      | 解决方案                  |
|---------------|--------------------------|
| 路径错误      | 检查文件夹名称一致性      |
| 命令无反应    | 等待1-2分钟观察提示      |
| 文件丢失      | 重新解压操作              |
| 无法访问      | 检查 Termux 存储权限      |
| 命令报错      | 检查命令是否完整复制      |

> **免责声明再次提醒**：因改包导致的存档丢失、模组失效等问题需**用户自行承担**
