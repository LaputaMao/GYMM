<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>场地信息修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">

                <el-form-item label="场地名称" prop="name">
                    <el-input v-model="param.name" placeholder="name"></el-input>
                </el-form-item>

                <el-form-item label="场地描述" prop="introduction">
                    <el-input v-model="param.introduction" placeholder="描述"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
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
import { FixSite } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const param = reactive({
            id: 1,
            name: '游泳区',
            introduction: '游泳区简介修改：修改成功！',
        });

        const rules = {

        };
        const resetForm = () => {
            // param.area_number = '',
            //   param.gym_address = '',
            //   param.gym_certificate = '',
            //   param.gym_description = '',
            //   param.gym_id = '',
            //   param.gym_name = '',
            //   param.gym_opentime = ''

        };

        const upform = ref(null);
        const submitForm = () => {
            upform.value.validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    // ElMessage.success("注册成功！");
                    // router.push("/disastershow");
                    _UpForm();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        };

        const _UpForm = () => {
            console.log(param);
            console.log(sessionStorage.getItem('token'));
            FixSite(param).then((res) => {
                console.log(res)

                if (res.code == 0) {
                    ElMessage.success("场所信息修改成功");
                    // router.replace("/");
                } else {
                    ElMessage.warning("请检查输入信息");
                }

            })
                .catch((res) => {
                    ElMessage.error("信息修改失败");
                });
        };

        return {
            param,
            rules,
            upform,
            submitForm,
            resetForm,
        };


    }
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