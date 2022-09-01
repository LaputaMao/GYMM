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
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="已启用">
          <el-table :data="AdDataEnable" style="width: 60%">
            <el-table-column prop="name" label="广告名称" width="150" />
            <el-table-column label="广告图片" width="140">
              <template #default="scope">
                <el-button
                  link
                  type="success"
                  size="small"
                  @click="jumpIMG(scope.row.id)"
                  >查看</el-button
                ></template
              >
            </el-table-column>
            <el-table-column prop="link" label="点击链接" width="160">
              <template #default="scope">
                <el-button
                  link
                  type="success"
                  size="small"
                  @click="jumpLink(scope.row.link)"
                  >查看</el-button
                ></template
              >
            </el-table-column>

            <el-table-column prop="maxCost" label="价格" width="100" />
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="changeAdStatus(scope.row.id, 1)"
                  >停用</el-button
                >
                <!-- <el-button
                  link
                  type="primary"
                  size="small"
                  @click="changeAdStatus(scope.row.id, 0)"
                  >启用</el-button
                > -->
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已停用">
          <el-table :data="AdDataUnable" style="width: 60%">
            <el-table-column prop="name" label="广告名称" width="150" />
            <el-table-column label="广告图片" width="140">
              <template #default="scope">
                <el-button
                  link
                  type="success"
                  size="small"
                  @click="jumpIMG(scope.row.id)"
                  >查看</el-button
                ></template
              >
            </el-table-column>
            <el-table-column prop="link" label="点击链接" width="160">
              <template #default="scope">
                <el-button
                  link
                  type="success"
                  size="small"
                  @click="jumpLink(scope.row.link)"
                  >查看</el-button
                ></template
              >
            </el-table-column>

            <el-table-column prop="maxCost" label="价格" width="100" />
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <!-- <el-button
                  link
                  type="primary"
                  size="small"
                  @click="changeAdStatus(scope.row.id, 1)"
                  >停用</el-button
                > -->
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="changeAdStatus(scope.row.id, 0)"
                  >启用</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <!--do something-->
      <!-- <el-space wrap :size="30"> -->
      <!-- <el-row :gutter="20" class="el-row">
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
                </el-row> -->
      <!-- </el-space> -->
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { AdminAdData, AdminAdChange } from "../../api/index";
export default {
  name: "donate",

  setup() {
    const tableData = [
      {
        id: 0,
        name: "GYM_NAME1",
        address: "GYM_ADDRESS",
        date: "GYM_DATE",
        description: "GYM_DESCRIPTION",
        tel: "GYM_TEL",
      },
      {
        id: 0,
        name: "GYM_NAME2",
        address: "GYM_ADDRESS",
        date: "GYM_DATE",
        description: "GYM_DESCRIPTION",
        tel: "GYM_TEL",
      },
      {
        id: 0,
        name: "GYM_NAME3",
        address: "GYM_ADDRESS",
        date: "GYM_DATE",
        description: "GYM_DESCRIPTION",
        tel: "GYM_TEL",
      },
      {
        id: 0,
        name: "GYM_NAME4",
        address: "GYM_ADDRESS",
        date: "GYM_DATE",
        description: "GYM_DESCRIPTION",
        tel: "GYM_TEL",
      },
    ];
    onMounted(() => {
      initAdData();
    });

    const AdDataEnable = reactive([]);
    const AdDataUnable = reactive([]);

    const initAdData = () => {
      AdminAdData({ page: 0, size: 10, status: 0 }).then((res) => {
        //console.log(res)
        let arr = res.data;
        AdDataEnable.push(...arr);
        console.log(AdDataEnable);
      });

      AdminAdData({ page: 0, size: 10, status: 1 }).then((res) => {
        //console.log(res)
        let arr = res.data;
        AdDataUnable.push(...arr);
        console.log(AdDataUnable);
      });
    };

    const jumpIMG = (ID) => {
      window.open("http://120.53.102.205/advertiser/ad/" + ID, "_blank");
    };
    const jumpLink = (Link) => {
      window.open(Link, "_blank");
    };

    const changeAdStatus = (AdID, status) => {
      AdminAdChange({ id: AdID, status: status }).then((res) => {
        console.log(res);
        location.reload()
      });
    };

    return {
      AdDataEnable,
      AdDataUnable,
      jumpIMG,
      jumpLink,
      changeAdStatus,
    };
  },
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
  flex-wrap: wrap;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}
</style>