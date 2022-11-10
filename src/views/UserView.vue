<template>
  <div id="user">
    <UserProfile :info="userInfo">
      <template #username>username: {{userInfo.id}}</template>
      <template #time>{{'Joined: ' + userInfo.created || ''}}, </template>
      <template #karma><span>karma: {{ userInfo.karma || 0 }}</span></template>
    </UserProfile>
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
