
//私发全局消息
var tomessage = "";
//私发用户名称
var tousername = "";
//清屏
$(".qingping").click(function(){
    $("#content").html(``);
})

//生成一个随机用户名
var username = "用户"+Math.floor(Math.random()*100);

//定义一个websocket
var websocket = null;

//判断当前浏览器是否支持WebSocket（固定写法）
if('WebSocket' in window){
    websocket = new WebSocket("ws://localhost:8088/home/"+username);
    // websocket = new WebSocket("ws://36.133.169.193:8088/News/"+username);
}else{
    alert('浏览器不支持websocket')
}

//连接发生错误的回调方法
websocket.onerror = function(){
    console.log("发生错误");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
    console.log("建立连接"+event);
}

//接收到消息的回调方法
websocket.onmessage = function(event){
    var data = JSON.parse(event.data);
    console.log(JSON.parse(event.data))

    //更新content的内容（上线）
    if(data.messageType=="1"){
        // console.log("成功")
        $("#content").append(`<span style="width: 100%;height: 30px;line-height: 30px;font-size: 14px;">`+data.username+"上线了"+`</span><br>`);
    }
    //更新content的内容（下线）
    if(data.messageType=="2"){
        // console.log("成功")
        $("#content").append(`<span style="width: 100%;height: 30px;line-height: 30px;font-size: 14px;">`+data.username+"下线了"+`</span><br>`);
    }
    //更新content的内容（更新用户列表）
    if(data.messageType=="3"){
        //先清空
        $("#userlist").html(``);
        var list = data.onlineUsers;
        console.log(list)
        for(var i=0;i<list.length;i++){
            $("#userlist").append(`<li style="cursor:pointer;" class="list-group-item" onclick="friend(this)" values="`+list[i]+`">`+list[i]+`</li>`);
        }
    }
    //更新content的内容（更新用户群发消息）
    if(data.messageType=="4"){
        // console.log(data);
        $("#content").append(`<span style="width: 100%;height: 30px;line-height: 30px;font-size: 14px;">`+data.username+`说:`+data.textMessage+`</span><br>`);
    }

}

//选择用户
function friend(e){
    console.log(e);
    $("#message").val("@ 私信"+e.innerHTML+" ");
    var data = e.innerHTML;
    console.log(data);
    tousername = data;
}

//连接关闭的回调方法
websocket.onclose = function(){
    console.log("关闭连接");
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function(){
    alert("已关闭连接");
    websocket.close();
}

//发送按钮
$(".fasong").click(function(){

    console.log("发送消息")
    var message = $("#message").val();
    //判断是群发还是私发
    console.log(message);
    //获取发送对象
    tousername = message.split(' ')[1];
    //获取发送消息
    tomessage = message.split(' ')[2];
    console.log(tomessage);
    console.log(tousername);
    if(message.indexOf("@")!=-1){
        //私发
        console.log("私发")
        var param = {};
        param['username'] = username;
        param['message'] = tomessage;
        param['type'] = '私发';
        param['tousername'] = tousername;
    }
    else{
        //群发
        console.log("群发")
        var param = {};
        param['username'] = username;
        param['message'] = message;
        param['type'] = '群发';
        param['tousername'] = '';
    }
    //发送消息到后端
    websocket.send(JSON.stringify(param));
})
