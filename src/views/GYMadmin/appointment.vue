<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>创建预约</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">
                <!-- 上传用户名 -->

                <el-form-item label="场地编号" prop="areaId">
                    <el-input v-model="param.areaId" placeholder="id"></el-input>
                </el-form-item>

                <el-form-item label="起始时间" prop="startTime">
                    <el-input v-model="param.startTime" placeholder="start"></el-input>
                </el-form-item>

                <el-form-item label="终止时间" prop="endTime">
                    <el-input v-model="param.endTime" placeholder="end"></el-input>
                </el-form-item>

                <el-form-item label="最大人流量" prop="count">
                    <el-input v-model="param.count" placeholder=""></el-input>
                </el-form-item>

                <!-- <el-form-item label="地址" prop="gym_address">
          <el-input v-model="param.gym_address" placeholder="地址"></el-input>
        </el-form-item>

        <el-form-item label="开放时间" prop="gym_opentime">
          <el-input v-model="param.gym_opentime" placeholder="opentime"></el-input>
        </el-form-item>

        <el-form-item label="场地1" prop="area_1">
          <el-input v-model="param.area_data.name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_1_">
          <el-input v-model="param.area_data.description" placeholder="简介： "></el-input>
        </el-form-item>

        <el-form-item label="场地2" prop="area_2">
          <el-input v-model="param.area_data.name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_2_">
          <el-input v-model="param.area_data.description" placeholder="简介： "></el-input>
        </el-form-item>

        <el-form-item label="场地3" prop="area_3">
          <el-input v-model="param.area_data.name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_3_">
          <el-input v-model="param.area_data.description" placeholder="简介： "></el-input>
        </el-form-item> -->


                <el-form-item>
                    <el-button type="primary" @click="Create_order()">提交</el-button>
                    <!-- <el-button type="primary" @click="getdata">提交</el-button> -->
                    <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>


<script>
import { ref, reactive } from "vue";
import { onMounted } from "vue";
import { CreateOrder } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const param = reactive({
            areaId: "1",
            startTime: "2022-08-30T01:23:53.879Z",
            endTime: "2022-08-30T07:23:53.879Z",
            count: "100"
        });

        const rules = {
            // username: [
            //     { required: true, message: '请输入', trigger: 'blur' },
            // ],
            // code: [
            //     { required: true, message: '请输入', trigger: 'blur' },
            //     { min: 36, max: 36, message: '长度为36位', trigger: 'blur' }
            // ],
            // description: [
            //     { required: true, message: '请填输入', trigger: 'blur' }
            // ]
        };
        const upform = ref(null);
        const Create_order = () => {
            upform.value.validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    _CreateOrder();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        };

        const resetForm = () => {
            param.areaId = "",
                param.startTime = "",
                param.endTime = "",
                param.count = ""
        };
        const _CreateOrder = () => {
            console.log(param);
            CreateOrder(param).then((res) => {
                console.log(res)

                if (res.code == 0) {
                    ElMessage.success("预约时段创建成功");

                } else {
                    ElMessage.warning("请检查输入信息");
                }

            })
                .catch((res) => {
                    ElMessage.error("创建失败");
                });
        };

        return {
            param,
            rules,
            upform,
            Create_order,
            resetForm,
        };


    }

    // data() {
    //   return {
    //     ruleForm: {
    //       username: '',
    //       code: '',
    //       desc: ''
    //     },
    //     rules: {
    //       username: [
    //         { required: true, message: '请输入用户名', trigger: 'blur' },

    //       ],
    //       code: [
    //         { required: true, message: '请输入灾害码', trigger: 'blur' },
    //         { min: 36, max: 36, message: '长度为36位', trigger: 'blur' }
    //       ],
    //       desc: [
    //         { required: true, message: '请填输入灾情描述', trigger: 'blur' }
    //       ]
    //     }
    //   };
    // },
    // methods: {
    //   getdata(){
    //      console.log(this.ruleForm)
    //   },
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //         console.log('success submit!!');
    //         console.log(this.resetForm.username);
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    // }
}
</script>

<style>
/* 走马灯style */
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>