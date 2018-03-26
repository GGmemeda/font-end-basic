一、css选择器都有哪些，选择器权重
1..class
2.#id
3.*,选择所有元素
4.元素选择器
5.div p,后代选择器
6.div>p,后代第一层选择器
7.div+p，选择紧接在 <div> 元素之后的所有 <p> 元素
8.选择带有 target 属性所有元素，[attribute]
9.[attribute=value]，选择属性值为value的所有元素
10.[attribute~=value]，选择属性值中存在value的所有元素
11.[attribute|=value]，选择属性值中以value开头的元素
12.:link，选择所有未被访问的链接。
13.:visited，选择所有已被访问的链接。
14.:active,选择活动链接。
15.:hover,选择鼠标指针位于其上的链接。
16.:focus,选择获得焦点的 input 元素。
17.:first-letter,选择每个 <p> 元素的首字母。//备注:基本没有使用过哦
18.:first-line,选择每个 <p> 元素的首行。
19.:first-child,选择属于父元素的第一个子元素的每个 <p> 元素。
20.:before,在每个 <p> 元素的内容之前插入内容。
21.:after,在每个 <p> 元素的内容之后插入内容。
22.:lang(language),选择带有以 "language" 开头的 lang 属性值的每个 <p> 元素。
23.element1~element2==>	p~ul,选择前面有 <p> 元素的每个 <ul> 元素。
24.[attribute^=value],	a[src^="https"],选择其 src 属性值以 "https" 开头的每个 <a> 元素。
25.[attribute$=value],选择其 attribute 属性以 ".value" 结尾的所有 元素。
26.[attribute*=value],选择其 attribute 属性中包含 "value" 子串的每个  元素。
27.p:first-of-type,选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
28.p:last-of-type,选择属于其父元素的最后一个<p>元素的每个<p>元素。
29.p:only-of-type,选择其父元素中唯一的<p>元素
30.p:only-child，选择属于其父元素的唯一子元素的每个 <p> 元素。备注://唯一子元素
31.	p:nth-child(2),选择属于其父元素的第二个子元素的每个 <p> 元素。
32.p:nth-last-child(2),同上，从最后一个子元素开始计数。
33.p:nth-of-type(2),选择属于其父元素第二个 <p> 元素的每个 <p> 元素。
34.p:nth-last-of-type(2),同上，但是从最后一个子元素开始计数。
35.	p:last-child,选择属于其父元素最后一个子元素每个 <p> 元素。
36.:root,选择文档的根元素。
37.	p:empty,选择没有子元素的每个 <p> 元素（包括文本节点）。
38.#news:target,选择当前活动的 #news 元素。
39.input:enabled,选择每个启用的input元素
40.input:disabled，选择每个禁用的 <input> 元素
41.input:checked，选择每个被选中的 <input> 元素。
42.:not(p)，选择非 <p> 元素的每个元素。
43.::selection，选择被用户选取的元素部分。
二、盒子模型
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
三、如何实现水平居中和垂直居中
1.绝对定位实现水平居中
2.CSS3的flex实现水平居中方法
3.fit-content
4.父元素display:table,vertical-align:middle;子元素:display:table-cell;
5. display: inline-block; vertical-align: middle;
小计:
1.translateZ，产生两个layers,走Gpu渲染;
2.em根据父级标签默认字体font-size大小判断;
3.1rem等同于<html>中的font-size，不因为html font-size比例变化而变化可以理解为恒为16px;
四、css清除浮动
1.结尾处加空div标签 clear:both
2.父级div定义 overflow:hidden
3.overflow:auto 必须定义width或zoom:1，同时不能定义height，
4.before,after，