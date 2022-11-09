<template>
  <div id="user">
    <UserProfile :info="userInfo">
      <template #username>username: {{userInfo.id}}</template>
      <template #time>time: {{userInfo.created}}</template>
      <template #karma>karma: {{ userInfo.karma }}</template>
    </UserProfile>
    <!-- <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
