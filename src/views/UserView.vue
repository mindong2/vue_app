<template>
  <div id="user">
    <UserProfile></UserProfile>
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
  // UserProfile에서 호출 (공통 컴포넌트)
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   },
  // },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
