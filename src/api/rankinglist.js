import service from '../utils/request'
// 请求排行榜数据
export function Ranking(){
    return service({
        url: '/revision/rank/v3/element?typeId=0&clusterId='
    })
}