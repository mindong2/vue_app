<template>
  <ToolBar></ToolBar>
  <router-view></router-view>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style></style>
