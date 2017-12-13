# react-native 构建淘票票
### [react构建淘票票，请点击这里](https://github.com/canfoo/react-taopiaopiao)
### [vue2.0构建淘票票，请点击这里](https://github.com/canfoo/vue2.0-taopiaopiao)

## 描述
本项目是使用react-navie构建的app项目，已经成功在ios真机跑起来，android机暂时没有测试。分享的目的无他，只供大家学习、讨论。

主要技术栈：<br/>
- react-native
- react-navigation
- mobx
- nodejs
- express

## 如何运行
下载项目
```
 git clone https://github.com/canfoo/react-native-taopiaopiao.git
```
 打开一个终端（称这个终端为A终端）进入到react-native-taopiaopiao目录安装依赖包（注意：如果`npm install` 不能正常安装完成，请使用`cnpm install`进行安装）
```
 npm install
```
 打开另一个一个终端（称这个终端为B终端）进入到server目录安装依赖包
```
 npm install
```
启动server服务（得先启动后台服务，否则app没有数据），在server目录（B终端）下执行以下命令，成功执行会终端会提示服务端口号为9000
```
 npm run start
```
启动react-native服务，在react-native-taopiaopiao目录（A终端）里执行以下命令（如果报错的话，直接在找到目录的里的启动文件，直接双击启动，例如直接双击ios内的reactNativeTaopiaopiao.xcodeproj文件）
```
 react-native run-ios
```

## 项目预览
![Mou icon](http://oimfqqetv.bkt.clouddn.com/rn_tpp_s.gif)

## 后台接口
本项目是手动抓取淘票票部分数据，数据是16年12月份的，城市数据只有北上广有数据，其它城市都是随机从北上广数据抽取过来的，电影数据也是部分有数据。抓取的数据存放在server目录里的database里，供前端调用。

1. 访问淘票票首页路径： `http://localhost:9000/app`

2. 部分数据接口
	- 获取热映数据 
	```
	method: GET
 	url: http://localhost:9000/movie/hot/?city=bj
 	参数说明: city可以为bj、sh、gz
	```
	- 获取即将上映数据 
	```
	method: GET
 	url: http://localhost:9000/movie/coming/?limit=20&offset=0
 	参数说明: limit为每次请求的数据数量，offset为所有数据的偏移量
	```
	- 获取城市数据
	```
	method: GET
 	url: http://localhost:9000/movie/city
	```
	- 获取电影院数据
	```
	method: GET
 	url: http://localhost:9000/movie/cinema/?city=bj
 	参数说明:  city可以为bj、sh、gz
	```


