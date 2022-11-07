<template>
  <div id="job">
    <p v-for="job in fetchJobs" :key="job.id">
      <a :href="job.url" target="_blank">{{ job.title }} </a>
      <small> {{ job.time_ago }} {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "JobsView",
  computed: {
    ...mapGetters(["fetchJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
