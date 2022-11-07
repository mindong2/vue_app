<template>
  <div id="ask">
    <ul class="news_list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points }}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <p class="newsTitle">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
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
  name: "AskView",
  computed: {
    // #1 배열 표기법
    ...mapGetters(["fetchedAsk"]),

    // #2 변수 선언 후 호출
    // ...mapGetters({
    //   askItems: "fetchedAsk",
    // }),

    // #3 기본 호출
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>
