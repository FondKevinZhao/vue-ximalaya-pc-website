import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetHotSearchList() {
    return request({
      method: "GET",
      url: `/recommend/album/kw?albumId=4756811`,
    });
  },
};
