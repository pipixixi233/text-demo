<template>
  <div>
      <el-card class="box-card">
          <h2>登录聊天室</h2>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-position="left"
            label-width="70px"
            class="login-form"
          >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                   type="password"
                   v-model="ruleForm.password"
                   autocomplete="off"
                >
                </el-input>
            </el-form-item>
          </el-form>
          <div class="btnGroup">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="submitForm('ruleForm')">重置</el-button>
            <router-link to="/register">
                <el-button style="margin-left: 10px">注册</el-button>
            </router-link>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "login",
    data(){
        return{
            ruleForm:{
                name:"",
                password:"",
            },
            rules:{
                name:[
                    {required:true,message:"用户名不能为空!",trigger:"blur"},
                ],
                password: [
                    {required:true,message:"密码不能为空!",trigger:"blur"},
                ],
            },
            loading:false,
        };
    },
    methods:{
        submitForm(formName){
              this.$refs[formName].validate((valid)=>{
                  this.loading=true;
                  if (valid){
                      let _this=this;
                      this.axios({
                          url:"/api/user/login",
                          method:"post",
                          headers:{
                              "Content-Type":"application/json",
                          },
                          params:{
                              name:_this.ruleForm.name,
                              password:_this.ruleForm.password,
                          },
                      }).then((res)=>{
                          if (res.data.data!==null){// 当响应的编码为 0 时，说明登录成功
                              sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
                              this.$router.push('/home');
                              this.$message({
                                  message:res.data.msg,
                                  type:"success",
                              });
                          }else {
                              this.$message({// 当响应的编码不为 0 时，说明登录失败
                                  message: res.data.msg,
                                  type: "warning",
                              });
                          }
                          _this.loading=false;
                          console.log(res);
                      })
                      console.log("submit!");
                  }else {
                      console.log("error submit!!");
                      this.loading=false;
                      return false;
                  }
              });
        },
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
    }
}
</script>

<style scoped>
  .box-card{
      margin: auto auto;
      width: 400px;
  }
  .login-form{
      margin: auto auto;
  }
</style>