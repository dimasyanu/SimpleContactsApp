<template>
  <main id="container-register" class="ui form">
    <div>
      <RouterLink to="/" class="back-link">
        <i class="arrow left link icon">Home</i>
      </RouterLink>
      <h2 class="ui dividing header">Register</h2>
      <div class="field">
        <input type="text" name="firstName" placeholder="First Name">
      </div>
      <div class="field">
        <input type="text" name="lastName" placeholder="Last Name">
      </div>
      <div class="field">
        <input type="text" name="email" placeholder="Email address">
      </div>
      <div class="field">
        <input type="text" name="phone" placeholder="Phone number">
      </div>
      <div class="field">
        <textarea name="address" placeholder="Address"></textarea>
      </div>
      <div class="field">
        <input type="text" name="password" placeholder="New Password">
      </div>
      <div class="field">
        <input type="text" name="confirmPassword" placeholder="Confirm New Password">
      </div>
      <div class="field">
        <RouterLink to="profile">
          <div class="ui small primary button">Create Account</div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>