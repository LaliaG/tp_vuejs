<script setup>
import { ref } from 'vue';
import { useCharacterStore } from '../stores/characterStore.js';
import { useRouter } from 'vue-router';
 
 
</script>

<template>
    <div class="card" style="width: 18rem;">
  <img :src="character.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ character.name }}</h5>
    <p class="card-text">Species: {{ character.species }}</p>
    
  </div>
</div>
</template>