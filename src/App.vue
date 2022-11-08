<template>
  <ToolBar></ToolBar>
  <!-- Vue3에서는 아래와 같은 방식으로 Router Transition -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <!-- 
    Vue2.xx 버전 Router Transition
    <transition name="fade">
      <router-view></router-view>
    </transition>
   -->
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html {-ms-overflow-style: none; /* IE and Edge */scrollbar-width: none; /* Firefox */}
html::-webkit-scrollbar {
    width: 10px;  /* 스크롤바의 너비 */
}

html::-webkit-scrollbar-thumb {
    height: 15%; /* 스크롤바의 길이 */
    background: #42b883; /* 스크롤바의 색상 */
    
    border-radius: 10px;
}

html::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
}
.fade-enter-active{
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</style>
