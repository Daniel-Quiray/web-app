<template>
  <div class="showcase-page">
    <!-- Page Title -->
    <h1>PORTFOLIO SHOWCASE</h1>
    
    <!-- Project Cards Container -->
    <div class="project-cards">
      <transition-group name="fade" mode="out-in">
        <!-- Loop through each project and create a card -->
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="project-card fade-in" 
          @click="viewFullImage(project.image)">
          <!-- Project Image -->
          <img :src="project.image" alt="Project Image" class="project-image" />
          <!-- Project Title -->
          <h3>{{ project.title }}</h3>
          <!-- Project Description -->
          <p>{{ project.description }}</p>
        </div>
      </transition-group>
    </div>

    <!-- Modal to display full image on card click -->
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <!-- Full-sized project image -->
      <img :src="selectedImage" alt="Full Project Image" class="modal-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcasePage",
  
  // Define data properties
  data() {
    return {
      // Array of projects to display in cards
      projects: [
        {
          title: 'Arduino Digital Input, Looping and Control Statements',
          description: 'This project demonstrates the use of digital input in Arduino, focusing on how sensors and buttons interact with the microcontroller. It explores looping structures to control tasks and implement control statements to make decisions based on sensor data.',
          image: require('@/assets/project1.jpg') // Replace with the actual image path
        },
        {
          title: 'NodeMCU: DHT11 and Realtime Monitoring',
          description: 'This project utilizes a NodeMCU to interface with the DHT11 sensor for real-time temperature and humidity monitoring. It demonstrates how sensors and microcontrollers can be used for IoT-based applications like smart farming.',
          image: require('@/assets/project2.jpg') // Replace with the actual image path
        }
      ],
      
      // For controlling the modal (full-image view)
      isModalOpen: false,
      selectedImage: null, // Stores the image to be displayed in the modal
    };
  },
  
  // Methods for handling user interactions
  methods: {
    // Open the modal to view the full image
    viewFullImage(image) {
      this.selectedImage = image;
      this.isModalOpen = true;
    },
    
    // Close the modal when clicked outside
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = null;
    }
  }
};
</script>

<style scoped>
/* Styles for the overall showcase page */
.showcase-page {
  text-align: center;
  padding: 20px;
  background-image: url('@/assets/showcasebg.jpg'); /* Background image for the page */
  background-size: cover; /* Ensures the background covers the full page */
  background-position: center;
  background-attachment: fixed; /* Background stays in place when scrolling */
  min-height: 100vh; /* Full height page */
}

/* Styles for the title */
h1 {
  font-weight: bold;
  font-size: 3rem; /* Large title size */
  color: #789DBC; /* Light blue color */
  margin-bottom: 50px;
  text-transform: uppercase; /* Capitalize the title */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adds shadow for a 3D effect */
  transition: color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
}

/* Container for project cards */
.project-cards {
  display: flex;
  flex-direction: column; /* Display cards vertically */
  gap: 20px; /* Space between the cards */
}

/* Fade transition for entering and leaving elements */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* Fade effect */
  transform: translateY(20px); /* Slide-up effect */
}

/* Fade-in animation for cards */
.fade-in {
  animation: fadeIn 2s ease; /* 2-second fade-in animation */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Styles for individual project cards */
.project-card {
  background: linear-gradient(135deg, #6A9AB0, #EAD8B1); /* Gradient background */
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px; /* Restrict maximum width */
  margin: 0 auto; /* Center the card */
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth hover effect */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  color: #091057; /* Text color */
}

/* Hover effect for cards */
.project-card:hover {
  transform: translateY(-8px); /* Move card up */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Increase shadow */
}

/* Styles for project images inside cards */
.project-image {
  width: 100%; /* Full width image */
  height: 200px; /* Fixed height */
  object-fit: cover; /* Crop the image to fit */
  border-radius: 10px; /* Rounded corners */
}

/* Styles for project title */
h3 {
  color: #001F3F; /* Dark blue title color */
  margin: 10px 0;
}

/* Styles for project description */
p {
  color: #4A4947; /* Gray color for description */
  font-size: 14px;
  margin-bottom: 15px;
}

/* Modal styling for displaying the full image */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Full-size image in the modal */
.modal-image {
  max-width: 90%; /* Limit width */
  max-height: 90%; /* Limit height */
  border-radius: 10px;
}

/* Hover effect for modal image */
.modal-image:hover {
  cursor: pointer; /* Pointer cursor when hovering */
}
</style>
