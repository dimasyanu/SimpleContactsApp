<template>
  <main id="container-login" class="ui form">
    <div>
      <RouterLink to="/" class="back-link">
        <i class="arrow left link icon">Home</i>
      </RouterLink>
      <h2 class="ui dividing header">Login</h2>
      <div class="field">
        <input type="text" name="username" placeholder="Username">
      </div>
      <div class="field">
        <input type="text" name="password" placeholder="Password">
      </div>
      <div class="field">
        <RouterLink to="profile">
          <div class="ui small primary button">Login</div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>