module.exports = {
	"extends": "airbnb-base",
	"plugins": [
		"import"
	],
	"rules": {
		"global-require": 0,
		"indent": [0, "tab"], // 去掉tab约定,IDE会有问题
		"no-new": 0, // 避免vue 必须new调用的注释
		"no-var": 0, // 避免vue 必须new调用的注释
		"no-trailing-spaces": [0, { "skipBlankLines": true }],// 去掉行未得空格
		"no-tabs": 0,
		"no-console": 0,
		"key-spacing": 0,
		"prefer-arrow-callback": 0
	},
};