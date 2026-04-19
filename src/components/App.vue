<<<<<<< HEAD
//Container.vue
<template>
    <div class="container">
        <div v-if="step==0">
            <Post v-for="(post, index) in posts" :key="index" :post="post" />
        </div>

        <!-- 필터선택페이지 -->
         <div v-if="step==1">
        <div class="upload-image"></div>
        <div class="filters">
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
            <div class="filter-1"></div>
        </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step==2">
        <div class="upload-image"></div>
        <div class="write">
            <textarea class="write-box">write!</textarea>
        </div>
        </div>
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: 'Container',
    components: { Post },
    props: {
        step: Number,
        posts: Array,
    }
=======
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
>>>>>>> 5cdaaf9021d157caa2aa46781fe126df697f9e7f
};
</script>