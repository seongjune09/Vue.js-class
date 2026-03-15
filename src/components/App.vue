<template>
	<div class="black-bg" v-if="모달창">
      <div class="white-bg">
        <img :src="원룸들[선택된원룸].image" class="img"/>
        <h4>{{ 원룸들[선택된원룸].title }}</h4>
        <p>{{ 원룸들[선택된원룸].content }}</p>
        <p>{{ 원룸들[선택된원룸].price }} 만원</p>
        <p @click="모달창=false">닫기</p>
      </div>
  </div>
  <div class="app">
    <nav class="menu">
      <a v-for="(작명1,작명2) in 메뉴들" :key="작명2">{{작명1}}</a>
    </nav>

    <main class="content">
      <img src="../assets/logo.svg" alt="logo" class="logo" />

    <div class="product-card"
              v-for="(원룸들, i) in 원룸들" :key="i">
              <img :src="원룸들.image" class = "img"/>
              <h4 @click="모달창=true">{{ 원룸들.title }}</h4>
              <p>{{ 원룸들.content }} </p>
              <p>{{ 원룸들.price }} 만원</p>
              <button @click="신고수[i]++"> 허위매물신고</button> <span>신고수: {{ 신고수[i] }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import data from '../assets/oneroom.js';
import Card from './Card.vue'
import '@/./assets/main.css';

export default {
  name : 'App',
  data(){
    return {
      모달창 : false,
      선택된원룸 : 0,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      원룸들 : data,
      }
  },
}
</script>