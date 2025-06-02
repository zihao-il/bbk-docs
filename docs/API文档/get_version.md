# /get_version

用来获取大版本数据

请求类似为`post`

## 请求

```javascript{8}
await fetch('https://api.mcarc.top/get_version', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        v: '1.21.x', 
        b: '1' 
     })
});
```

| 参数 | 可选 |                          说明 |
|----|:--:|----------------------------:|
| v  | 否  |          查询的大版本号(例如：1.21.x) |
| b  | 是  | 是否为测试版(不填：获取全部，1：测试版，0：正式版) |

## 响应

```json5
{
  "status": 200,
  "message": [
    {
      "version_all": "1.21.xx.1",
      "version": "1.21.xx.1",
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
    },
    {
      "version_all": "1.21.xx.2",
      "version": "1.21.xx.2",
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
    },
    //...
  ]
}
```
