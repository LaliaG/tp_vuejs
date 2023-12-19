import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([]);

  // Fonction pour trouver des données par code postal
  const characterForById = computed(() => (characterId) => {
    return characters.value.find(character => character.id === characterId);
  });

  // Action pour charger les données depuis l'API avec Axios
  async function fetchCharacters() {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/`);
      characters.value = response.data.results;
    } catch (err) {
      console.error('Erreur lors de la récupération des données :', err);
    }
  }

  

  return { characters, characterForById, fetchCharacters };
});
