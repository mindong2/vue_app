<template>
  <!-- 컴포넌트화 시키기 전 코드 -> <template>
  <div id="ask">
    <ul class="news_list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="point">
          {{ item.points }}
        </div>
        <div>
          <p class="newsTitle">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link_text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
          </small> 
        </div>
      </li>
    </ul>
  </div>
</template> -->

  <div id="asks">
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  name: "askView",
  components: {
    ListItem,
  },
};
</script>

<style scoped></style>
