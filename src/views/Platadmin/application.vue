<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <!--do something-->
      <!-- <el-space wrap :size="30"> -->
      <!-- <el-row :gutter="20" class="el-row">
                    <el-col v-for="(o, index) in 9" :key="o" :span="6" :offset="index > 0 ? 2 : 2">
                        <el-card :shadow="hover" :body-style="{ padding: '0px' }">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image" />
                            <div style="padding: 14px">
                                <span>某某某健身房</span>
                                <div class="bottom">
                                    <p style="font-size: 12px;
                                         color: #999;">这是一条健身房的简介</p>
                                    <el-button type="success" plain>批准</el-button>
                                    <el-button type="danger" plain>驳回</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
      <!-- </el-space> -->
      <el-tabs class="demo-tabs">
        <el-tab-pane label="全部">
          <el-table :data="tableDataofAll" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="changeGymStatus(scope.row.id,4)"
                  >封禁</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="待通过">
          <!-- <el-button type="success" plain>一键批准</el-button> -->
          <el-table :data="tableDataofPass" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />

            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="changeGymStatus(scope.row.id,16)"
                  >驳回</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
                <el-button link type="primary" size="small" @click="changeGymStatus(scope.row.id,2)"
                  >通过</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- <el-tab-pane label="已激活">
          <el-table :data="tableData" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />

            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="handleClick"
                  >封禁</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane> -->
        <el-tab-pane label="已驳回">
          <el-table :data="tableDataofRejected" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />

            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="changeGymStatus(scope.row.id,1)"
                  >再次审批</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已封禁">
          <el-table :data="tableDataofBan" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />

            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="changeGymStatus(scope.row.id,2)"
                  >解封</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已删除">
          <el-table :data="tableDataofDelete" style="width: 90%">
            <el-table-column prop="id" label="ID" width="100" />
            <el-table-column prop="name" label="健身房名称" width="140" />
            <el-table-column
              prop="introduction"
              label="健身房简介"
              width="260"
            />
            <el-table-column
              prop="businessLicence"
              label="资质认证"
              width="260"
            />

            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <!-- <el-button link type="primary" size="small" @click="handleClick">封禁</el-button> -->
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="show(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-dialog v-model="visible" :show-close="false">
        <!-- <gym-tips/> -->
        <!-- <v-gym/> -->
        <div>
          <el-descriptions title="健身房基本信息" column="1" :border="true">
            <el-descriptions-item label="名称：">{{
              OneGym.name
            }}</el-descriptions-item>
            <el-descriptions-item label="联系电话：">{{
              OneGym.mainPhone
            }}</el-descriptions-item>
            <el-descriptions-item label="资质：">{{
              OneGym.businessLicence
            }}</el-descriptions-item>
            <el-descriptions-item label="详细地址：">{{
              OneGym.detailLocation
            }}</el-descriptions-item>
            <el-descriptions-item label="描述：">{{
              OneGym.introduction
            }}</el-descriptions-item>
            <el-descriptions-item label="场所:">
              <el-row v-for="area in OneGym.gymAreas" :key="area"
                >{{ area.name }}——{{ area.introduction }}</el-row
              >
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import VGym from "../../components/GYMTips.vue";
import { ref, reactive, onMounted } from "vue";
import { AdminGym,AdminGymChange } from "../../api/index";
export default {
  // components: {
  //   VGym,
  // },
  name: "donate",
  setup() {
    onMounted(() => {
      initGymData();
    });

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
    //1待通过 2正常 4ban 8删除 16驳回

    const tableDataofAll = reactive([]);

    const tableDataofPass = reactive([]);

    const tableDataofDelete = reactive([]);

    const tableDataofBan = reactive([]);

    const tableDataofRejected = reactive([]);

    const visible = ref(false);

    const show = (ChangeValue) => {
      Object.assign(OneGym, ChangeValue);
      visible.value = true;
    };

    const changeGymStatus = (GymID, cStatus) => {
      console.log(GymID +"  "+ cStatus);
      AdminGymChange({ status: cStatus, id: GymID }).then((res) => {
        console.log(res);
      });
    };

    //变量
    // const gym_name = ref("健身房名称");
    // const gym_address = ref("健身房地址");
    // const gym_tel = ref("健身房联系电话");
    // const gym_description = ref("健身房描述");

    let OneGym = reactive({
      id: 0,
      name: "GYM_NAME",
      address: "GYM_ADDRESS",
      date: "GYM_DATE",
      description: "GYM_DESCRIPTION",
      tel: "GYM_TEL",
    });

    const initGymData = () => {
      AdminGym({ status: 2, page: 0, size: 10 }).then((res) => {
       // console.log(res.data);
        let arr = res.data;
        tableDataofAll.push(...arr);
        console.log(tableDataofAll);
      });

      AdminGym({ status: 1, page: 0, size: 10 }).then((res) => {
        //console.log(res.data);
        let arr = res.data;
        tableDataofPass.push(...arr);
        console.log(tableDataofPass);
      });

      AdminGym({ status: 4, page: 0, size: 10 }).then((res) => {
        //console.log(res.data);
        let arr = res.data;
        tableDataofBan.push(...arr);
        console.log(tableDataofBan);
      });

      AdminGym({ status: 8, page: 0, size: 10 }).then((res) => {
        //console.log(res.data);
        let arr = res.data;
        tableDataofDelete.push(...arr);
        console.log(tableDataofDelete);
      });

      AdminGym({ status: 16, page: 0, size: 10 }).then((res) => {
        //console.log(res.data);
        let arr = res.data;
        tableDataofRejected.push(...arr);
        console.log(tableDataofRejected);
      });
    };

    //驳回
    const Reject = () => {};
    //通过
    const Pass = () => {};
    //封禁
    const Ban = () => {};
    //审批
    const Examination = () => {};

    return {
      tableData,
      visible,
      tableDataofAll,
      tableDataofPass,
      tableDataofRejected,
      tableDataofBan,
      tableDataofDelete,
      OneGym,
      //   Reject,
      //   Pass,
      //   Ban,
      //   Examination,
      changeGymStatus,
      show,
      initGymData,
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