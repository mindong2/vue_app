<template>
  <div id="job">
    <ul class="news_list">
      <li v-for="job in fetchJobs" :key="job.id" class="post">
        <div>
          <p class="newsTitle">
            <a :href="job.url" target="_blank">{{job.title}}</a>
          </p>
          <small class="link_text">
            {{ job.time_ago }} <a :href="job.url" target="_blank">{{ job.domain }}</a>
          </small> 
        </div>
      </li>
    </ul>
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
