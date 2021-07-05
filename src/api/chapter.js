import request from "../utils/request";

export default {
  // 获取基本信息
  reqGetChapterList() {
    return request({
      method: "GET",
      url: `/album/v1/getTracksList?albumId=4756811&pageNum=1`,
    });
  },
};
