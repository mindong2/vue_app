<template>
  <div id="job">
    <div v-for="job in jobs" :key="job.id">
        {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api/index.js'
export default {
    name: 'JobsView',
    created(){
        fetchJobsList()
        .then(response => this.jobs = response.data)
        .catch(err => console.log(err))
    },
    data(){
        return {
            jobs : []
        }
    }
}
</script>

<style>

</style>