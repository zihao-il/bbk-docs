# 新手教程

## 首先

从哪下载请从哪更新，方便覆盖安装，无法下载或**解析软件包出现错误**请更换浏览器，不推使用系统自带的浏览器，可能会导致下载错误。

::: tip 注意
除了带有“原版”命名的其他的都是“去验证版本”，有能力者请[购买正版](https://www.minecraft.net/)。
:::


> MC223站点版：[Minecraft版本命名解释及建议](https://mc233.endyun.ltd/help/%E6%96%B0%E6%89%8B%E6%95%99%E7%A8%8B/)


::: details 点我查看目录
[[toc]]
:::

## 命名解释

命名通常为：`Minecraft PE(B) x.xx.xx v7(8)a.apk`

- `Minecraft`：游戏名
- `PE`：代表正式版
- `PEB`：代表测试版
- `x.xx.xx`：代表版本号
- `v7a`：32位安装包
- `v8a`：代表arm64架构（64位安装包）现在买到的手机都是这个架构，玩起来就是更加流畅点，没什么区别
- `路径修改`：1.18版本以上才有的，现在文件数据为`/storage/emulated/0/Android/data/com.mojang.minecraftpe/`
  目录，以前直接在内部存储设备下建games文件夹存放数据，新版本删除游戏会导致数据丢失，路径修改就是把设置在外部的存储文件位置改为内部存储设备的games文件夹下
  `/storage/emulated/0/games/com.mojang/`，跟以前一样卸载游戏不会丢失数据，但每次进游戏会有迁移弹窗(可以尝试删除数据路径中
  `AndroidApi30ScopedStorage.migration.json`文件，第一次使用请去设置中**手动**给予游戏**存储权限**。
- `去音乐包`：去除安装包内置的音乐包，可以 [点我](https://bbk.endyun.ltd/s/musicpack) 下载音乐包，（主要是唱片的音乐）1.19.20及以下版本[点我下载](https://zihaoil-my.sharepoint.com/:u:/g/personal/zihao_il_e3_mcarc_top/IQBu-OdhiHVdSpqgHWJBGaNEAXwQG1yLwpY_UF9oaGJR0qk?download=1)
- `原版`：原版安装包，需要谷歌验证，不是正版用户无法使用，进去则会弹出证书错误

## 游玩建议

1. 不知道装哪个建议装`Minecraft PE(B) 版本号 v8a.apk`的，
2. 从这里下载的都可以覆盖升级安装，不需要卸载再安装
3. 进去请把存储位置改为外部，在设置-存储中设置
4. 用数据进不了服务器 请把使用数据打开在设置-通用中设置
5. 看不见别人的自定义皮肤，请把仅允许受信任的皮肤关闭，在设置-通用中设置
6. 测试/预览版顶部水印去除材质：
    - [全部链接](https://zihaoil-my.sharepoint.com/:f:/g/personal/zihao_il_e3_mcarc_top/IgDLDLkMA4kXS43Te56dXlrRAZR_zHBnYf1Ll-p3Y0Lrz4Y)
    - [旧版](https://zihao-il.lanzouo.com/iLrzN80murc)
    - [新版\[0.0.2\]>1.21.100](https://zihao-il.lanzouo.com/ixyzM30b7t5g)：如果材质设置选择`方法1`请在视频设置中打开开关
7. 对于Root用户建议使用[McHook](https://www.123865.com/s/dhm9-DGZ0A)模块或者使用[版本库APP](https://app.mcarc.top/)，原版包需在Lsposed设置中的还原内联钩子选中MC
8. 如下图修改

![设置1](/images/设置1.jpg)  
![设置2](/images/设置2.jpg)

## 联机方法

1. Xbox互加好友
2. 局域网联机  
   首先：请先把游玩建议的第4条设置好，不显示房间请房主看设置中的多人游戏有没有打开  
   2.1：两个或以上的设备连接同一个WiFi即可，一个设备进入游戏后，其他设备在好友那里即可显示房间。  
   2.2：一个设备开热点并开房，其他设备连接热点进图  
   2.3：不听建议的连WiFi进房间后，再开热点给其他设备

## 共存制作

如只需要修改安装包可以 [点我下载](https://zihaoil-my.sharepoint.com/:u:/g/personal/zihao_il_e3_mcarc_top/IQBCTHBc83fPSLmMLzJgObUCAV4DevN49CK0-L34iN4ubiA?download=1)
签名秘钥方便覆盖安装，把文件移动到`MT2/keys`文件夹下，签名密码：`zihao_il`  
使用MT管理器进行共存制作或下载版本库APP。

## 覆盖安装失败

如果你选择保留数据卸载Minecraft导致无法再次安装请使用adb命令：

```bash [adb]
adb uninstall com.mojang.minecraftpe
```

安卓版自助工具：[McHook](https://www.123865.com/s/dhm9-DGZ0A)或者使用[版本库APP](https://app.mcarc.top/)，原版包需在Lsposed设置中的还原内联钩子选中MC
，需要使用[Shizuku](https://github.com/RikkaApps/Shizuku)激活  
WIN版本自助工具：[点我下载](https://zihao-il.lanzouo.com/iaEZc2bb1ykf)  
或者重新安装你之前的安装包或更高版本的包然后再次卸载，保留应用数据请勿打钩即可

## 提取游戏数据

通过同包名签名覆盖安装应用来提取游戏目录中的数据  
请根据下载来源选择合适的应用来覆盖安装  
下载地址：[OneDrive](https://openlist.endyun.ltd/not-oreui/MC%E6%95%B0%E6%8D%AE%E6%8F%90%E5%8F%96)，[蓝奏云](https://zihao-il.lanzouv.com/b06xio14h)