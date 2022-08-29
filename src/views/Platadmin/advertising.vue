<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>广告</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!--do something-->
            <!-- <el-space wrap :size="30"> -->
                <el-row :gutter="20" class="el-row">
                    <el-col v-for="(o, index) in 9" :key="o" :span="6" :offset="index > 0 ? 2 : 2">
                        <el-card :shadow="hover" :body-style="{ padding: '0px' }">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image" />
                            <div style="padding: 14px">
                                <span>广告来源</span>
                                <div class="bottom">
                                    <p style="font-size: 12px;
                                         color: #999;">广告广告广告广告广告广告广告</p>
                                    <el-button type="success" plain>批准</el-button>
                                    <el-button type="danger" plain>驳回</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            <!-- </el-space> -->

        </div>
    </div>
</template>

<script>

export default {
    name: "donate"
};
</script>

<style>
.pstyle {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}

.el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap
  }


.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>