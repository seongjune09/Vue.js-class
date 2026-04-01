<template>
  <div class="list">
    <div class="blog" v-for="(blog, index) in blogs" :key="index">
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.content }}</p>
      <small>{{ blog.date }}</small>
      <br>
      <button 
        class="btn btn-primary btn-sm mt-2"
        @click="$router.push('/detail/' + index)"
      >
        상세보기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: { blogs: Array },
}
</script>