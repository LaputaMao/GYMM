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
//注册健身房
export const UpForm = params => {
    return request({
        url: '/api/gym/info',
        method: 'post',
        params: params
    });
};
//注册
export const SignUp = params => {
    return request({
        url: '/api/gym/register',
        method: 'post',
        params: params
    });
};
//创建预约
export const CreateOrder = params => {
    return request({
        url: '/api/gym/create',
        method: 'post',
        params: params
    });
};
//修改健身房信息
export const FixGymInfo = params => {
    return request({
        url: '/api/gym/info',
        method: 'post',
        params: params
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