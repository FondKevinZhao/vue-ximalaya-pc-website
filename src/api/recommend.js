import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetRecommendList() {
    return request({
      method: "GET",
      url: `/seo/hotWordAlbums?id=4756811&queryType=1`,
    });
  },
};
