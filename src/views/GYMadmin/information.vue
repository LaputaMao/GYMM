<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 首页
                </el-breadcrumb-item>
                <el-breadcrumb-item>健身房通知</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- 通知列表-->
            <div>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="message" align="center" label="健身房通知" width="1180" />

                </el-table>
            </div>
            <br/><br/><br/>
            <!-- 发布通知-->
            <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">

                <el-form-item label="健身房通知" prop="gym_id">
                    <el-input v-model="param.gym_id" placeholder="id"></el-input>
                </el-form-item>

                <el-form-item label="通知范围" prop="gym_name">
                    <el-input v-model="param.gym_name" placeholder="name"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <!-- <el-button type="primary" @click="getdata">提交</el-button> -->
                    <!-- <el-button @click="resetForm()">重置</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "donate",
    setup() {
        const tableData = [{ message: '今天中午闭馆' },
        { message: '今天中午闭馆' },
        { message: '今天中午闭馆' },
        { message: '今天中午闭馆' },
        { message: '今天中午闭馆' },
        { message: '今天中午闭馆' },
        { message: '今天中午闭馆' },]

        const param = reactive({
            gym_id: '100001001010',
            gym_name: 'sparkGYM',

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

        const submitForm = () => {
            ElMessage.success("通知发布成功！");
            //   upform.value.validate((valid) => {
            //     if (valid) {
            //       // alert('submit!');
            //       ElMessage.success("注册成功！");
            //       router.push("/disasterup");

            //       // _UpForm();
            //     } else {
            //       console.log('error submit!!');
            //       return false;
            //     }
            //   });

        };
        return {
            tableData,
            submitForm,
            param,
            rules
        }

    }
};
</script>

<style>
</style>