<script setup>
import { useCharacterStore } from "../stores/characterStore";
import CharacterGrid from '../components/CharacterGrid.vue';


const CharacterStore = useCharacterStore();



</script>

<template>
    <CharacterGrid
    />
</template>

<style scoped>
  .game-card {
    text-decoration: none;
    border: solid 1px black;
    border-radius: 10px;
    overflow: hidden;

    display: grid;
    grid-template: 8fr 1fr / 1fr;

    background-color: black;
  }

  .card-title {
    display: block;
    color: transparent;
    padding: 1ch 2ch;
    position: relative;
    left: 120%;
    transition: left 400ms ease,
                color 400ms ease;
  }

  .game-card:hover >.card-title {
    left: 0;
    color: yellowgreen
  }

  .card-picture > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: filter 200ms ease;
    filter: grayscale(1);
  }

  .game-card:hover > .card-picture > img {
    filter: grayscale(0);
  }

</style>