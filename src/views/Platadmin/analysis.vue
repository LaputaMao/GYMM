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

            <div id="myCharts" :style="{ width: '1100px', height: '565px' }"></div>
        </div>
    </div>
</template>

<script>

import { inject, onMounted,  } from "vue";
import * as echarts from 'echarts';

export default {
    name: "donate",
    setup() {
        // let myChart = this.$root.echarts.init(
        //     document.getElementById("myChart")
        // );
        let echarts = inject("ec");
        onMounted(() => {
            let myChart = echarts.init(document.getElementById("myCharts"));

            myChart.setOption({
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 20
                        },
                        data: [
                            { value: 40, name: '健身房总数' },
                            { value: 38, name: '日活跃人数' },
                            { value: 32, name: '注册用户总数' },
                            { value: 30, name: '投放广告数' },
                            { value: 28, name: '不活跃健身房数' },
                            { value: 26, name: '统计数据 6' },
                            { value: 22, name: '统计数据 7' },
                            { value: 18, name: '统计数据 8' }
                        ]
                    }
                ]
            })

        })
    }
};
</script>

<style>
</style>