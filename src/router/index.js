import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the different pages
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import ShowcasePage from '../views/ShowcasePage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';

// Define your routes
const routes = [
  {
    path: '/',
    redirect: '/login' // Redirect root path to login page
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/portfolio/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/portfolio/showcase',
    name: 'ShowcasePage',
    component: ShowcasePage
  },
  {
    path: '/portfolio/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/portfolio/creative',
    name: 'CreativePage',
    component: CreativePage
  }
];

// Create a new Vue Router instance
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for clean URLs
  routes
});

// Export the router to use it in your Vue instance
export default router;
