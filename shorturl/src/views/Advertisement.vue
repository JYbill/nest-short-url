<template>
  <div class="advertisement">
    <Adminheader :cheaderlist="headerlist" />
      <el-button type="primary" plain class="addbtn" @click="dialogVisible = true">新增广告</el-button>
      <el-dialog
  title="新增广告信息"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-input v-model="titleInput" placeholder="请输入广告标题" class="ipt"></el-input>
  <el-input v-model="imgUrl" placeholder="请输入广告地址" class="ipt"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addAdv">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="修改广告信息"
  :visible.sync="dialogVisibletwo"
  width="30%"
  :before-close="handleClose">
  <el-input v-model="changetitleInput" placeholder="请输入广告标题" class="ipt"></el-input>
  <el-input v-model="changeimgUrl" placeholder="请输入广告地址" class="ipt"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibletwo = false">取 消</el-button>
    <el-button type="primary" @click="changeAdvsub">确 定</el-button>
  </span>
</el-dialog>
    <div class="title">
      <el-tag class="create">创建日期</el-tag>
      <el-tag class="gName">广告名称</el-tag>
      <el-tag class="imgUrl">url路径</el-tag>
       <el-tag class="changeTime">最后修改日期</el-tag>
      <el-tag class="operation">操作</el-tag>
    </div>
    <div class="content">
      <div class="list" v-for="item of advList" :key="item._id">
        <el-tag type="info" class="create">{{item.create_time}}</el-tag>
        <el-tag type="info" class="gName">{{item.name}}</el-tag>
        <el-tag type="info" class="imgUrl">{{item.image_url}}</el-tag>
        <el-tag type="info" class="changeTime">{{item.update_time}}</el-tag>
        <el-tag type="info" class="operation">
          <el-tag class="del" color='#FF0000' @click="del(item._id)">删除</el-tag>
           <el-tag class="change" color="#6495ED"  @click="changeAdv(item._id)">修改</el-tag>
        </el-tag>
      </div>
      <!-- 使用element的分页组件 -->
     <!-- <el-pagination
        background
        layout="prev, pager, next"
        hide-on-single-page
        :pager-count="pagelength"
        :current-page="pagindex"
        :page-size="pagesize"
        @current-change="changeindex"
        :total="alllength"
      >
      </el-pagination> -->
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
      dialogVisible: false,
      dialogVisibletwo:false,
      headerlist: [{ id: 3, content: "广告管理" }],
      imgUrl:'',
      titleInput:'',
      changetitleInput:'',
      changeimgUrl:'',
       // 控制分页的
      pagelength: 5, //默认显示的页数长度
      pagindex: 1, //默认显示的是第几页
      pagesize: 10, //每页显示的内容有多少条
      nowpagelist: [], //当前页数据
      alllength:100,//所有数据的长度
      advList:[],
      changeId:''
    };
  },
  created () {
    this.getAdvPage();
  },
methods: {
  //新增广告
  addAdv(){
    this.dialogVisible=false;
request({
  url:"/ad/add",
  method:"post",
  data:{
    image_url:this.imgUrl,
    name:this.titleInput
  }
}).then(reg=>{
  if(reg.data.code==200){
    this.$message({
          message: '新增一条广告成功',
          type: 'success'
        });
        this.getAdvPage();
  }
})
  },
     changeindex(index){
      console.log(index);
      this.startslice = this.pagesize * (index - 1); //点击分页按钮改变起始截取的数据
      this.nowpagelist = this.alllist.slice(this.startslice, this.endslice);
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
     handleClose(done) {
            done();
      },
      del(id){
this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(id);
          request({
            url:"/ad/"+id,
            method:'delete',
          }).then(reg=>{
            if(reg.data.code==200){
              this.getAdvPage();
              this.$message({
          message: '删除成功！',
          type: 'success'
        });
            }
            this.getShortPage();
          })
        }).catch(() => {
                  
        });
      },
      changeAdv(id){
        this.dialogVisibletwo=true;
        this.changeId=id;
      },
      changeAdvsub(){
        this.dialogVisibletwo=false;
        console.log(this.changeId,this.changetitleInput);
        request({
          url:"/ad",
          method:'put',
          data:{
            _id:this.changeId,
            name:this.changetitleInput,
             image_url:this.changeimgUrl
          }
        }).then(reg=>{
          // console.log(reg);
          if(reg.data.code==200){
            this.getAdvPage();
              this.$message({
          message: '修改成功！',
          type: 'success'
        });
          }
        })
      }
  },
  components: {
    Adminheader,
  },
};
</script>

<style lang="scss" scoped>
.advertisement{
  .ipt{
    margin-bottom: 15px;
  }
  .addbtn{
    margin-left: 20px;
    margin-top: 10px;
  }
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
    .gName{
      flex:1
    }
    .imgUrl{
      flex:5
    }
     .changeTime{
      flex: 1;
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
    .gName{
      flex:1
    }
    .imgUrl{
      flex:5
    }
    .changeTime{
      flex: 1;
    }
    .operation{
      flex:1
    }
    .del{
      color: #fff;
      cursor: pointer;
      margin-right: 10px;
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