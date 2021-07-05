import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetBaseInfo() {
    return request({
      method: "GET",
      url: `/album/v1/simple?albumId=4756811`,
    });
  },
};
