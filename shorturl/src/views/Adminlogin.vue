<template>
  <div class="adminlogin">
     
     <h3>短网址后台登录</h3>
     <p><i class="el-icon-user"></i><el-input v-model="adminuser" placeholder="用户名"></el-input></p>
     <p><i class="el-icon-lock"></i><el-input type="password" show-password v-model="adminpwd" placeholder="密码"></el-input></p>
       <el-button type="primary" @click="loginadmine">确认登录</el-button>
  </div>
</template>

<script>
// 引入封装的网络请求组件
import {request} from "@/utils/request.js";
export default {
data () {
    return {
        adminuser:'',//管理员用户名
        adminpwd:''//管理员密码
    }
},
methods: {
    loginadmine(){
        request({
            url:"/user/login",
            method:'post',
            data:{
                username:this.adminuser,
                password:this.adminpwd
            }
        }).then(reg=>{
            if(reg.data.code==200){
                this.$notify({
          title: '登录成功！',
          message: '已为您跳转管理员首页',
          type: 'success'
        });
            this.$router.push('/adminhome/homechars')
            }else if(reg.data.code==400){
                 this.$notify({
          title: '用户名或密码不正确！',
          message: '请重新输入',
          type: 'warning'
        });
            }else{
                this.$notify.error({
          title: '错误',
          message: '输入了非法的字段，请重新输入！'
        });
            }
        })
   
    }
}
}
</script>

<style lang="scss" scoped>
.adminlogin{
    width: 400px;
    height: 400px;
    margin: 150px auto;
    background-color: #fff;
    overflow: hidden;
    h3{
        text-align: center;
        font-weight: 400;
        color: #428BCA;
        font-size: 26px;
        margin-top: 20px;
    }
    p{
        padding-left: 60px;
        height: 40px;
        line-height: 40px;
        margin-top: 40px;
        i{
            font-size: 30px;
            margin-right: 5px;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            margin-top: 5px;
        }
        .el-input{
            width: 250px;
        }
    }
    .el-button--primary{
        margin-top: 50px;
        margin-left: 40%;
    }
}
</style>