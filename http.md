https请求http资源:
1.推荐方法，不指定具体协议，使用资源协议自适配，比如，当前为https页面，那么就是https资源，如果是http页面，那么就是http资源。具体方法超简单：<script src='//www.aa.com/jquery.js'></script>
2.消除请求警告:<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
3.服务器响应头中设置:
header("Content-Security-Policy: upgrade-insecure-requests");