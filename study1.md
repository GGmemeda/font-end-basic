十二、html5新特性，新api都有哪些
不是html5:
        1)SVG
        2)CSS3
        3)Geolocation
        4)Client Storage
        5)Web Sockets
        26. Data属性
1.语义化标签;
2.HTML5 Canvas
3.拖放
4.HTML5 地理定位
5.HTML5  Audio(音频)、Video(视频)
6.HTML5 Input 类型
7.HTML5 表单元素，表单属性
8.HTML5 Web 存储
9.HTML5 离线Web应用（应用程序缓存）
10.HTML5 Web Workers
11.HTML5 SSE
12.HTML5 WebSocket
十三、http于https,https安全
https:即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
http:超文本传输协议，信息是明文传输。
区别:https 则是具有安全性的ssl加密传输协议http和https使用的是完全不同的连接方式用的端口也不一样,前者是80,后者是443。
十四、http2
定义:让所有互联网通路默认选择的方式来引入加密,互联网专家们将新一代加密协议称为“HTTP 2.0”。
异步连接多
优化Web应用交付层（HTTP 2.0）
路复用；
头部压缩；
请求/响应管线化；
管线化技术——客户端可以发送多次请求到服务端,而不需要等待上一次请求得到响应的时候才能进行下一次请求。
保持与HTTP 1.1语义的向后兼容性也是该版本的一个关键目标。
十五、node.js理解，与传统服务器最大的区别，使用场景。
传统方式：创建好html文件后，通过浏览器访问它，然后让它自动发送到客户端
node方式:  我们必须先打开文件，读取其中的内容，然后再将这些内容发送给浏览器
对高并发处理很强,例如:的高性能处理，RESTFUL API、实时聊天、客户端逻辑强大的单页APP
十六、前端发展史，前端工程化理解。
应该从模块化、组件化、规范化、自动化四个方面来思考:
1.模块化就是将一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载。只有这样，才有多人协作的可能。
2.模块化只是在文件层面上，对代码或资源的拆分；而组件化是在设计层面上，对UI（用户界面）的拆分。
初期规范制定:
目录结构的制定
编码规范
前后端接口规范
文档规范
组件管理
Git分支管理
Commit描述规范
定期CodeReview
视觉图标规范
3.前端工程化的很多脏活累活都应该交给自动化工具来完成。
4.雪碧图等合并,统一走webpack
5.前端自动化测试，Karma + Mocha + Chai，很关键
注:性能、稳定性、可用性、可维护性这些才是开发者需要持续关注的问题。
十七:解释器和编译器语言的区别和利弊，JIT(just-in-time)的特点又是什么？
解释器（英语：Interpreter），又译为直译器，是一种电脑程序，能够把高级编程语言一行一行直接转译运行。运用广泛的网络编程语言java则同时有解释和编译方式。
解释器是在“一边编译，一边运行”
编译器:把源程序的每一条语句都编译成机器语言,并保存成二进制文件,这样运行时计算机可以直接以机器语言来运行此程序,速度很快;
JIT是一种提高程序运行效率的方法。通常，程序有两种运行方式：静态编译与动态解释。静态编译的程序在执行前全部被翻译为机器码，而解释执行的则是一句一句边运行边翻译。