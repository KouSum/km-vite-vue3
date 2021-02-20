import {extend, ResponseError} from 'umi-request';


const errorHandler = function(error: ResponseError) {
    const codeMap: any = {
        '021': '发生错误啦',
        '022': '发生大大大大错误啦',
        // ....
    };
    if (error.response) {
        // 请求已发送但服务端返回状态码非 2xx 的响应
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.data);
        console.log(error.request);
        console.log(codeMap[error.data.status]);
    } else {
        // 请求初始化时出错或者没有响应返回的异常
        console.log(error.message);
    }

    throw error; // 如果throw. 错误将继续抛出.

    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
};


export const Request1 = extend({
    prefix: '',
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    // 1. 作为统一错误处理
    errorHandler
});

export const Request2 = extend({
    prefix: 'https://www.***.com/',
    timeout: 50000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    // 1. 作为统一错误处理
    errorHandler
});










