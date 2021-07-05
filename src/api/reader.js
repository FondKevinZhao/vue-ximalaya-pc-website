import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetReaderInfo() {
    return request({
      method: "GET",
      url: `/user/basic?uid=1266964`,
    });
  },
};
