//Card.vue

<template>
  <main class="content">
     <div class="product-card">
          <img :src="room.image" class="room-image" />
          <h4 @click="$emit('openModal', room.id)">{{ room.title }}</h4>
          <p>{{ room.content }}</p>
          <p>{{ room.price }}원</p>
      </div>
    </main>
</template>

<script>
export default {
  name: 'Card',    
  props:{
    room : Object,
  }
}
</script>