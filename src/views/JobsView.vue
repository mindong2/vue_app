<template>
  <div id="job">
    <div v-for="job in fetchJobs" :key="job.id">
      {{ job.title }}
    </div>
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
