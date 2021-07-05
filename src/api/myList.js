import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetMyList() {
    return request({
      method: "GET",
      url: `/album/v1/sub/comprehensive?num=1&size=30&subType=2&category`,
    });
  },
};
