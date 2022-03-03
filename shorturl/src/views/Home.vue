<template>
  <div class="home">
    <div class="header">
      <el-link type="primary" @click="goAdminLogin">网站后台</el-link>
    </div>
    <div class="title">
      <h5>urlShort</h5>
    </div>
    <div class="content">
      <h6>目前仅支持http及https开头的网址转换短链接</h6>
      <el-input
        v-model="fromurl"
        placeholder="请输入需要缩短的网址..."
        class="customStyle-input"
        @input="changeFromurl"
        v-loading="loading"
      >
        <template slot="prepend">Https://</template>
      </el-input>
      <el-button type="text" @click="dialogVisible = true">高级设置</el-button>
      <el-dialog
        title="自定义短网址"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-input v-model="custom" placeholder="请输入自定义内容"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-button
        type="primary"
        class="btn"
        :disabled="isdisabled"
        @click="showUrl"
        >生成短网址</el-button
      >
      <el-tag
        v-clipboard:copy="fromurl"
        v-clipboard:success="onCopy"
        class="copy"
        type="success"
        >复制到剪切板</el-tag
      >
    </div>
    <div class="banner">
      <div class="bannerlist" v-for="item of advList" :key="item._id">
        <img :src="item.image_url" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// 引入封装的网络请求
import { request } from "@/utils/request.js";

export default {
  name: "Home",
  data() {
    return {
      fromurl: "", //正常转换
      custom: "", //自定义转换
      isdisabled: true, //控制按钮是否可用
      dialogVisible: false,
      loading: false,
      pagindex: 1, //默认显示的是第几页
      pagesize: 2, //每页显示的内容有多少条
      advList:[]
    };
  },
  created () {
    this.getAdvPage();
  },
  components: {},
  methods: {
    handleClose(done) {
      done();
    },
    //使用正则匹配输入的是否是网址
    changeFromurl() {
      // console.log(this.fromurl);
      let str = this.fromurl;
      let isUrl = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/;
      if (str.match(isUrl) != null) {
        this.isdisabled = false;
      } else {
        this.isdisabled = true;
      }
    },
    //提交生成短网址
    showUrl() {
      this.loading = true;
      //判断是否使用自定义网址
      if (this.custom) {
        request({
          url: "/",
          method: "post",
          data: {
            url: this.fromurl,
            key: this.custom,
          },
        }).then((reg) => {
          if (reg.data.code == 200) {
            this.loading = false;
            this.fromurl = reg.data.data.url;
            this.$message({
              message: "已为您生成短网址！",
              type: "success",
            });
          }
        });
      } else {
        request({
          url: "/",
          method: "post",
          data: {
            url: this.fromurl,
          },
        }).then((reg) => {
          console.log(reg);
          if (reg.data.code == 200) {
            console.log(reg);
            this.loading = false;
            this.fromurl = reg.data.data.url;
            this.$message({
              message: "已为您生成短网址！",
              type: "success",
            });
          }
        });
      }
    },
    onCopy() {
      this.$message.success("已为您复制到剪切板！");
      console.log(this.fromurl);
    },
    goAdminLogin(){
      this.$router.push('/adminlogin')
    },
     //分页请求广告列表
    getAdvPage(){
      request({
        url:"/ad/all",
        method:"post",
        data:{
          pageNumber:this.pagesize,
          currentNumber:this.pagindex
        }
      }).then(reg=>{
        console.log(reg);
        reg.data.data.forEach(item => {
          item.create_time=new Date(item.create_time).toLocaleString();
          item.update_time=new Date(item.update_time).toLocaleString();
        });
        this.advList=reg.data.data
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  margin-top: 20px;
  .header{
    width: 96%;
    height: 50px;
    text-align: right;
    padding-right: 4%;
  }
  .title {
    width: 500px;
    height: 150px;
    margin: 0 auto;
    h5 {
      font-weight: 300;
      font-size: 100px;
      text-align: center;
      opacity: 0.2;
    }
  }
  .content {
    width: 500px;
    min-height: 300px;
    margin: 10px auto;
    h6 {
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      opacity: 0.3;
    }
    .customStyle-input {
      margin: 30px 0;
    }
    .btn {
      margin-left: 30%;
      margin-right: 10%;
    }
    .copy {
      cursor: pointer;
    }
  }
  .banner{
    width: 100%;
    height: 200px;
    
  }
  .bannerlist:nth-child(1){
    float: left;
    
    img{
      width: 400px;
    }
  }
  .bannerlist:nth-child(2){
    float: right;
    
    img{
      width: 400px;
    }
  }
}
</style>