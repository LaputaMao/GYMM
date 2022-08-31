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

        <!-- <el-form-item label="健身房编号" prop="gym_id">
          <el-input v-model="param.gym_id" placeholder="id"></el-input>
        </el-form-item> -->

        <el-form-item label="健身房名称" prop="name">
          <el-input v-model="param.name" placeholder="name"></el-input>
        </el-form-item>

        <el-form-item label="健身房描述" prop="introduction">
          <el-input v-model="param.introduction" placeholder="描述"></el-input>
        </el-form-item>

        <el-form-item label="地址编号" prop="adcode">
          <el-input v-model="param.adcode" placeholder="地址编号"></el-input>
        </el-form-item>

        <el-form-item label="地址" prop="detailLocation">
          <el-input v-model="param.detailLocation" placeholder="地址"></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="mainPhone">
          <el-input v-model="param.mainPhone" placeholder="opentime"></el-input>
        </el-form-item>

        <el-form-item label="备用电话" prop="sparePhone">
          <el-input v-model="param.sparePhone" placeholder="opentime"></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <!-- <el-button type="primary" @click="getdata">提交</el-button> -->
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>

        <!-- 图片上传 -->

        <el-upload class="upload-demo" ref="upload" action="api/gym/headshot" :headers="tokenObj"
          :on-preview="handlePreview" :on-remove="handleRemove" :data="objData" :auto-upload="false"
          :on-success="onSuccess" style="margin-left: 10%">
          <el-button style="margin-top: 60px" size="small" type="primary">选取</el-button>
          <el-button style="margin-top: 60px; margin-left: 30px" size="small" type="success" @click.stop="submitUpload">
            上传</el-button>
          <div class="el-upload__tip">不限文件格式。不超过1MB</div>
        </el-upload>

        <!-- <el-form-item>
          <el-button type="primary" @click="submitShot()">上传</el-button>
        </el-form-item> -->
      </el-form>


    </div>
  </div>
</template>


<script>
import { ref, reactive, getCurrentInstance } from "vue";
import { onMounted } from "vue";
import { Headshot } from "../../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
// import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue';

export default {
  setup() {
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    // const token_ = sessionStorage.getItem('token');
    const tokenObj = {
      'Auth': sessionStorage.getItem('token'),
      // "Content-Type": "multipart/form-data",
    };
    const param = reactive({
      // gym_id: '100001001010',
      name: 'sparkGYM',
      introduction: 'this gym',
      adcode: 110101,
      detailLocation: '北京海淀区',
      mainPhone: '123456',
      sparePhone: '1234567'
      // area_data: [
      //   { name: "力量区", description: "this" },
      //   { name: "有氧区", description: "this" },
      //   { name: "游泳区", description: "this" }
      // ]
    });
    const objData = reactive({
      // username: localStorage.getItem("ms_username"),
      gymName: param.name,
    });


    const submitUpload = () => {
      console.log(123);
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

    };

    const upform = ref(null);


    const submitShot = () => {
      return true;
    };

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
      UpForm(param).then((res) => {
        console.log(res)

        if (res.code == 0) {
          ElMessage.success("健身房注册成功");
          // router.replace("/");
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
      submitShot,
      submitUpload,
      handlePreview,
      handleRemove,
      objData,
      tokenObj,
      onSuccess,
    };


  }
}
</script>

<style>
</style>