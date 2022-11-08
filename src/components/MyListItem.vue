<template>
  <div id="list">
    <ul class="news_list">
      <li v-for="item in fetchedItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points || 0}}
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
export default {
    // 첫번째 리팩토링 과정 => 라우터 fullpath별로 dispatch하는 actions를 상이하게 하고, 하나의 데이터에 담습니다. 정확한건 (ListItem.vue 참고)
  name: "ListItem",
  data(){
    return {
        fetchedItems : ''
    }
  },

  computed: {
  },
  created() {
    if(this.$route.fullPath === '/news'){
        this.$store.dispatch("FETCH_NEWS");
        this.fetchedItems = this.$store.getters.fetchNews;
    }else if (this.$route.fullPath === '/ask'){
        this.$store.dispatch("FETCH_ASKS");
        this.fetchedItems = this.$store.getters.fetchedAsk;
    }else if (this.$route.fullPath === '/jobs'){
        this.$store.dispatch("FETCH_JOBS");
        this.fetchedItems = this.$store.getters.fetchJobs;
    }
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