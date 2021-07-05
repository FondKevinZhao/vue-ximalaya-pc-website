import service from '../utils/request'
// 请求小说数据
export function novel(){
    return service({
        url: '/revision/metadata/v2/group/channels/recommend/albums?groupId=7&pageNum=1&pageSize=5'
    })
}
// 请求侧边栏
export function EncyClopedia(){
    return service({
        url: '/revision/metadata/v2/group/all'
    }) 
}