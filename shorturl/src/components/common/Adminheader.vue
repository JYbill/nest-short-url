<template>
  <div class="adminheader">
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item v-for="item in cheaderlist" :key="item.id">{{item.content}}</el-breadcrumb-item>
</el-breadcrumb>
  <el-button type="primary" @click="singout">退出登录</el-button>
  </div>
</template>

<script>
export default {
data () {
    return {
       
    }
},
methods: {
  singout(){
    this.$router.push('/')
  }
},
props: ["cheaderlist"] //每个页面的导航不一样，这里通过父传子传值过去渲染
}
</script>

<style lang="scss" scoped>
.adminheader{
  position: relative;
  height: 60px;
  width: 96%;
  padding-left: 4%;
  background-color: #eff2f7;
  .el-breadcrumb{
    line-height: 4;
  }
  .el-button--primary{
position: absolute;
right: 10px;
top: 10px;
  }
}
</style>