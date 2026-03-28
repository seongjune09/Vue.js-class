// App.vue
<template>
  <nav class="navbar navbar-light bg-light px-3">
    <span class="navbar-brand fw-bold">Vuelog</span>
  </nav>

  <div class="container mt-5">
    <div class="text-center">
      <h2>React 개발자의 블로그입니다</h2>
      <p class="text-muted">- Vue로 만들었음 -</p>
    </div>
  </div>

  <List/>
</template>

<script>
import List from './List.vue';
import data from './assets/blog';

export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
      블로그글: data,
    }
  }
}

</script>