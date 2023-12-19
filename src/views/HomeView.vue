<script setup>
import { ref } from 'vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const showLogin =  ref(true);
const showRegister = ref
(false);

</script>

<template>
  <div class="page">
  <div class="container text-center">
    <h1 class="text-red m-2">Rick & Morty</h1>
    <button class="btn btn-coral m-2" @click="showLogin = true; showRegister = false">Connexion</button>
    <button class="btn btn-coral m-2" @click="showLogin = false; showRegister = true">Inscription</button>
    <div v-if="showLogin">
      <Login />
    </div>
    <div v-if="showRegister">
      <Register />
    </div>
  </div>
  </div>  
</template>
