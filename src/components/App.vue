//App.vue

<template>
  <Modal @closeModal="모달창 = false" :원룸들="원룸들" :상품번호="상품번호" :모달창="모달창"/>

  <div class="app">
    <nav class="menu">
      <a v-for="(작명1,작명2) in 메뉴들" :key="작명2">{{작명1}}</a>
    </nav>
    <Card @openModal="모달창 = true; 상품번호=$event" :room="원룸들[index]" v-for="(원룸, index) in 원룸들" :key="index"/>
  </div>
</template>

<script>

import data from '../assets/oneroom.js';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name : 'App',
  data(){
    return {
      상품번호 : 0,
      원룸들 : data,
      모달창 : false,
      신고수 : [0,0,0,0,0,0],
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
  },
  components : {
    Modal,
    Card,
  }
}
</script>