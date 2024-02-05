<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { marked } from "marked";

  const props = defineProps({
    id: String
  })

  const blog_md = ref('')
  onMounted(  async () => {
    // `../assets/Blogs/${props.id}.md`
    await fetch(`../../public/Blogs/${props.id}.md`)
      .then((res) => res.clone().text())
      .then(async (markdownContent) => {
        console.log(markdownContent)
        blog_md.value = await marked.parse(markdownContent)
      })
  })
</script>

<template>
  <div class="blog-post">
    <button>
      <router-link to="/">Back</router-link>
    </button>
    <h1>{{ id }}</h1>
    <div v-html="blog_md"></div>
  </div>
</template>

<style scoped>

</style>