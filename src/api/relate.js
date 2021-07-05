import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetRelateList() {
    return request({
      method: "GET",
      url: `/my/getRecommendAlbum`,
    });
  },
};
