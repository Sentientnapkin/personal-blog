<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Sebastian Vargas</h1>
    <div>
      <h3>Posts</h3>
      <li class="blog-list">
        <router-link
          to="/blog/firstBlog">
          Blog #1
        </router-link>
      </li>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
  container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  h1 {
    font-size: 3rem;
  }
  .blog-list {
    list-style: none;
  }
</style>