$(function(){
    // 注册点击
    $("#reg-box").on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
      
    })
    // 登录点击
    $("#login-box").on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
    // 自定义表单规则 
    // 从layui获取表单元素
    var form = layui.form
    // 获取提示语出来
    var layer = layui.layer
    form.verify({
        // 自定义规则密码
        pwd:[
            // 正则表达式
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ] ,
        repwd:function(value){
            //通过形参取出确认密码框的元素
            //还需要取到密码框中的内容
            //然后进行一次判断
            var pwd = $('.reg-box [name = password]').val()
            if(pwd !==value){
                return '两次密码不一致！'
            }
        }
       
    })
     // 注册表单监听事件
     $("#form_reg").on('submit',function(e){
         //1.阻止默认提交行为
         e.preventDefault();
        //2.发起Ajax请求
        $.post('http://api-breakingnews-web.itheima.net/api/reguser',{
            username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()
        },function(res){
            if(res.status !==0){
                
                return layer.msg(res.message)
            }
            console.log("注册成功！")
            layer.msg("注册成功！")
        }
        
        )
       
      

    })
})