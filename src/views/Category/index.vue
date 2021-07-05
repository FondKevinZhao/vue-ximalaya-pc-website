<template>
  <div class="categoryContainer">
    <div class="mainContent">
      <div class="category">
        <div class="breadcrumb">
          <router-link to="/">首页</router-link>
          > 全部分类
        </div>
        <div class="plates" v-if="categoryInfo.data">
          <div
            class="category_plate"
            v-for="item in categoryInfo.data"
            :key="item.id"
          >
            <h2 class="title" :id="`anchor_` + item.name">
              {{ item.name }}
            </h2>
            <div
              class="bodyContainer"
              v-for="items in item.categories"
              :key="items.id"
            >
              <section class="subject_wrapper">
                <div class="subjext">
                  <a :href="items.link">
                    <h2>
                      <img :src="items.picPath" />
                      {{ items.displayName }}
                    </h2>
                  </a>
                </div>
                <div class="list">
                  <div class="top_name">推荐</div>
                  <template v-for="it in items.subcategories">
                    <a
                      :key="it.id"
                      v-if="it.position > 11"
                      class="listItem"
                      :href="it.link"
                      >{{ it.metadataValue }}</a
                    >
                  </template>

                  <div class="top_name">分类</div>
                  <template v-for="it in items.subcategories">
                    <a
                      :key="it.id"
                      v-if="it.position < 11"
                      class="listItem"
                      :href="it.link"
                      >{{ it.metadataValue }}</a
                    >
                  </template>
                </div>
              </section>
            </div>
          </div>
          <div class="sliderBar">
            <div
              class="sliderBarItem"
              v-for="item in categoryInfo.data"
              :key="item.id"
            >
              <div class="sliderBarItemContent">
                <a :href="`#` + `anchor_` + item.name">{{ item.name }}</a>
              </div>
            </div>
            <div class="sliderBarItem back">
              <a class="sliderBarItemContent gray" href="#">
                <i class="float iconfont icon-huidaodingbu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Category",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      categoryInfo: (state) => state.category.categoryInfo,
    }),
  },
  methods: {
    ...mapActions("category", ["getCategory"]),
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;

  .mainContent {
    display: block;
    width: 1080px;
    margin: 20px auto 0;
    min-height: 260px;

    .category {
      .breadcrumb {
        font-size: 12px;
        color: #72727b;
        margin: 20px 0;

        a {
          color: #40404c;
          background-color: transparent;
          text-decoration: none;
          outline: 0;
          cursor: pointer;
        }

        a:hover {
          color: #f86442;
        }
      }

      .plates {
        .category_plate {
          position: relative;
          background: #fff;
          margin-bottom: 20px;

          .title {
            margin-bottom: 10px;
            font-size: 20px;
            color: #40404c;
            font-weight: 700;
          }

          .bodyContainer {
            zoom: 1;
            display: -webkit-box;
            display: flex;
            flex-wrap: wrap;

            .subject_wrapper {
              padding: 20px;
              width: 100%;
              background: #f9f9fb;
              border-radius: 6px;
              margin-bottom: 24px;

              .subjext {
                display: inline-block;
                font-size: 20px;
                color: #333;
                text-align: center;
                width: 160px;
                vertical-align: middle;

                a {
                  color: #40404c;
                  background-color: transparent;
                  text-decoration: none;
                  outline: 0;
                  cursor: pointer;

                  h2 {
                    font-weight: 700;
                    font-size: 16px;

                    img {
                      display: block;
                      margin: 0 auto 5px;
                      width: 36px;
                      height: 36px;
                    }
                  }

                  h2:hover {
                    color: #f86442;
                  }
                }
              }
            }
          }

          .bodyContainer .subject_wrapper .list {
            width: calc(100% - 160px - 40px);
            display: inline-block;
            vertical-align: middle;

            a {
              background-color: transparent;
              outline: 0;
              cursor: pointer;
              text-decoration: none;
              font-size: 14px;
            }

            a:hover {
              color: #f86442;
            }

            .top_name {
              font-size: 14px;
              color: #40404c;
              font-weight: 700;
              margin-bottom: 10px;
            }

            .top_name:nth-of-type(2) {
              margin-top: 10px;
            }

            .listItem {
              position: relative;
              display: inline-block;
              padding: 0 15px 10px 0;
              color: #666;
              text-decoration: none;
            }
          }
        }

        .sliderBar {
          width: 50px;
          position: fixed;
          top: 173px;
          right: calc((100% - 1080px) / 2 - 50px - 10px);
          border-radius: 4px;
          z-index: 4;
          background: #f9f9fb;

          .sliderBarItem {
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #72727b;
            cursor: pointer;
            position: relative;
          }

          .sliderBarItem a {
            background-color: transparent;
            text-decoration: none;
            outline: 0;
            cursor: pointer;
          }

          .sliderBarItem:not(.back):hover {
            background: #fef1ee;
          }

          .sliderBarItem:hover {
            color: #fe7959;
            font-weight: 600;
          }

          .sliderBarItem .gray {
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>
