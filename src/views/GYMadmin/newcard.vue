<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加会员卡</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">

                <el-form-item label="会员卡名称" prop="name">
                    <el-input v-model="param.name" placeholder="name"></el-input>
                </el-form-item>

                <el-form-item label="会员卡有效期" prop="duration">
                    <el-input v-model="param.duration" placeholder="描述"></el-input>
                </el-form-item>

                <el-form-item label="会员卡价格" prop="price">
                    <el-input v-model="param.price" placeholder="价格"></el-input>
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
import { NewCard } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const param = reactive({
            // gym_id: '100001001010',
            name: 'siteOne',
            duration: 100,
            price: 1500,
        });

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
            NewCard(param).then((res) => {
                console.log(res)

                if (res.code == 0) {
                    ElMessage.success("会员卡添加成功");
                    // router.replace("/");
                } else {
                    ElMessage.warning("请检查输入信息");
                }

            })
                .catch((res) => {
                    ElMessage.error("添加失败");
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
  </style>