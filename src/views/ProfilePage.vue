<template>
    <div class="profile-page">
      <h1>Profile Page</h1>
      <img :src="profilePicture" alt="Profile Picture" />
      <p>{{ bio }}</p>
      <ul>
        <li><a :href="socialLinks.twitter" target="_blank">Twitter</a></li>
        <li><a :href="socialLinks.linkedin" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
    data() {
      return {
        profilePicture: '/path/to/profilePicture.jpg',
        bio: 'This is my bio, where I introduce myself and share my journey as a developer.',
        socialLinks: {
          twitter: 'https://twitter.com/yourprofile',
          linkedin: 'https://linkedin.com/in/yourprofile'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .profile-page {
    text-align: center;
  }
  </style>
  