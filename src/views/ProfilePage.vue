<template>
  <!-- Profile Page Container -->
  <div class="profile-page">
    <!-- Profile Card -->
    <div class="profile-card">
      <!-- Display Profile Picture -->
      <img :src="profilePicture" alt="Profile Picture" class="profile-img" />
      <!-- Profile Name -->
      <h1 class="profile-name">Mark Daniel Quiray</h1>
      <!-- Bio Section -->
      <p class="bio">{{ bio }}</p>
      <!-- Social Links -->
      <ul class="social-links">
        <!-- Facebook Link -->
        <li>
          <a :href="socialLinks.facebook" target="_blank" class="social-btn">
            <i class="fa fa-facebook-square"></i> Facebook
          </a>
        </li>
        <!-- LinkedIn Link -->
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
      // Path to profile picture
      profilePicture: require('@/assets/profilePicture.jpg'), // Replace with actual path
      // Bio text
      bio: 'A dedicated computer engineer specializing in software development and IoT technologies. He is committed to innovation and efficiency in digital solutions. With a growing expertise in cybersecurity, Mark focuses on safeguarding systems and networks against modern threats, ensuring robust protection and resilience.',
      // Social media links
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100070161579434&mibextid=ZbWKwL',
        linkedin: 'https://linkedin.com/in/mark-daniel-quiray-197b9a28a/'
      }
    };
  }
};
</script>

<style scoped>
/* Style for the profile page background */
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

/* Style for the profile card container */
.profile-card {
  background: linear-gradient(135deg, #C8A1E0, #E2BFD9, #F7EFE5); /* Gradient background */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Soft shadow */
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: fadeIn 1s ease-in-out; /* Animation effect on load */
}

/* Style for the profile picture */
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #674188; /* Border color around the image */
}

/* Style for the profile name */
.profile-name {
  font-size: 24px;
  color: #333; /* Darker text color */
  margin-bottom: 10px;
}

/* Style for the bio section */
.bio {
  font-size: 16px;
  color: #555; /* Lighter text color */
  margin-bottom: 20px;
  line-height: 1.5; /* Line height for better readability */
}

/* Social links list styling */
.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px; /* Spacing between links */
}

/* Social link list item */
.social-links li {
  display: inline-block;
}

/* Social button styling */
.social-btn {
  background-color: #387478;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease; /* Transition effect on hover */
}

/* Hover effect for social buttons */
.social-btn:hover {
  background-color: #0056b3; /* Darker color on hover */
}

/* Icon styling for social buttons */
.social-btn i {
  margin-right: 5px;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Start from slightly below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
}
</style>
