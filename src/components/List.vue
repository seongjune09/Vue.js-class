<template>
  <div class="list">
    <div class="blog" v-for="(blog, index) in blogs" :key="index">
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.content }}</p>
      <small>{{ blog.date }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: { blogs: Array },
}
</script>