<template>
  <div class="profile-page">
    <h1>Profile Page</h1>
    <img :src="profilePicture" alt="Profile Picture" />
    <p>{{ bio }}</p>
    <ul>
      <li>
        <a :href="socialLinks.facebook" target="_blank">Facebook <i class="fa fa-facebook-square"></i></a>
      </li>
      <li>
        <a :href="socialLinks.linkedin" target="_blank">LinkedIn</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ProfilePage",
  data() {
    return {
      profilePicture: require('@/assets/profilePicture.jpg'), // Use the imported image
      bio: 'I am a dedicated computer engineering student with a passion for software development and IoT technologies. I focus on creating innovative solutions that enhance efficiency and sustainability, particularly in agriculture. Committed to continuous learning, I enjoy exploring new tech trends and applying them to real-world challenges.',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100070161579434&mibextid=ZbWKwL',
        linkedin: 'https://linkedin.com/in/mark-daniel-quiray-197b9a28a/'
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
