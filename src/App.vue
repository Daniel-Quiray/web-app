<template>
  <div id="app">
    <!-- Navigation Bar (only visible if the user is logged in) -->
    <nav v-if="isLoggedIn">
      <ul class="nav-buttons">
        <!-- Navigation links to different pages of the portfolio -->
        <li><router-link to="/portfolio/profile" class="nav-btn">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase" class="nav-btn">Portfolio Showcase</router-link></li>
        <li><router-link to="/portfolio/contact" class="nav-btn">Contact</router-link></li>
        <li><router-link to="/portfolio/creative" class="nav-btn">Creative Page</router-link></li>
        <!-- Logout button -->
        <li class="logout-btn">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
    
    <!-- The router-view displays the current page content -->
    <!-- Emits 'login-success' event to trigger login functionality -->
    <router-view @login-success="handleLoginSuccess"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // State to track whether the user is logged in
      isLoggedIn: false
    };
  },
  methods: {
    // This method is called when the login is successful
    handleLoginSuccess() {
      this.isLoggedIn = true; // Set logged-in state to true
    },
    // Method to handle logout functionality
    logout() {
      this.isLoggedIn = false; // Reset logged-in state
      this.$router.push('/login'); // Redirect user to the login page
    }
  }
}
</script>

<style>
/* Global styles for the entire application */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0; /* Light background color */
  margin: 0;
  padding: 0;
}

/* Styling for the navigation bar */
nav {
  background-color: #243642; /* Dark background for the navbar */
  padding: 6px; /* Space around the content */
  border-bottom: 1px solid #ccc; /* Subtle border below the navbar */
}

/* Styling for the list of navigation buttons */
.nav-buttons {
  list-style-type: none; /* Removes default bullet points */
  padding: 0; /* Removes default padding */
  display: flex; /* Aligns the buttons in a row */
  align-items: center; /* Centers items vertically within the navbar */
}

/* Styling for each navigation button */
.nav-buttons li {
  display: inline; /* Aligns list items horizontally */
  margin-right: 15px; /* Spacing between the buttons */
}

/* Styling for the navigation links */
.nav-btn {
  text-decoration: none; /* Removes underline from links */
  background-color: #629584; /* Button background color */
  color: black; /* Button text color */
  padding: 8px 12px; /* Space inside the button */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for hover effect */
}

/* Hover effect for the navigation links */
.nav-btn:hover {
  background-color: #4F75FF; /* Button color on hover */
  transform: translateY(-2px); /* Moves the button slightly upwards on hover */
}

/* Pushes the logout button to the far right */
.logout-btn {
  margin-left: auto; /* Pushes the logout button to the right side */
}

/* Styling for the logout button */
.logout-btn button {
  background-color: #FF4F4F; /* Red background for the logout button */
  color: black; /* Logout button text color */
  padding: 8px 12px; /* Space inside the button */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor changes to pointer on hover */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for hover effect */
}

/* Hover effect for the logout button */
.logout-btn button:hover {
  background-color: #D73737; /* Darker red background on hover */
}
</style>
