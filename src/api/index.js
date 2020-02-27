import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const resigeterData = query => {
    return request({
        url: '/user/register',
        method: 'post',
        data: {
            username: query.username,
            password: query.loginResgsiterPassword,
            userType: query.userType
        }
    });
};

export const loginData = query => {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username: query.username,
            password: query.loginResgsiterPassword,
        }
    });
};
