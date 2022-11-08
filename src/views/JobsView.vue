<template>
  <div id="jobs">
    <!-- <p v-for="item in fetchItems" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        router에서 선언해준 params를 item.user로 받아옵니다.
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  name: "JobsView",
  components: {
    ListItem
  }
};
</script>

<style></style>
