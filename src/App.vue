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
.fade-enter-active{
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</style>
