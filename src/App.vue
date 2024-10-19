<template>
  <div id="app">
    <nav v-if="isLoggedIn"> <!-- Show nav only if logged in -->
      <ul class="nav-buttons">
        <li><router-link to="/portfolio/profile" class="nav-btn">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase" class="nav-btn">Portfolio Showcase</router-link></li>
        <li><router-link to="/portfolio/contact" class="nav-btn">Contact</router-link></li>
        <li><router-link to="/portfolio/creative" class="nav-btn">Creative Page</router-link></li>
        <li class="logout-btn"><button @click="logout">Logout</button></li> <!-- Logout button -->
      </ul>
    </nav>
    <router-view @login-success="handleLoginSuccess"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false // Track if the user is logged in
    };
  },
  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true; // Set logged-in state to true
    },
    logout() {
      this.isLoggedIn = false; // Reset the logged-in state
      this.$router.push('/login'); // Redirect to the login page
    }
  }
}
</script>

<style>
/* Add your global styles here */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0; /* Optional background color */
  margin: 0;
  padding: 0;
}

nav {
  background-color: #243642;
  padding: 6px;
  border-bottom: 1px solid #ccc;
}

.nav-buttons {
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center; /* Center items vertically */
}

.nav-buttons li {
  display: inline;
  margin-right: 15px;
}

.nav-btn {
  text-decoration: none;
  background-color: #629584; /* Button color */
  color: black;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.nav-btn:hover {
  background-color: #4F75FF; /* Change this color for hover effect */
  transform: translateY(-2px);
}

.logout-btn {
  margin-left: auto; /* Push the logout button to the right */
}

.logout-btn button {
  background-color: #FF4F4F; /* Color for logout button */
  color: black;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.logout-btn button:hover {
  background-color: #D73737; /* Darker shade for hover effect */
}
</style>
