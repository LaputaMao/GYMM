import request from '../utils/request';

// export const fetchData = query => {
//     return request({
//         url: './table.json',
//         method: 'get',
//         params: query
//     });
// };
//登录
export const Login = params => {
    return request({
        url: '/api/user/login',
        method: 'post',
        data: params
    });
};

//注册
export const SignUp = params => {
    return request({
        url: '/api/gym/register',
        method: 'post',
        data: params,
    });
};

//获取验证码
export const Verified = query => {
    return request({
        url: '/api/user/code',
        method: 'get',
        params: query,
    });
};

//创建预约
export const CreateOrder = query => {
    return request({
        url: '/api/gym/appointment',
        method: 'post',
        data: query,
        headers: { 'Auth': sessionStorage.getItem('token') }
    });
};

//注册健身房
export const UpForm = query => {
    return request({
        url: '/api/gym/info',
        method: 'post',
        data: query,
        headers: { 'Auth': sessionStorage.getItem('token') }
    });
};

//健身房图片上传
export const Headshot = query => {
    return request({
        url: '/api/gym/headshot',
        method: 'post',
        data: query,
        headers: {
            "Content-Type": "multipart/form-data",
            'Auth': sessionStorage.getItem('token')
        },
    });
};

//修改健身房信息
export const FixGymInfo = query => {
    return request({
        url: '/api/gym/info',
        method: 'put',
        data: query,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};

//新建场所
export const NewSite = params => {
    return request({
        url: '/api/gym/area',
        method: 'post',
        data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }

    })
};

//修改场所信息
export const FixSite = params => {
    return request({
        url: '/api/gym/area',
        method: 'put',
        data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};

//添加会员卡
export const NewCard = params => {
    return request({
        url: '/api/gym/card',
        method: 'post',
        data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }

    })
};

//修改会员卡
export const FixCard = params => {
    return request({
        url: '/api/gym/card',
        method: 'put',
        data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};

//获取健身房信息
export const GetGymInfo = params => {
    return request({
        url: '/api/gym',
        method: 'get',
        params: params,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};

//获取健身房图片
export const GetGymHeadshot = params => {
    return request({
        url: '/api/gym/headshot/' + params,
        method: 'get',
        // params: params,
        responseType: 'blob',
    })
};

//获取通知列表
export const GetNoticeList = params => {
    return request({
        url: '/api/gym/notification',
        method: 'get',
        // data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};


//发布通知
export const PubNotice = params => {
    return request({
        url: '/api/gym/notification',
        method: 'post',
        data: params,
        headers: { 'Auth': sessionStorage.getItem('token') }
    })
};


//平台管理员健身房列表获取
export const AdminGym = params =>{
    return request({
        url:'/api/admin/gym',
        method:'get',
        params:params
    })
}
//平台管理员健身房状态修改
export const AdminGymChange = params =>{
    return request({
        url:'/api/admin/gym',
        method:'post',
        params:params
    })
}

//平台管理员平台数据分析
export const AdminData = params =>{
    return request({
        url:'/api/admin/data',
        method:'get',
        params:params
    })
}

//平台管理员广告列表
export const AdminAdData = params =>{
    return request({
        url:'/api/admin/ad',
        method:'get',
        params:params
    })
}

//平台管理员广告状态修改
export const AdminAdChange = params =>{
    return request({
        url:'/api/admin/ad',
        method:'post',
        params:params
    })
}










// //模糊搜索
// export const SearchForm = query => {
//     return request({
//         url: '/api/disaster/search',
//         method: 'get',
//         params: query
//     });
// };
// //查询所有灾情信息
// export const ShowForm = query=> {
//     return request({
//         url: '/api/disaster/allinfo',
//         method: 'get',
//         params: query
//     });
// };