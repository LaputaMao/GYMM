<!-- 修改会员卡 -->
<!-- 通知发布 -->

<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>健身房信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- 健身房信息展示-->
            <el-container>
                <el-main>
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>{{ mainData.name }}</span>
                                <el-button class="button" text @click="turnToFixGym()">修改</el-button>
                            </div>
                        </template>
                        <!-- <div v-for="o in 4" :key="o" class="text item">{{}}</div> -->
                        <div class="text item">{{ "健身房简介：" + mainData.introduction }}</div>
                        <div class="text item">{{ "电话：" + mainData.mainPhone }}</div>
                        <div class="text item">{{ "备用电话：" + mainData.sparePhone }}</div>
                        <!-- <div class="text item">{{ "id：" + mainData.id }}</div> -->


                        <!-- 健身房图片 -->

                        <div v-if="mainData.id != 0">
                            <img :src="url" class="rightulliimg" />
                        </div>

                    </el-card>
                </el-main>
                <el-main>
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>{{ "健身房场所" }}</span>
                                <el-button class="button" text @click="turnToFixSite()">修改</el-button>
                            </div>
                        </template>
                        <el-card v-for=" i in mainData.gymAreas" v-bind:key="i" class="text item">
                            <template #header>
                                {{ i.name }}
                            </template>
                            {{ "区域简介：" + i.introduction }}
                        </el-card>
                    </el-card>
                </el-main>
                <el-main>
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>{{ "会员卡" }}</span>
                                <el-button class="button" text @click="turnToFixCard()">修改</el-button>
                            </div>
                        </template>
                        <el-card v-for=" i in mainData.membershipCards" v-bind:key="i" class="text item">
                            <template #header>
                                {{ i.name }}
                            </template>
                            {{ "有效期：" + i.duration }}<br />
                            {{ "价格：" + i.price }}<br />
                        </el-card>
                    </el-card>


                </el-main>
                <el-footer>
                    <!-- <el-button type="primary" @click="Create_order()">提交</el-button> -->
                </el-footer>
            </el-container>

            <!-- 跳转健身房信息修改页面 -->

        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { GetGymInfo, GetGymHeadshot } from "../../api";
import { ElMessage } from "element-plus";
import { axios } from "axios";

// const axios = require('axios');

export default {
    name: "donate",


    setup() {
        onMounted(() => {
            _GetGymInfo();
        })
        //储存健身房基本信息
        const router = useRouter();
        const gymImg = ref({});

        const baseData = reactive({
            id: 1,
            name: 'gym',
            introduction: "introduction",
            mainPhone: 1100,
            sparePhone: 1100,
        });
        // const baseData = ref({});

        //储存场所信息
        let mainData = reactive({
            id: 0,
            name: "gymName",
            introduction: "gymINtroduction",
            mainPhone: "gymTel",
            sparePhone: "gymSpareTel",
            gymAreas: ref([]),
            membershipCards: ref([]),
        });
        let test = reactive([
            { id: "", name: "n", introduction: "" },
            // { id: "", name: "n", introduction: "" },
            // { id: "", name: "n", introduction: "" },
            // { id: "", name: "n", introduction: "" },
            // { id: "", name: "n", introduction: "" },
        ])
        //储存会员卡信息
        let cardData = reactive([]);

        const _GetGymInfo = () => {
            console.log("获取健身房信息");
            GetGymInfo().then((res) => {
                console.log(res.data);
                let response = res.data;
                Object.assign(mainData, response);
                // console.log("main" + mainData.gymAreas[0].name);
                // siteData = res.data.gymAreas;
                // cardData = res.data.membershipCards;
                // baseData.name = res.data.name;
                // baseData.introduction = res.data.introduction;
                // baseData.mainPhone = res.data.mainPhone;
                // baseData.sparePhone = res.data.sparePhone;

                // console.log("site" + siteData[0].name);
                // console.log("card" + cardData[0].name);
                // console.log("--" + siteData[0].value.name);
                //数据储存web
            })
        }
        const turnToFixGym = () => {
            ElMessage.success("跳转");
            router.push("/fixgym");
        }
        const turnToFixSite = () => {
            ElMessage.success("跳转修改场所信息")
            router.push("/fixsite");
        }
        const turnToFixCard = () => {
            ElMessage.success("跳转修改会员卡信息")
            router.push("/fixcard");
        }
        const gymImgUrl = "http://120.53.102.205/gym/headshot/" + mainData.id;
        const url = 'http://120.53.102.205/gym/headshot/1';

        return {
            baseData,
            cardData,
            turnToFixGym,
            turnToFixSite,
            turnToFixCard,
            test,
            mainData,
            gymImgUrl,
            url

        };

    },
};
</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 1130px;
}

.rightulliimg {
    max-width: 100%;
    max-height: 700px;
}
</style>