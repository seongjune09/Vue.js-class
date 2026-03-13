<!-- //App.vue
<template>
  <div class="app">
    <nav class="menu">
      <a v-for="(작명1,작명2) in 메뉴들" :key="작명2">{{작명1}}</a>
    </nav>

    <main class="content">

      <div class="product-card">
        <img src="./assets/room0.jpg" alt="room1" class="room-image" />
        <h4 @click="모달창=true">{{ products[0] }}</h4>
        <p>{{ price1 }} 만원</p>
        <button @click="신고수[0]++"> 허위매물신고</button> <span>신고수: {{ 신고수[0] }}</span>
      </div>

      <div class="product-card">
        <img src="./assets/room1.jpg" alt="room1" class="room-image" />
        <h4 @click="모달창=true">{{ products[1] }}</h4>
        <p>{{ price2 }} 만원</p>
        <button @click="신고수[1]++"> 허위매물신고</button> <span>신고수: {{ 신고수[1] }}</span>
      </div>

      <div class="product-card">
        <img src="./assets/room2.jpg" alt="room1" class="room-image" />
        <h4 @click="모달창=true">{{ products[2] }}</h4>
        <p>{{ price3 }} 만원</p>
        <button @click="신고수[2]++"> 허위매물신고</button> <span>신고수: {{ 신고수[2] }}</span>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  모달창 : false,
  name : 'App',
  data(){
    return {
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      price1 : 100,
      price2 : 200,
      price3 : 300,
      products : ['해운대원룸', '에코델타시티원룸', '광안리원룸'],
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    }
  }
}


</script> -->




<template>
	<div class="black-bg" v-if="모달창">
	    <div class="white-bg">
              <img :src="원룸들.image" class = "img"/>
              <h4 @click="모달창=true">{{ 원룸들.title }}</h4>
              <p>{{ 원룸들.content }} </p>
          <p>{{ 원룸들.price }} 만원</p>
	      <button @click="모달창=false">닫기</button>
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
import '@/./assets/main.css';

export default {
  name : 'App',
  data(){
    return {
      모달창 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      원룸들 : data,
      }
  },
  methods : {
    increase(i){
      this.신고수 += 1;
    }
  }
}
</script>