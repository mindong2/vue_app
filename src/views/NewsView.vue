<template>
  <div id="news">
    <div v-for="user in fetchItems" :key="user.id">
      {{ user.title }}
    </div>
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
