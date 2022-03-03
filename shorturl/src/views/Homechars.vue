<template>
  <div class="homechars">
    <Adminheader :cheaderlist="headerlist" />
    <div class="charsnum">
      <h3>短网址数据处理统计</h3>
      <div class="tag">
        <el-tag type="success"><span>今日已处理{{todaylength}}条短网址</span></el-tag>
        <el-tag ><span>近七日处理{{weekLength}}条短网址</span></el-tag>
        <el-tag type="info">共计处理{{alllength}}条短网址</el-tag>
      </div>
    </div>
    <div id="myChart"></div>
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
      headerlist: [{ id: 1, content: "首页" }],
      alllength:0,
     timeArr:[],
     weekList:[], //一周的数据
     weekLength:0,
     todaylength:0
    };
  },
created () {
  this.gettime() //获取当前时间
  this.getAllLength()//获取总条数
  this.getWeekList()//获取一周的数据
  this.getTodayLength()
},
  mounted() {
    console.log(this.weekList);
    setTimeout(() => {
    this.drawLine();
    },900);
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
       xAxis: {
    type: 'category',
    data: this.timeArr
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: this.weekList,
      type: 'line'
    }
  ]
      });
    },
    gettime () {
        var myDate = new Date() // 获取今天日期
        myDate.setDate(myDate.getDate() - 6)
        var dateArray = []
        var dateTemp
        var flag = 1
        for (var i = 0; i < 7; i++) {
        dateTemp = (myDate.getMonth() + 1) + '月' + myDate.getDate() +'日'
        dateArray.push(dateTemp)
        myDate.setDate(myDate.getDate() + flag)
        }
        this.timeArr=dateArray;
    },
    getAllLength(){
//获取总条数
    request({
      url:"/info/count",
    }).then(reg=>{
      if(reg.data.code==200){
        this.alllength=reg.data.data;
        console.log(this.alllength);
      }
    })
    },
    //最近一周的数据
    getWeekList(){
      request({
        url:"/info/week",
      }).then(reg=>{
        if(reg.data.code==200){
          console.log(reg.data.data);
          reg.data.data.forEach(item => {
          this.weekList.push(item.total);
          this.weekLength+=item.total;
        });
        // this.sortWeekList();
        this.weekList.reverse();
        }
      })
    },
    // 今日处理的条数
    getTodayLength(){
      request({
        url:"/info/today"
      }).then(reg=>{
        this.todaylength=reg.data.data;
      })
    },
  },
  components: {
    Adminheader,
  },
};
</script>

<style lang="scss" scoped>
.homechars {
  .charsnum {
    width: 600px;
    height: 200px;
    margin: 0 auto;
    h3 {
      text-align: center;
      margin-bottom: 20px;
      margin-top: 15px;
    }
    .tag {
        width: 600px;
        height: 35px;
        margin: 0 auto;
      .el-tag {
        margin-right: 15px;
        span{
            font-weight: 600;
            font-size: 14px;
        }
      }
    }
  }
  #myChart {
    width: 700px;
    height: 350px;
    margin: 0 auto;
  }
}
</style>