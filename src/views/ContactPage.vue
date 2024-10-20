<template>
  <div class="contact-page">
    <div class="form-container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm"> <!-- Prevent default form submission -->
        <div class="form-group">
          <input id="name" v-model="name" placeholder="Enter your name" required class="input-box" />
        </div>
        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required class="input-box" />
        </div>
        <div class="form-group message-group">
          <label for="message" class="message-label">Message</label>
          <textarea id="message" v-model="message" placeholder="Type your message here..." required class="input-box"></textarea>
        </div>
        <button type="submit" class="send-button">Send Message</button>
      </form>
      <transition name="fade">
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p> <!-- Display success message if exists -->
      </transition>
    </div>

    <!-- Button to view sent messages -->
    <button class="sent-messages-button" @click="handleSentMessagesClick">
      <span v-if="sentMessages.length > 0" class="alert-sign" :class="{ fadeOut: fadeOutCount }">{{ sentMessages.length }}</span>
      Sent Messages 
    </button>

    <!-- Drawer for displaying sent messages -->
    <div class="sent-messages-drawer" v-if="drawerOpen">
      <h2>Sent Messages</h2>
      <div v-for="(msg, index) in sentMessages" :key="index" class="sent-message">
        <p><strong>Name:</strong> {{ msg.name }}</p>
        <p><strong>Email:</strong> {{ msg.email }}</p>
        <p><strong>Message:</strong> {{ msg.message }}</p>
      </div>
      <button class="close-drawer" @click="handleCloseDrawer">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '', // User's name
      email: '', // User's email
      message: '', // User's message
      successMessage: '', // Message to show upon successful submission
      sentMessages: [], // Store sent messages
      drawerOpen: false, // Control the visibility of the drawer
      fadeOutCount: false, // Control the fade-out effect of the alert count
      showAlertCount: true, // Control whether to show the alert count
    };
  },
  methods: {
    // Handle form submission
    submitForm() {
      console.log("Form submitted:", {
        name: this.name,
        email: this.email,
        message: this.message,
      });

      // Simulate an API call
      setTimeout(() => {
        // If submission is successful
        this.successMessage = 'Your message has been sent successfully!';
        this.sentMessages.push({ name: this.name, email: this.email, message: this.message }); // Add to sent messages
        this.name = ''; // Clear the name input
        this.email = ''; // Clear the email input
        this.message = ''; // Clear the message input

        // Remove the success message after 1 second
        setTimeout(() => {
          this.successMessage = '';
        }, 1000);
      }, 1000); // Simulating a delay of 1 second
    },
    // Handle click on the Sent Messages button
    handleSentMessagesClick() {
      this.toggleDrawer(); // Toggle the drawer visibility
      if (this.sentMessages.length > 0) {
        this.fadeOutCount = true; // Trigger fade-out effect
        // Show alert count again after a delay
        setTimeout(() => {
          this.fadeOutCount = false; // Reset fade-out state
        }, 1000); // 1 second delay
      }
    },
    // Handle closing the drawer
    handleCloseDrawer() {
      this.toggleDrawer(); // Toggle the drawer visibility
      this.fadeOutCount = true; // Trigger fade-out effect
      this.showAlertCount = false; // Completely hide the count
      // Reset fade-out state after a delay
      setTimeout(() => {
        this.fadeOutCount = false; // Reset fade-out state
      }, 1000); // 1 second delay
    },
    // Toggle the visibility of the drawer
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen; // Toggle the drawer visibility
    },
  },
};
</script>

<style scoped>
.contact-page {
  background-image: url('@/assets/outsidebg.jpg'); /* Path to your background image */
  background-size: cover; /* Cover the entire background */
  background-position: center; /* Center the background image */
  height: 100vh; /* Full viewport height */
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 50px; /* Padding for the container */
  position: relative; /* Added position relative for drawer positioning */
}

.form-container {
  background: linear-gradient(135deg, rgba(106, 154, 176, 0.8), rgba(58, 109, 140, 0.8), rgba(0, 31, 63, 0.8)); /* Gradient with semi-transparency */
  padding: 50px; /* Padding for the form container */
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Slightly darker shadow */
  width: 100%; /* Full width */
  max-width: 500px; /* Maximum width for the form */
  text-align: center; /* Center text in the container */
  animation: fadeIn 1s ease; /* Fade-in animation */
}

