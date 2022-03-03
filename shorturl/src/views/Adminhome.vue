<template>
  <div class="adminhome">
      <div class="home_title">
<!-- element的导航菜单 -->
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true" 
      unique-opened
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/adminhome/homechars" >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/adminhome/shortlist">
        <i class="el-icon-menu"></i>
        <span slot="title">短网址信息管理</span>
      </el-menu-item>
      <el-menu-item index="/adminhome/advertisement">
        <i class="el-icon-setting"></i>
        <span slot="title">广告管理</span>
      </el-menu-item>
    </el-menu>
      </div>
      <div class="home_content">
       
          <router-view></router-view>
     
         
      </div>
  </div>
</template>

<script>
export default {
data () {
    return {
        
    }
},
methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
.adminhome{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.home_title{
    min-height: 100%;
    width: 13%;
    float: left;
   background-color: rgb(84, 92, 100);
   i{
     font-size: 18px;
   }
   span{
     font-size: 18px;
   }
}
.home_content{
    float: left;
    min-height: 100%;
    width: 87%;
    background-color: #fff;
}
</style>