<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.svg" class="logo" />
    </div>

    <Container :posts="posts" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import posts from './Post.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      posts,
      moreCount: 0
    };
  },
  methods: {
    more() {
      axios.get(`https://qkrwpgus.github.io/vue/more${this.moreCount}.json`)
        .then((result) => {
          this.posts.push(...result.data);
          this.moreCount++;
        })
        .catch((err) => {
          console.error('더보기 실패:', err);
        });
    }
  }
};
</script>