h1 {
  color: #001F3F; /* Change title color */
  font-size: 50px; /* Title font size */
  font-weight: bolder; /* Bold title */
  margin-bottom: 50px; /* Space below the title */
}

.form-group {
  margin-bottom: 10px; /* Space between form groups */
  text-align: left; /* Align content to the left */
}

.input-box {
  width: 100%; /* Full width for input */
  padding: 12px; /* Padding for better usability */
  border: 1px solid #ccc; /* Light border */
  border-radius: 8px; /* Rounded edges */
  margin-bottom: 10px; /* Space below input */
  font-size: 18px; /* Font size for input */
  color: #333; /* Input text color */
  background-color: #E5D9F2; /* Background for the input box */
}

.input-box::placeholder {
  color: #888; /* Placeholder text color */
}

.input-box:focus {
  border-color: #161D6F; /* Focus border color */
  outline: none; /* Remove default outline */
}

.message-group {
  text-align: center; /* Align the label to the left */
}

.message-label {
  font-weight: bold; /* Make the label bold */
  font-size: 20px; /* Set a default font size */
  margin-bottom: 8px; /* Space between the label and the textarea */
  color: #6A9AB0; /* Change label color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Add a subtle shadow for better visibility */
}

textarea#message {
  resize: vertical; /* Allow vertical resizing */
  height: 120px; /* Set a minimum height for the message box */
  font-size: 14px; /* Adjust font size for the message box */
}

.send-button {
  background-color: #3A6D8C; /* Button background color */
  color: #FFFBE6; /* Button text color */
  font-size: 16px; /* Adjusted font size */
  font-weight: bold; /* Bold button text */
  padding: 10px 15px; /* Button padding */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded button edges */
  cursor: pointer; /* Change cursor to pointer */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transition effects */
  width: 60%; /* Button width */
}

.send-button:hover {
  background-color: #384B70; /* Darker background on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

/* Success message styles with transition */
.success-message {
  color: #399918; /* Change to your preferred color for success messages */
  font-weight: bold; /* Bold success message */
  margin-top: 20px; /* Space between the form and the success message */
  transition: opacity 0.5s ease; /* Smooth opacity transition */
}

/* Fade transition for messages */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease; /* Smooth opacity transition */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fade out effect */
}

/* Fade-in animation */
@keyframes fadeIn {
  0% {
    opacity: 0; /* Start with hidden opacity */
    transform: translateY(-20px); /* Start from above */
  }
  100% {
    opacity: 1; /* End with visible opacity */
    transform: translateY(0); /* End at original position */
  }
}

/* Styles for sent messages button */
.sent-messages-button {
  background-color: #4D9C8A; /* Button background color */
  color: #fff; /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded edges */
  padding: 10px 20px; /* Padding for button */
  font-size: 18px; /* Font size */
  cursor: pointer; /* Pointer on hover */
  transition: background-color 0.3s ease; /* Transition effect */
  position: fixed; /* Fixed position */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the right */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Button shadow */
}

.sent-messages-button:hover {
  background-color: #3B7B6B; /* Darker shade on hover */
}

/* Styles for alert sign */
.alert-sign {
  background-color: #FF6347; /* Alert background color */
  border-radius: 50%; /* Round shape */
  padding: 5px 10px; /* Padding for alert sign */
  position: absolute; /* Positioning relative to the button */
  top: 0; /* Align to top */
  right: 0; /* Align to right */
  font-weight: bold; /* Bold font for alert */
}

/* Styles for sent messages drawer */
.sent-messages-drawer {
  position: fixed; /* Fixed position */
  top: 20%; /* Position from top */
  right: 20px; /* Position from right */
  width: 300px; /* Width of the drawer */
  background: rgba(255, 255, 255, 0.9); /* Light background */
  border-radius: 8px; /* Rounded edges */
  padding: 15px; /* Padding */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* Shadow effect */
  z-index: 100; /* Ensure it appears above other elements */
}

/* Close button for the drawer */
.close-drawer {
  background-color: #FF6347; /* Close button background color */
  color: white; /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded edges */
  padding: 10px 20px; /* Padding */
  cursor: pointer; /* Pointer on hover */
  transition: background-color 0.3s ease; /* Transition effect */
}

.close-drawer:hover {
  background-color: #d9534f; /* Darker shade on hover */
}

/* Animation for fade-out effect */
.fadeOut {
  opacity: 0; /* Fully transparent */
  transition: opacity 1s ease; /* Smooth transition */
}
</style>
