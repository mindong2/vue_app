<template>
  <div id="toolbar" class="header">
    <nav>
        <router-link to="/news">news</router-link> |
        <router-link to="/ask">ask</router-link> |
        <router-link to="/jobs">jobs</router-link> |
        <router-link to="/item">item</router-link> |
        <router-link to="/user">user</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.header {
    display: flex;
    background-color: #42b883;
    padding: 8px;
    margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #35495e;
}
</style>