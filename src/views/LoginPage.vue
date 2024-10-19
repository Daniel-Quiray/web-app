<template>
  <div class="login-page">
    <form @submit.prevent="login">
      <div class="form-group">
        <input
          v-model="username"
          id="username"
          placeholder="Username"
          class="input-box"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Password"
          class="input-box"
        />
      </div>
      <button type="submit" class="login-btn">LOGIN</button>
      <p v-if="error" class="error-message">{{ error }}</p>
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
        this.$emit('login-success'); // Emit event on successful login
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
  background-image: url('@/assets/background.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

form {
  background: linear-gradient(135deg, #6A9AB0, #3A6D8C, #001F3F); /* Gradient background */  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  width: 100%;
  text-align: center;
  animation: fadeIn 1s ease;
}

.input-box {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
}

.input-box::placeholder {
  color: #888; /* Placeholder text color */
}

.input-box:focus {
  border-color: #007bff;
  outline: none;
}

.login-btn {
  background-color: #4F75FF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 60%;
}

.login-btn:hover {
  background-color: #384B70;
  transform: translateY(-2px);
}

.error-message {
  color: #F95454;
  margin-top: 10px;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
