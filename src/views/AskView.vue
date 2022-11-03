<template>
  <div id="ask">
    <div v-for="item in ask" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api/index.js'

export default {
  name: 'AskView',
  created(){
    fetchAskList()
    .then(response =>this.ask = response.data )
    .catch(err => console.log(err))
  },
  data(){
    return {
      ask : [],
    }
  }
}
</script>
