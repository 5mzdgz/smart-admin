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
        params: {
            username: query.username,
            password: query.loginResgsiterPassword,
        }
    });
};

export const userData = () => {
    return request({
        url: '/user/info',
        method: 'get'
    });
};

export const houseList = query => {
    return request({
        url: '/area/getHouseList',
        method: 'post',
        data: {
            page: 1,
            pageSize: 10,
            areaId: 14
        }
    });
};
