<template>
  <div id="news">
    <p v-for="item in fetchItems" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <!-- router에서 선언해준 params를 item.user로 받아옵니다. -->
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
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

<style></style>
