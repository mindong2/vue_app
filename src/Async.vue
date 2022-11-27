<template>
  <div>
    <button @click="loginUser">click</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>

    <ToolBar></ToolBar>
    <!-- Vue3에서는 아래와 같은 방식으로 Router Transition -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Spinner :loading="this.$store.state.isLoading"></Spinner>
    <!-- 
      Vue2.xx 버전 Router Transition
      <transition name="fade">
        <router-view></router-view>
      </transition>
     -->
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  components: {
    ToolBar,
    Spinner,
  },
  methods: {
    // async await 에서 에러 처리 방법 -> 기존의 then catch와 비슷하지만 통신 외 js오류까지 잡아줌.
    async loginUser() {
      try {
        var user = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (user.data.id === 1) {
          var list = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          this.items = list;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
html::-webkit-scrollbar {
  width: 10px; /* 스크롤바의 너비 */
}

html::-webkit-scrollbar-thumb {
  height: 15%; /* 스크롤바의 길이 */
  background: #42b883; /* 스크롤바의 색상 */

  border-radius: 10px;
}

html::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
.fade-enter-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
