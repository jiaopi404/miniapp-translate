export interface RequestOptions { // 请求体
    method?: 'POST' | 'GET'
    url: string,
    data: Object
}
export interface ResponseContext { // 响应体
    cookies?: Array<Object>
    data: Object
    errMsg: string
    header: Object
    statusCode: number
}
