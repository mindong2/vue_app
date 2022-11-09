<template>
  <div id="item">
    <section> 
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{fetchedItem.time_ago}}
          </div>
        </div>
      </div> -->

      <UserProfile :info="fetchedItem">
        <template #username>{{ fetchedItem.user }}</template>
        <template #time>time: {{ fetchedItem.time_ago }}</template>
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