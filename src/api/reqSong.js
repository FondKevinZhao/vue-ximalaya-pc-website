import request from "../utils/request";

export default {
  reqSongUrl() {
    return request({
      method: "GET",
      url: `/revision/play/v1/audio?id=${372718175}&ptype=${1}`,
    });
  },

  reqTestUrl() {
    return request({
      method: "GET",
      url: "https://aod.cos.tx.xmcdn.com/group63/M06/E9/28/wKgMcl0XePbyTviGAI-DAfIkYdw381.m4a",
    });
  },
};
//  /revision/play/v1/audio?id=372718175&ptype=1
