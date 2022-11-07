<template>
  <div id="news">
    <!-- <p v-for="item in fetchItems" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        router에서 선언해준 params를 item.user로 받아옵니다.
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
    <ul class="news_list">
      <li v-for="item in fetchItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points }}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <p class="newsTitle">
            <a :href="item.url" target="_blank">{{item.title}}</a>
          </p>
          <small class="link_text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
          </small> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsView",
  computed: {
    ...mapGetters({
      fetchItems: "fetchNews",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
  .news_list {
    margin:0;
    padding:0;
  }
  .post {
    list-style: none;
    display: flex;
    align-content: center;
    padding:20px 10px;
    border-bottom: 1px solid #eee;
  }
  .post a {
    text-decoration: none;
    color: #34495e;
    transition: all .15s linear;
  }
  .post a:hover{
    color:#42b883;
    text-decoration: underline;
  }
  .point{display:flex; align-items: center; justify-content: center; color:#42b883; margin-right: 10px;}
  .newsTitle {margin: 0;}
  .link_text {color:#828282;}
</style>
