<script setup>
import '~/assets/sass/home.scss'
</script>

<template>
  <main id="container-home">
    <div>
      <h2 class="ui center aligned header">Simple Contacts App</h2>
      <div class="btn-group">
        <RouterLink to="login" class="ui small inverted secondary button">
          Login
        </RouterLink>
        <RouterLink to="register" class="ui small primary button">
          Register
        </RouterLink>
      </div>
    </div>
  </main>
</template>