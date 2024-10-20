<template>
  <div class="login-page">
    <!-- Login Form -->
    <form @submit.prevent="login"> <!-- Prevent default form submission behavior -->
      <!-- Username Input -->
      <div class="form-group">
        <input
          v-model="username"
          id="username"
          placeholder="Username"
          class="input-box"
        />
      </div>
      
      <!-- Password Input -->
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Password"
          class="input-box"
        />
      </div>

      <!-- Login Button -->
      <button type="submit" class="login-btn">LOGIN</button>

      <!-- Error Message Display -->
      <p v-if="error" class="error-message">{{ error }}</p> <!-- Show error if login fails -->
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: '', // Model for username input field
      password: '', // Model for password input field
      error: '' // Error message to display when login fails
    };
  },
  methods: {
    // Login function to validate the user credentials
    login() {
      // Hardcoded credentials for demo purposes
      const hardcodedUsername = 'admin';
      const hardcodedPassword = '1234';
      
      // Check if the entered credentials match hardcoded values
      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        this.$emit('login-success'); // Emit event for successful login
        this.$router.push('/portfolio/profile'); // Redirect to profile page on successful login
      } else {
        this.error = 'Invalid username or password'; // Set error message if credentials are incorrect
      }
    }
  }
};
</script>

<style scoped>
/* Styling for the login page */
.login-page {
  background-image: url('@/assets/background.jpg'); /* Background image */
  background-size: cover; /* Cover the entire page */
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

/* Styling for the form */
form {
  background: linear-gradient(135deg, #6A9AB0, #3A6D8C, #001F3F); /* Gradient background */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a 3D effect */
  max-width: 350px;
  width: 100%;
  text-align: center;
  animation: fadeIn 1s ease; /* Fade-in animation */
}

/* Input field styling */
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

/* Placeholder styling */
.input-box::placeholder {
  color: #888; /* Placeholder text color */
}

/* Input field focus state */
.input-box:focus {
  border-color: #007bff;
  outline: none; /* Remove default outline on focus */
}

/* Login button styling */
.login-btn {
  background-color: #4F75FF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  width: 60%;
}

/* Hover effect for login button */
.login-btn:hover {
  background-color: #384B70;
  transform: translateY(-2px); /* Slight upward movement on hover */
}

/* Error message styling */
.error-message {
  color: #F95454; /* Red color for error */
  margin-top: 10px;
  font-weight: bold;
}

/* Fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
