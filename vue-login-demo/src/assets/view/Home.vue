<template>
<!--      <h2>欢迎用户{{ user.name }}!登录聊天室</h2>-->
<!--      <router-link to="/login">-->
<!--          <el-button>登出</el-button>-->
<!--      </router-link>-->
    <div class="bigbox">
      <div class="alert alert-primary" style="margin-bottom: -20px;text-align: center;" role="alert">聊天室</div>
      <div class="jumbotron" style="height: 500px;width: 1135px;">
          <!-- 用户列表 -->
          <div class="jumbotron" style="height: 500px;width: 200px;float: right;background-color: white;margin-top: -65px;margin-right: -30px;">
              <div class="alert alert-primary" role="alert" style="width: 200px;margin-top: -43px;margin-left: -32px;">在线用户列表：</div>
              <ul class="list-group" id="userlist" style="width: 200px;margin-top: -18px;margin-left: -32px;">

              </ul>
          </div>
          <div id="content" style="height: 500px;width: 900px;background-color: white;margin-top: -45px;margin-left: -20px;">

          </div>
      </div>
      <div class="form-group">
          <input type="text" style="width: 75%;;float: left;" class="form-control" id="message"  placeholder="请输入内容">
          <button type="button" style="width: 10%;float: left;margin-left: 50px" class="fasong btn btn-primary">发送</button>
          <button type="button" style="width: 10%;float: left;margin-left: 5px" class="qingping btn btn-primary">清屏</button>
      </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data(){
        return{
            user:{
                name:"",
            },
        };
    },
};
import "../js/home.js"
import "../js/bootstrap.min.js"
import "../js/bootstrap.js"
import "../css/bootstrap.css"
</script>

<style scoped>
  .bigbox{
      padding-left: 200px;
      padding-right: 200px;
  }
</style>