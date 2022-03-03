<template>
  <div class="shortlist">
    <Adminheader :cheaderlist="headerlist" />
    <div class="title">
      <el-tag class="create">创建日期</el-tag>
      <el-tag class="old">原网址</el-tag>
      <el-tag class="new">短网址</el-tag>
      <el-tag class="operation">操作</el-tag>
    </div>
    <div class="content">
      <div class="list" v-for="item in nowpagelist" :key="item._id">
        <el-tag type="info" class="create">{{item.create_time}}</el-tag>
        <el-tag type="info" class="old">{{item.url}}</el-tag>
        <el-tag type="info" class="new">https://no.jybill.top/url/{{item.custom_key}}</el-tag>
        <el-tag type="info" class="operation">
          <el-tag class="del" color='#FF0000'  @click="del(item._id)">删除</el-tag>
          <!-- <el-tag class="change" color="#6495ED">修改</el-tag> -->
        </el-tag>
      </div>
      <!-- 使用element的分页组件 -->
     <el-pagination
        background
        layout="prev, pager, next"
        hide-on-single-page
        :pager-count="pagelength"
        :current-page="pagindex"
        :page-size="pagesize"
        @current-change="changeindex"
        :total="alllength"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// 引入封装的管理员头部组件
import Adminheader from "@/components/common/Adminheader.vue";
// 引入网络请求组件
import {request} from "@/utils/request.js";
export default {
  data() {
    return {
      headerlist: [{ id: 2, content: "短网址信息管理" }],
       // 控制分页的
      pagelength: 5, //默认显示的页数长度
      pagindex: 1, //默认显示的是第几页
      pagesize: 15, //每页显示的内容有多少条
      startslice: 0, //开始截取的长度
      endslice: 5, //结束截取的长度
      nowpagelist: [], //当前页数据
      alllength:0,//所有数据的长度
    };
  },
  created () {
    this.getAllShortList()
  },
  methods: {
    getAllShortList(){
//获取总条数
    request({
      url:"/info/count",
    }).then(reg=>{
      if(reg.data.code==200){
        this.alllength=reg.data.data;
        console.log(this.alllength);
      }
    })
    this.getShortPage();
    },
    getShortPage(){
//分页查询
    request({
      url:"/info/all",
      method:'post',
      data:{
        pageNumber:this.pagesize,
        currentNumber:this.pagindex
      }
    }).then(reg=>{
     if(reg.data.code==200){
       reg.data.data.urls.forEach(item => {
         item.create_time=new Date(item.create_time).toLocaleString(); //将时间戳转换为正常时间
       });
       this.nowpagelist= reg.data.data.urls;
     }
    })
    },
    //点击分页按钮
     changeindex(index){
      console.log(index);
      this.pagindex=index;
     this.getShortPage();
    },
    //根据id删除
    del(id){
       this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(id);
          request({
            url:"/info/"+id,
            method:'delete',
          }).then(reg=>{
            if(reg.data.code==200){
              this.$message({
          message: '删除成功！',
          type: 'success'
        });
            }
            this.getShortPage();
          })
        }).catch(() => {
                  
        });
    }
  },
  components: {
    Adminheader,
  },
};
</script>

<style lang="scss" scoped>
.shortlist{
  .title{
    width: 80%;
    height: 35px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    margin-top: 10px;
    .create{
      flex: 1;
    }
    .old{
      flex:3
    }
    .new{
      flex:2
    }
    .operation{
      flex:1
    }
  }
  .content{
    width: 80%;
    margin: 0 auto;
    height: 700px;
    position: relative;
    .list{
      width: 100%;
      height: 35px;
      display: flex;
      text-align: center;
      .create{
      flex: 1;
    }
    .old{
      flex:3
    }
    .new{
      flex:2
    }
    .operation{
      flex:1
    }
    .del{
      color: #fff;
      // margin-right: 10px;
      cursor: pointer;
    }
    .change{
      color:#fff;
      margin-left: 10px;
      cursor: pointer;
    }
    }
    .el-pagination {
    position: absolute;
    bottom: 40px;
    right: 60px;
  }
  }
}
</style>