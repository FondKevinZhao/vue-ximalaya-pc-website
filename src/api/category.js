import request from "../utils/request";

export default {
  reqCategory() {
    return request({
      method: "GET",
      url: "/revision/category/allCategoryInfo",
    });
  },
};
