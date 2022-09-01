import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            /* 灾情信息管理项目目录
            平台管理员：
            --申请审理页面-application
            --广告审理页面-advertising
            --平台通知发布页面-inform
            --平台数据分析-analysis
            */

            // 健身房管理员
            // ：
            {
                path: "/appointment",
                name: "appointment",
                meta: {
                    title: '创建预约'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/appointment.vue")
            },
            {
                path: "/signgym",
                name: "signgym",
                meta: {
                    title: '注册健身房'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/signgym.vue")
            },
            {
                path: "/description",
                name: "discription",
                meta: {
                    title: '健身房信息'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/discription.vue")
            },
            {
                path: "/information",
                name: "information",
                meta: {
                    title: '健身房通知'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/information.vue")
            },
            {
                path: "/fixgym",
                name: "fixgym",
                meta: {
                    title: '健身房信息修改'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/fixgym.vue")
            },
            {
                path: "/fixsite",
                name: "fixsite",
                meta: {
                    title: '场所信息修改'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/fixsite.vue")
            },
            {
                path: "/newsite",
                name: "newsite",
                meta: {
                    title: '新建场所'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/newsite.vue")
            },
            {
                path: "/newcard",
                name: "newcard",
                meta: {
                    title: '新建会员卡'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/newcard.vue")
            },
            {
                path: "/fixcard",
                name: "fixcard",
                meta: {
                    title: '修改会员卡'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/fixcard.vue")
            },
            {
                path: "/gyminfo",
                name: "gyminfo",
                meta: {
                    title: '健身房信息展示'
                },
                component: () => import( /* webpackChunkName: "disaster-show" */ "../views/GYMadmin/gyminfo.vue")
            },


            /*================================================================================= 以下为模板默认目录*/

            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '仪表盘'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            },
            {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '灾情上传'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import( /* webpackChunkName: "charts" */ "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import( /* webpackChunkName: "form" */ "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import( /* webpackChunkName: "tabs" */ "../views/Tabs.vue")
            }, {
                path: "/donate",
                name: "donate",
                meta: {
                    title: '鼓励作者'
                },
                component: () => import( /* webpackChunkName: "donate" */ "../views/Donate.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import( /* webpackChunkName: "upload" */ "../views/Upload.vue")
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
            },
        ]
    },
    {
        path: "/hometo",
        name: "hometo",
        meta: {
            title: '主页2'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/HomeTo.vue"),
        children: [
            {
                path: "/application",
                name: "application",
                meta: {
                    title: '申请审理页面'
                },
                component: () => import(/* */"../views/Platadmin/application.vue")
            },
            {
                path: "/advertising",
                name: "advertising",
                meta: {
                    title: '广告审理页面'
                },
                component: () => import(/* */"../views/Platadmin/advertising.vue")
            },
            {
                path: "/inform",
                name: "inform",
                meta: {
                    title: '通知发布页面'
                },
                component: () => import(/* */"../views/Platadmin/inform.vue")
            },
            {
                path: "/analysis",
                name: "analysis",
                meta: {
                    title: '平台数据分析页面'
                },
                component: () => import(/* */"../views/Platadmin/analysis.vue")
            },
        ]

    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue')
    },
    {
        path: '/latitudetest',
        name: 'latitudetest',
        meta: {
            title: '没有权限'
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/latitudetest.vue')
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
    }, {
        path: "/signup",
        name: "signUp",
        meta: {
            title: '注册'
        },
        component: () => import( /* webpackChunkName: "disaster-show" */ "../views/sign.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


router.beforeEach((to, from, next) => {

    document.title = `${to.meta.title} | Disaster Alarm Platform `;
    // const role = localStorage.getItem('ms_username');

    const role = "admin";
    // const role = "user";
    //测试用户权限


    // console.log(role);
    // console.log(to.path);
    if (role == "admin") {
        if (to.path == '/appointment' || to.path == '/information' || to.path == '/signgym') {
            next('/403');
        } else {
            next();
        }
    } else {
        if (to.path == '/advertising' || to.path == '/analysis' || to.path == '/application' || to.path == '/inform') {
            next('/403');
        } else {
            next();
        }
    }
});

export default router;