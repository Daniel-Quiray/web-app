<template>
  <div class="contact-page">
    <div class="form-container">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
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
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </transition>
    </div>

    <!-- Sent Messages Button -->
    <button class="sent-messages-button" @click="handleSentMessagesClick">
      <span v-if="sentMessages.length > 0" class="alert-sign" :class="{ fadeOut: fadeOutCount }">{{ sentMessages.length }}</span>
      Sent Messages 
    </button>

    <!-- Drawer for Sent Messages -->
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
      name: '',
      email: '',
      message: '',
      successMessage: '',
      sentMessages: [], // Store sent messages
      drawerOpen: false, // Control the visibility of the drawer
      fadeOutCount: false, // Control the fade-out effect of the alert count
      showAlertCount: true, // Control whether to show the alert count
    };
  },
  methods: {
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
        this.name = '';
        this.email = '';
        this.message = '';

        // Remove the success message after 1 second
        setTimeout(() => {
          this.successMessage = '';
        }, 1000);
      }, 1000); // Simulating a delay of 1 second
    },
    handleSentMessagesClick() {
      this.toggleDrawer();
      if (this.sentMessages.length > 0) {
        this.fadeOutCount = true; // Trigger fade-out effect
        // Show alert count again after a delay
        setTimeout(() => {
          this.fadeOutCount = false; // Reset fade-out state
        }, 1000); // 1 second delay before showing again
      }
    },
    handleCloseDrawer() {
      this.toggleDrawer();
      this.fadeOutCount = true; // Trigger fade-out effect
      this.showAlertCount = false; // Completely hide the count
      // Reset fade-out state after a delay
      setTimeout(() => {
        this.fadeOutCount = false; // Reset fade-out state
      }, 1000); // 1 second delay
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen; // Toggle the drawer visibility
    },
  },
};
</script>

<style scoped>
.contact-page {
  background-image: url('@/assets/outsidebg.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative; /* Added position relative for drawer positioning */
}

.form-container {
  background: linear-gradient(135deg, rgba(106, 154, 176, 0.8), rgba(58, 109, 140, 0.8), rgba(0, 31, 63, 0.8)); /* Gradient with semi-transparency */
  padding: 50px;
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Slightly darker shadow */
  width: 100%; /* Adjust width as needed */
  max-width: 500px; /* Maximum width for the form */
  text-align: center; /* Center text in the container */
  animation: fadeIn 1s ease; /* Fade-in animation */
}

h1 {
  color: #001F3F; /* Change title color */
  font-size: 50px;
  font-weight: bolder;
  margin-bottom: 50px;
}

.form-group {
  margin-bottom: 10px;
  text-align: left; /* Align content to the left */
}

.input-box {
  width: 100%;
  padding: 12px; /* Increase padding for better usability */
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
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
  background-color: #3A6D8C;
  color: #FFFBE6;
  font-size: 16px; /* Adjusted font size */
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 60%;
}

.send-button:hover {
  background-color: #384B70; /* Darker background on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

/* Success message styles with transition */
.success-message {
  color: #399918; /* Change to your preferred color for success messages */
  font-weight: bold;
  margin-top: 20px; /* Space between the form and the success message */
  transition: opacity 0.5s ease; /* Smooth opacity transition */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease; /* Smooth opacity transition */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fade out effect */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Styles for Sent Messages Button */
.sent-messages-button {
  position: absolute;
  top: 20px; /* Adjust position as needed */
  right: 20px; /* Adjust position as needed */
  background: linear-gradient(135deg, rgba(106, 154, 176, 0.8), rgba(58, 109, 140, 0.8)); /* Match with contact box */
  color: #FFFBE6; /* Text color for visibility */
  padding: 10px 20px; /* Padding for better clickability */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* Adjust font size */
  transition: background-color 0.3s ease;
  z-index: 10; /* Ensure it stays on top */
}

.sent-messages-button:hover {
  background-color: #3A6D8C; /* Darker background on hover */
}

/* Styles for Sent Messages Drawer */
.sent-messages-drawer {
  position: absolute;
  top: 70px; /* Position below the button */
  right: 20px; /* Align with the button */
  background: linear-gradient(135deg, rgba(106, 154, 176, 0.8), rgba(58, 109, 140, 0.8)); /* Match with contact box */
  padding: 20px;
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Slightly darker shadow */
  color: #FFFBE6; /* Text color for visibility */
  width: 250px; /* Fixed width for the box */
  z-index: 10; /* Ensure it stays on top */
}

.close-drawer {
  background-color: #921A40; /* Change background to red */
  color: #FFFBE6; /* Text color for visibility */
  padding: 10px 15px; /* Padding for better clickability */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Adjust font size */
  transition: background-color 0.3s ease;
}

.close-drawer:hover {
  background-color: #C75B7A; /* Darker red background on hover */
}

/* Adjust alert sign styles */
.alert-sign {
  display: inline-block; /* Allows for better positioning */
  opacity: 1; /* Make sure the count is initially visible */
  transition: opacity 0.5s ease; /* Smooth opacity transition */
  font-size: 30px; /* Increase font size for visibility */
  margin-right: 8px; /* Space between number and text */
}

.fadeOut {
  opacity: 0; /* Fade out effect */
}

/* New styles for sent messages */
.sent-message {
  background-color: white; /* White background for sent messages */
  color: black; /* Black text for visibility */
  padding: 10px; /* Padding for better readability */
  margin-bottom: 10px; /* Space between messages */
  border-radius: 5px; /* Slightly rounded edges */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
</style>
