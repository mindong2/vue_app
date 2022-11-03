<template>
  <div id="news">
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api/index.js'
export default {
  name: 'NewsView',
  created() {
    fetchNewsList()
    .then(response => this.users = response.data)
    .catch(err => console.log(err))
  },
  data() {
    return {
      users : []
    }
  }
}
</script>

<style>

</style>