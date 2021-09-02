// 用户相关请求模块

import request from "@/utils/request";

// 用户登录
export const login = data => {

    return request({
        method: "POST", //接口请求类型

        url: "/mp/v1_0/authorizations", //请求路径

        data //设置请求体
    })

}

// 获取用户资料
export const getUserProfile = () =>{
    return request({
        method: "GET",
        url: "/mp/v1_0/user/profile"
    })
}