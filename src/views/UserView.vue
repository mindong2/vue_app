<template>
  <div id="user">
    <div v-for="user in users" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchUserList } from '@/api/index.js'
export default {
  created(){
    fetchUserList()
    .then(response => this.users = response.data)
    .catch(err => console.log(err))
  },

  data(){
    return {
      users : []
    }
  }
}
</script>

<style>

</style>