<template>
    <div class="login-page">
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" id="username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" />
        </div>
        <button type="submit">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      login() {
        const hardcodedUsername = 'admin';
        const hardcodedPassword = '1234';
        
        if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
          this.$router.push('/portfolio/profile');
        } else {
          this.error = 'Invalid username or password';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  