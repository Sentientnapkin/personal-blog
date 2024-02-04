<script setup lang="ts">
  import { marked } from 'marked'

  const props = defineProps({
    id: String
  })

  import firstVlog from '../assets/Blogs/firstBlog.md'
  function compiledMarkdown() {
    return marked(firstVlog)
  }
</script>

<template>
  <div class="blog-post">
    <h1>{{ id }}</h1>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<style scoped>

</style>