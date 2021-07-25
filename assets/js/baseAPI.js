//在这个函数中，我们可以拿到我们给的Ajax提供的配置对象
//会先调用AjaxPrefilter这个函数
//在这个函数中，可以拿到我们给的Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    //在发起真正的Ajax请求之前，统一拼接请求的路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})