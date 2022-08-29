<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>注册健身房</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">
        <!-- 上传用户名 -->

        <el-form-item label="健身房编号" prop="gym_id">
          <el-input v-model="param.gym_id" placeholder="id"></el-input>
        </el-form-item>

        <el-form-item label="健身房名称" prop="gym_name">
          <el-input v-model="param.gym_name" placeholder="name"></el-input>
        </el-form-item>

        <el-form-item label="健身房描述" prop="gym_description">
          <el-input v-model="param.gym_description" placeholder="描述"></el-input>
        </el-form-item>

        <el-form-item label="健身房证件号" prop="gym_certificate">
          <el-input v-model="param.gym_certificate" placeholder="证件号"></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="gym_address">
          <el-input v-model="param.gym_address" placeholder="地址"></el-input>
        </el-form-item>

        <el-form-item label="开放时间" prop="gym_opentime">
          <el-input v-model="param.gym_opentime" placeholder="opentime"></el-input>
        </el-form-item>

        <el-form-item label="场地1" prop="area_1">
          <el-input v-model="param.area_data[0].name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_1_">
          <el-input v-model="param.area_data[0].description" placeholder="简介： "></el-input>
        </el-form-item>

        <el-form-item label="场地2" prop="area_2">
          <el-input v-model="param.area_data[1].name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_2_">
          <el-input v-model="param.area_data[1].description" placeholder="简介： "></el-input>
        </el-form-item>

        <el-form-item label="场地3" prop="area_3">
          <el-input v-model="param.area_data[2].name" placeholder="名称： "></el-input>
        </el-form-item>
        <el-form-item label=" " prop="area_3_">
          <el-input v-model="param.area_data[2].description" placeholder="简介： "></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <!-- <el-button type="primary" @click="getdata">提交</el-button> -->
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
    <!-- <div>
      <el-button type="text">一体化编码规范</el-button>
      <el-card class="box-card">
        <img src="../../assets/img/code.png" class="image">
      </el-card>
    </div> -->
  </div>
</template>


<script>
import { ref, reactive } from "vue";
import { onMounted } from "vue";
import { UpForm } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const param = reactive({
      gym_id: '100001001010',
      gym_name: 'sparkGYM',
      gym_description: 'this gym',
      gym_certificate: '0110100010101',
      gym_address: '北京海淀区',
      gym_opentime: '9：00-21：00',
      area_number: '3',
      area_data: [
        { name: "力量区", description: "this" },
        { name: "有氧区", description: "this" },
        { name: "游泳区", description: "this" }
      ]
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
      param.area_number = '',
        param.gym_address = '',
        param.gym_certificate = '',
        param.gym_description = '',
        param.gym_id = '',
        param.gym_name = '',
        param.gym_opentime = ''

    };

    const upform = ref(null);
    const submitForm = () => {
      upform.value.validate((valid) => {
        if (valid) {
          // alert('submit!');
          ElMessage.success("注册成功！");
          router.push("/disastershow");

          // _UpForm();
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    };


    const _UpForm = () => {
      console.log(param);
      UpForm(param).then((res) => {
        console.log(res)

        if (res.code == 200) {
          ElMessage.success("健身房注册成功");
          router.replace("/disastershow");
        } else {
          ElMessage.warning("请检查输入信息");
        }

      })
        .catch((res) => {
          ElMessage.error("新增失败");
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