# /search_version

用来获取搜索版本数据

请求类型为`get`

::: tip 小提示
搜索是通过`version`的值来进行查询的
:::

## 请求

```javascript
await fetch('https://api.mcarc.top/search_version?s=1.20.1&m=1&b=2', {
    method: 'GET',
});
```

| 参数 | 可选 |                            说明 |
|----|:--:|------------------------------:|
| s  | 否  |                        查询的版本号 |
| m  | 是  |                是否启用模糊查询(1：启用) |
| b  | 是  | 是否为测试版(不填/2：获取全部，1：测试版，0：正式版) |

## 响应

```json5
{
  "status": 200,
  "message": [
    {
      "version_all": "1.20.1.0",
      "version": "1.20.1.0",
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
      "version_all": "1.20.2.3",
      "version": "1.20.2.3",
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
