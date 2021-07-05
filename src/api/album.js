import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetAlbumList() {
    return request({
      method: "GET",
      url: `/user/pub?uid=1266964&page=1&pageSize=4`,
    });
  },
};
