// Import the 'createApp' function from Vue to initialize the application
import { createApp } from 'vue';
// Import the root component 'App.vue' which serves as the main component of the application
import App from './App.vue';
// Import the router for navigation between pages
import router from './router';

// Create a new Vue app instance using the 'App.vue' component as the root component
const app = createApp(App);

// Tell the app to use the router for handling page navigation
app.use(router);

// Mount the app to the DOM element with the id 'app', starting the application
app.mount('#app');
