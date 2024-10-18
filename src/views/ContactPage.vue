<template>
    <div class="contact-page">
      <h1>Contact Page</h1>
      <form @submit.prevent="sendMessage">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" id="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea v-model="message" id="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      sendMessage() {
        alert(`Message sent by ${this.name}`);
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  