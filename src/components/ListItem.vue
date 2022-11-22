<template>
  <div id="list">
    <ul class="news_list">
      <li v-for="item in listItem" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points || 0}}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <!-- news, jobs에서 호출하는 API에 domain이 있고 ask는없다 -> 해당 페이지는 상세페이지로 가야하므로 이 조건으로 조건부 렌더링 -->
          <template v-if="item.domain">
            <p class="newsTitle">
                <a :href="item.url" target="_blank">{{item.title}}</a>
            </p>
          </template>

          <template v-else>
            <p class="newsTitle">
                <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>      
            </p>
          </template>
          <!--  -->

          <!-- 마찬가지로 jobs에서 호출하는 API에 user 정보가 없으므로 해당 조건으로 렌더링-->
          <small class="link_text" v-if="item.user">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
          </small> 

          <small class="link_text" v-else>
            {{ item.time_ago }} by
            <a :href="item.url" target="_blank">{{ item.domain }}</a>
          </small> 
          <!--  -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
//   Router name에 따라 다른 state 불러옴
  computed : {
    listItem() {
        const name = this.$route.name;

        if(name === 'news'){
            return this.$store.state.news;
        }else if (name === 'ask'){
            return this.$store.state.ask;
        }else if (name === 'jobs'){
            return this.$store.state.jobs;
        }
    }
  },
};
</script>

<style scpoed>
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