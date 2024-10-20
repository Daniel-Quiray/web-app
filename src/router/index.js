// Import necessary functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the different pages
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import ShowcasePage from '../views/ShowcasePage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';

// Define your routes for the application
const routes = [
  {
    path: '/', // Root path
    redirect: '/login' // Redirect root path to the login page
  },
  {
    path: '/login', // Login page path
    name: 'LoginPage', // Name of the route
    component: LoginPage // Component to render for this route
  },
  {
    path: '/portfolio/profile', // Profile page path
    name: 'ProfilePage', // Name of the route
    component: ProfilePage // Component to render for this route
  },
  {
    path: '/portfolio/showcase', // Showcase page path
    name: 'ShowcasePage', // Name of the route
    component: ShowcasePage // Component to render for this route
  },
  {
    path: '/portfolio/contact', // Contact page path
    name: 'ContactPage', // Name of the route
    component: ContactPage // Component to render for this route
  },
  {
    path: '/portfolio/creative', // Creative page path
    name: 'CreativePage', // Name of the route
    component: CreativePage // Component to render for this route
  }
];

// Create a new Vue Router instance with history mode
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for clean URLs
  routes // Assign the defined routes to the router
});

// Export the router to use it in your Vue instance
export default router;
