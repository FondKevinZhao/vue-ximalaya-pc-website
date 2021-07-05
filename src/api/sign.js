import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetSign() {
    return request({
      method: "GET",
      url: `/category/queryProductCategory?ptype=1&id=4756811`,
    });
  },
};
