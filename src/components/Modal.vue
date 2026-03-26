// Modal.vue

<template>
  <div class="black-bg" v-if="모달창">
    <div class="white-bg">
      <img :src="원룸들[상품번호].image" class="room-image" />
      <h4>{{ 원룸들[상품번호].title }}</h4>
      <p>{{ 원룸들[상품번호].content }}</p>
      <p>{{ 원룸들[상품번호].price }}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',    
  props:{
    원룸들 : Array,
    상품번호 : Number,
    모달창 : Boolean
  }
  
}
</script>