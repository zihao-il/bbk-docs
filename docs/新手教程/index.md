# 新手教程

## 首先

从哪下载请从哪更新，方便覆盖安装，无法下载或**解析软件包出现错误**请更换浏览器，最好别用系统自带的，已知小米浏览器或系统自带的浏览器都可能无法下载Onedrive网盘。

::: tip 注意
除了带有“原版”命名的其他的都是“去验证版本”，有能力者请购买正版。
:::

> 腾讯文档版本：[Minecraft版本命名解释及建议](https://docs.qq.com/doc/DY3RZaGhBQnphdlpI)


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
  `AndroidApi30ScopedStorage.migration.json`文件并给予游戏文件存储权限。
- `去音乐包`：去除安装包内置的音乐包，可以 [点我](https://bbk.endyun.ltd/s/musicpack) 下载音乐包，（主要是唱片的音乐）
- `原版`：原版安装包，需要谷歌验证，不是正版用户无法使用，进去则会弹出证书错误

## 游玩建议

1. 不知道装哪个建议装`Minecraft PE(B) 版本号 v8a.apk`的，
2. 从这里下载的都可以覆盖升级安装，不需要卸载再安装
3. 进去请把存储位置改为外部，在设置-存储中设置
4. 用数据进不了服务器 请把使用数据打开在设置-通用中设置
5. 看不见别人的自定义皮肤，请把仅允许受信任的皮肤关闭，在设置-通用中设置
6. 测试/预览版顶部水印去除材质：
    - [全部链接](https://sdyueqian-my.sharepoint.cn/:f:/g/personal/admin_sdyueqian_partner_onmschina_cn/EhIRFrDjZq9Iukz5lqDZND4B-PODBY2vPwD-9dQXlmiKCA)
    - [旧版](https://zihao-il.lanzouo.com/iLrzN80murc)
    - [新版\[0.0.2\]>1.21.100](https://zihao-il.lanzouo.com/ixyzM30b7t5g)：如果材质设置选择`方法1`请在视频设置中打开开关
7. 对于Root用户建议使用[McHook](https://www.123865.com/s/dhm9-DGZ0A)模块
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

如只需要修改安装包可以 [点我下载](https://sdyueqian-my.sharepoint.cn/:u:/g/personal/admin_sdyueqian_partner_onmschina_cn/EfZC9hdJ1EtHrCqJPL6Lp4oBCi4kBRnmVf2XbQbEk_VTGg?download=1)
签名秘钥方便覆盖安装，把文件移动到`MT2/keys`文件夹下，签名密码：`zihao_il`  
好消息：mt管理器已支持免费使用共存自定义包名功能，请更新最新版尝试  
首先下载APK编辑器 [开源地址](https://github.com/PatrickAlex2019/ApkEditor/releases)，[蓝奏云](https://zihao-il.lanzouo.com/i5KQx1i6g7mb0)
请选择电脑ua进行下载  
打开软件，选择应用或者APK文件，选择mc，通用编辑，在安装包名那里增加或者修改字母即可，最后点保存

## 覆盖安装失败

如果你选择保留数据卸载Minecraft导致无法再次安装请使用adb命令：

```bash [adb]
adb uninstall com.mojang.minecraftpe
```

如果不会请点我[下载](https://zihao-il.lanzouo.com/iaEZc2bb1ykf)自助工具
或重新安装你之前的安装包或更高版本的包然后再次卸载，保留应用数据请勿打钩即可

