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
                    <el-table-column prop="title" align="center" label="通知主题" width="180" />
                    <el-table-column prop="message" align="center" label="通知内容" width="1000" />


                </el-table>
            </div>
            <br /><br /><br />
            <!-- 发布通知-->
            <el-form :model="param" status-icon :rules="rules" ref="upform" label-width="100px" class="demo-ruleForm">

                <el-form-item label="通知主题" prop="title">
                    <el-input v-model="param.title" placeholder="title"></el-input>
                </el-form-item>

                <el-form-item label="通知内容" prop="message">
                    <el-input v-model="param.message" placeholder="message"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { GetNoticeList, PubNotice } from "../../api/index";
import { ElMessage } from "element-plus";

export default {
    name: "donate",
    setup() {
        onMounted(() => {
            _GetNoticeList();
        })
        // const tableData = [{ message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },
        // { message: '今天中午闭馆' },]
        const tableData = ref([]);

        const param = reactive({
            title: '100001001010',
            message: 'sparkGYM',

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

        const _GetNoticeList = () => {
            console.log("获取通知列表");
            GetNoticeList().then((res) => {
                console.log(res.data);
                tableData.value = res.data;
                console.log(tableData.value);
            })
        }

        const submitForm = () => {
            // ElMessage.success("通知发布成功！");
            PubNotice(param).then((res) => {
                console.log(res)
                // console.log(param.id)
                if (res.code == 0) {
                    ElMessage.success("成功");
                    // router.replace("/");
                } else {
                    ElMessage.warning("请检查输入信息");
                }
            })

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