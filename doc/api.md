# API reference
## 模型
使用的唯一模型是 [pdfMake](https://pdfmake.github.io/docs/) 的`docDefinition`。

一个例子：
```json
{
	"defaultStyle": {
    	"font": "SourceHanSans"
    },
	"content":[
		{"text":"电子档案","style":"header"},
		{"text":"个人信息","style":"header2"},
		{
			"table": {
				"headerRows":0,
				"widths":["auto","*","auto","*","auto"],
				"body":[
				[
					{"text":"学号"},
					{"text":"00000000"},
					{"text":"姓名"},
					{"text":"测试"},
					{"text":""}
				],[
					{"text":"性别"},
					{"text":"无"},
					{"text":"专业"},
					{"text":"PPT制作与吹逼"},
					{"text":""}
				],[
					{"text":"学院"},
					{"text":"计算机PPT与研讨学院"},
					{"text":"身份证号码"},
					{"text":"000000000000000000"},
					{"text":""}
				]
				]
		},"margin":[0,0,0,10]},
		{"text":"我参加的活动","style":"header2"}
	],
	"styles":{
		"header":{"fontSize":24,"alignment":"center"},
		"header2":{"fontSize":18,"alignment":"left"}
	}
}
```
注意目前支持的字体仅有`SourceHanSans`一种，需要其他字体，请在issue中提出。

图片请直接使用其`base64`字符串。

更多信息请阅读[官方文档](https://pdfmake.github.io/docs/)。

## Web
- `GET /ping`

  检查服务是否可用，应该直接返回`pong`。

- `POST /`

  根据post的`docDefinition`制作pdf，返回结果的octet-stream。
