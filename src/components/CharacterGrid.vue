<script setup>
import { useCharacterStore } from '../stores/characterStore';
import { computed, onMounted } from 'vue';


 
const characterStore = useCharacterStore();
 
const characters = computed(() => characterStore.characters);
const fetchCharacter = async () => {
  if (!characters.value.length) {
    await characterStore.fetchCharacters();
  }
};
onMounted(fetchCharacter);
 
</script>
 
<template>
  <div class="card">
    <div class="character-card" v-for="character in characters" :key="character.id">
      <img :src="character.image" alt="Character Image" class="character-image" />
      <div class="character-details">
        <h3 class="character-name">{{ character.name }}</h3>
        <div class="character-species">
          <span class="color-character">Species: </span>
          <span>{{ character.species }}</span>
        </div>  
      </div>
    </div>
  </div>
</template>
