<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>数据</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <!--do something-->
      <!-- <div id="myCharts" :style="{ width: '1100px', height: '600px' }"></div> -->

      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">选择时间区间</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            value-format="YYYY-MM-DD"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :size="size"
            @change="show()"
          />
        </div>
      </div>

      <div id="LineCharts" :style="{ width: '1100px', height: '600px' }"></div>

      <div class="demo-date-picker"></div>

      <div
        id="RateLineCharts"
        :style="{ width: '1100px', height: '600px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import * as echarts from "echarts";
import { AdminData } from "../../api/index";
import { auto } from "@popperjs/core";
export default {
  name: "donate",
  setup() {
    const value1 = ref("");
    let LineCharts;
    let RateLineCharts;
    // let LineCharts = this.$root.echarts.init(
    //     document.getElementById("LineCharts")
    // );
    let echarts = inject("ec");
    onMounted(() => {
      //let LineCharts = echarts.init(document.getElementById("LineCharts"));
      //   myChart.setOption({
      //     legend: {
      //       top: "bottom",
      //     },
      //     toolbox: {
      //       show: true,
      //       feature: {
      //         mark: { show: true },
      //         dataView: { show: true, readOnly: false },
      //         restore: { show: true },
      //         saveAsImage: { show: true },
      //       },
      //     },
      //     series: [
      //       {
      //         name: "Nightingale Chart",
      //         type: "pie",
      //         radius: [50, 250],
      //         center: ["50%", "50%"],
      //         roseType: "area",
      //         itemStyle: {
      //           borderRadius: 20,
      //         },
      //         data: [
      //           { value: 40, name: "健身房总数" },
      //           { value: 38, name: "日活跃人数" },
      //           { value: 32, name: "注册用户总数" },
      //           { value: 30, name: "投放广告数" },
      //           { value: 28, name: "不活跃健身房数" },
      //           { value: 26, name: "统计数据 6" },
      //           { value: 22, name: "统计数据 7" },
      //           { value: 18, name: "统计数据 8" },
      //         ],
      //       },
      //     ],
      //   });
    });

    const show = () => {
      // console.log(value1.value[0])
      // console.log(value1.value[1])
      createTable(value1.value[0], value1.value[1]);
    };

    const AdTotalNumData = [];
    const AdTotalIncomeData = [];
    const GymTotalNumData = [];
    const userTotalNumData = [];

    const TitleData = [];
    const DateData = [];
    const RateTitleData = [];

    const AdAddedNumData = [];
    const GymAddedNumData = [];
    const UserAddedNumData = [];

    const createTable = (start, end) => {
      console.log(start + "---" + end);
      LineCharts = echarts.init(document.getElementById("LineCharts"));
      RateLineCharts = echarts.init(document.getElementById("RateLineCharts"));
      AdminData({ s: start, e: end }).then((res) => {
        //console.log(res.data);

        dealTableData(res);

        LineCharts.setOption({
          title: {
            text: "数据总览",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: TitleData,
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            data: DateData,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "AdTotalNum",
              type: "line",
              // stack: "Total",
              data: AdTotalNumData,
            },
            {
              name: "AdTotalIncome",
              type: "line",
              // stack: "Total",
              data: AdTotalIncomeData,
              // data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "GymTotalNum",
              type: "line",
              // stack: "Total",
              data: GymTotalNumData,
              // data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: "userTotalNum",
              type: "line",
              // stack: "Total",
              data: userTotalNumData,
              // data: [320, 332, 301, 334, 390, 330, 320],
            },
          ],
        });

        RateLineCharts.setOption({
          title: {
            text: "数据变化总览",
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: RateTitleData,
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            data: DateData,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "AdAdded",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: AdAddedNumData,
            },
            {
              name: "GymAdded",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: GymAddedNumData,
              // data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "UserAdded",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: UserAddedNumData,
              // data: [150, 232, 201, 154, 190, 330, 410],
            },
          ],
        });
      });
    };

    const dealTableData = (res) => {
      console.log(res);

      TitleData.push("AdTotalNum");
      TitleData.push("AdTotalIncome");
      TitleData.push("GymTotalNum");
      TitleData.push("userTotalNum");

      RateTitleData.push("adAddedNum");
      RateTitleData.push("gymAddedNum");
      RateTitleData.push("userAddedNum");

      AdTotalNumData.length = 0;
      AdTotalIncomeData.length = 0;

      GymTotalNumData.length = 0;
      userTotalNumData.length = 0;
      DateData.length = 0;

      AdAddedNumData.length = 0;
      GymAddedNumData.length = 0;
      UserAddedNumData.length = 0;

      for (let item of res.data) {
        //console.log(item);
        AdTotalNumData.push(item.adTotalNum);
        AdTotalIncomeData.push(item.adTotalIncome);
        DateData.push(TimestampToTime(item.date).substring(0, 10));
        GymTotalNumData.push(item.gymTotalNum);
        userTotalNumData.push(item.userTotalNum);

        AdAddedNumData.push(item.adAddedNum);
        GymAddedNumData.push(item.gymAddedNum);
        UserAddedNumData.push(item.userAddedNum);
      }

      // console.log(TitleData)

      // console.log(AdTotalIncomeData);
      // console.log(AdTotalNumData);
      // console.log(DateData);
      // console.log(GymTotalNumData);
      // console.log(userTotalNumData);
    };

    const TimestampToTime = (timestamp) => {
      timestamp = timestamp ? timestamp : null;
      let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    };

    return {
      value1,
      show,
    };
  },
};
</script>

<style>
.demo-date-picker {
  margin-bottom: 50px;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>