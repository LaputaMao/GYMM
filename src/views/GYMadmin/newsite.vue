<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>新建场地</el-breadcrumb-item>
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

                <el-upload class="upload-demo" ref="upload" :action="siteUrl" :headers="tokenObj"
                    :on-preview="handlePreview" :on-remove="handleRemove" :data="objData" :auto-upload="false"
                    :on-success="onSuccess" style="margin-left: 10%">
                    <el-button style="margin-top: 60px" size="small" type="primary">选取</el-button>
                    <el-button style="margin-top: 60px; margin-left: 30px" size="small" type="success"
                        @click.stop="submitUpload">
                        上传</el-button>
                    <div class="el-upload__tip">不限图片格式。不超过20MB</div>
                </el-upload>
            </el-form>

        </div>
    </div>
</template>
  
  
  <script>
import { ref, reactive, getCurrentInstance } from "vue";
import { onMounted } from "vue";
import { NewSite } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const { proxy } = getCurrentInstance();
        // const token_ = sessionStorage.getItem('token');
        const tokenObj = {
            'Auth': sessionStorage.getItem('token'),
        };
        const param = reactive({
            id: 1,
            name: '瑜伽',
            introduction: 'this siteOne',
        });
        const objData = reactive({
            // username: localStorage.getItem("ms_username"),
            gymName: param.name,
        });
        const siteUrl = "api/gym/area/picture/" + param.id;

        const rules = {
            username: [
                { required: true, message: '请输入', trigger: 'blur' },
            ],
            code: [
                { required: true, message: '请输入', trigger: 'blur' },
                { min: 36, max: 36, message: '长度为36位', trigger: 'blur' }
            ],
            description: [
                { required: true, message: '请填输入', trigger: 'blur' }
            ]
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

        const submitUpload = () => {
            console.log("areapictureUpload");
            objData.gymName = param.name.value;
            proxy.$refs.upload.submit();
            // console.log("success!");
        };
        const handlePreview = (a) => {
            console.log(a);
        };
        const handleRemove = () => { };
        const onSuccess = () => {
            ElMessage.success("上传成功");
        };

        const _UpForm = () => {
            console.log(param);
            console.log(sessionStorage.getItem('token'));
            NewSite(param).then((res) => {
                console.log(res)

                if (res.code == 0) {
                    ElMessage.success("场所新建成功");
                    // router.replace("/");
                } else {
                    ElMessage.warning("请检查输入信息");
                }

            })
                .catch((res) => {
                    ElMessage.error("新建失败");
                });
        };

        return {
            param,
            rules,
            upform,
            submitForm,
            resetForm,
            submitUpload,
            onSuccess,
            tokenObj,
            objData,
            handlePreview,
            handleRemove,
            siteUrl,
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