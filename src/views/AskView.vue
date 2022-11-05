<template>
  <div id="ask">
    <div v-for="item in fetchedAsk" :key="item.id">
      {{ item.title }}
    </div>
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
