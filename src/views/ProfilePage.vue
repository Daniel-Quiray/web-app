<template>
  <div class="profile-page">
    <div class="profile-card">
      <img :src="profilePicture" alt="Profile Picture" class="profile-img" />
      <h1 class="profile-name">Mark Daniel Quiray</h1>
      <p class="bio">{{ bio }}</p>
      <ul class="social-links">
        <li>
          <a :href="socialLinks.facebook" target="_blank" class="social-btn">
            <i class="fa fa-facebook-square"></i> Facebook
          </a>
        </li>
        <li>
          <a :href="socialLinks.linkedin" target="_blank" class="social-btn">
            <i class="fa fa-linkedin-square"></i> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      profilePicture: require('@/assets/profilePicture.jpg'), // Replace with actual path
      bio: 'A dedicated computer engineer specializing in software development and IoT technologies. He is committed to innovation and efficiency in digital solutions. With a growing expertise in cybersecurity, Mark focuses on safeguarding systems and networks against modern threats, ensuring robust protection and resilience.',
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
  min-height: 100vh;
  background-image: url('@/assets/profilebg.jpg'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-card {
  background: linear-gradient(135deg, #C8A1E0, #E2BFD9, #F7EFE5); /* Gradient */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px #001F3F(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: fadeIn 1s ease-in-out;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #674188;
}

.profile-name {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.bio {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-links li {
  display: inline-block;
}

.social-btn {
  background-color: #387478;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-btn:hover {
  background-color: #0056b3;
}

.social-btn i {
  margin-right: 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
