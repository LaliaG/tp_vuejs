<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore.js';
import { useRouter } from 'vue-router';
 
 
const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();
 
const login = () => {
  console.log('Login:', email.value, password.value);
  try {
    authStore.login(email.value, password.value);
    // Redirection après connexion réussie
    router.push('/characters');
  } catch (error) {
    // Si les identifiants ne correspondent pas, afficher une erreur et ne pas rediriger
    alert(error.message);
    // Réinitialiser les champs
    email.value = '';
    password.value = '';
  }
};    
</script>
 
<template>
  <div class="container">
    <h2 class="text-red">Connexion</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
  </div>
</template>
Dispose d’un menu contextuel
