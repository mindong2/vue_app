<template>
  <div id="item">
    <section> 
      <UserProfile :info="fetchedItem">
        <template #username>
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </template>
        <template #time>Posted: {{ fetchedItem.time_ago }}</template>
      </UserProfile>
      
      <h2>
        {{ fetchedItem.title }}
      </h2>
    </section>

    <section>
      <div v-html="fetchedItem.content"></div>
    </section>

  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
  .user-container{
    display: flex;
    align-items: center;
    padding: .5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 1rem;
  }
  .time{
    font-size: 0.7rem;
  }
</style>