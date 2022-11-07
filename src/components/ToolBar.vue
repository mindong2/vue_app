<template>
  <div id="toolbar" class="header">
    <nav>
        <router-link to="/news">news</router-link> |
        <router-link to="/ask">ask</router-link> |
        <router-link to="/jobs">jobs</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    display: flex;
    background-color: #42b883;
    padding: 8px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition:all .2s linear;
}

nav a:hover {
  color: #35495e;
}

nav a.router-link-exact-active {
  color: #35495e;
  text-decoration: underline;
}

</style>