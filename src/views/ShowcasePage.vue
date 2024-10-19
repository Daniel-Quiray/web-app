<template>
  <div class="showcase-page">
    <h1>PORTFOLIO SHOWCASE</h1>
    <div class="project-cards">
      <transition-group name="fade" mode="out-in">
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="project-card fade-in" 
          @click="viewFullImage(project.image)">
          <img :src="project.image" alt="Project Image" class="project-image" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </transition-group>
    </div>
    <!-- Modal for displaying the full image -->
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <img :src="selectedImage" alt="Full Project Image" class="modal-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcasePage",
  data() {
    return {
      projects: [
        {
          title: 'Arduino Digital Input, Looping and Control Statements',
          description: 'This project demonstrates the use of digital input in Arduino, focusing on how sensors and buttons interact with the microcontroller. It explores looping structures to control tasks and implement control statements to make decisions based on sensor data.',
          image: require('@/assets/project1.jpg') // Replace with your project image path
        },
        {
          title: 'NodeMCU: DHT11 and Realtime Monitoring',
          description: 'This project utilizes a NodeMCU to interface with the DHT11 sensor for real-time temperature and humidity monitoring. It demonstrates how sensors and microcontrollers can be used for IoT-based applications like smart farming.',
          image: require('@/assets/project2.jpg') // Replace with your project image path
        }
      ],
      isModalOpen: false, // For the modal to display full image
      selectedImage: null, // Store the image that is clicked
    };
  },
  methods: {
    viewFullImage(image) {
      this.selectedImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = null;
    }
  }
};
</script>

<style scoped>
.showcase-page {
  text-align: center;
  padding: 20px;
  background-image: url('@/assets/showcasebg.jpg'); /* Replace with your background image path */
  background-size: cover; /* Ensures the background image covers the entire area */
  background-position: center;
  background-attachment: fixed; /* Keeps the background in place when scrolling */
  min-height: 100vh;
}

h1 {
  font-weight: bold; /* Makes the title bold */
  font-size: 3rem; /* Adjust the size of the title */
  color: #789DBC;
  margin-bottom: 50px;
  text-transform: uppercase; /* Makes the text uppercase */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adds a shadow effect for depth */
  transition: color 0.3s, transform 0.3s; /* Smooth transition for effects */
}

.project-cards {
  display: flex;
  flex-direction: column; /* Make cards display vertically */
  gap: 20px;
}

/* Fade transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Start invisible */
  transform: translateY(20px); /* Slide up effect */
}

/* Fade-in animation */
.fade-in {
  animation: fadeIn 2s ease; /* Apply the fadeIn animation */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.project-card {
  background: linear-gradient(135deg, #6A9AB0, #EAD8B1); /* Gradient color from blue to green */
  border-radius: 10px;
  padding: 20px;
  width: 100%; /* Full width */
  max-width: 500px; /* Limit the max width */
  margin: 0 auto; /* Center the cards */
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #091057; /* Ensure text is readable against the gradient */
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Fix: corrected rgba syntax */
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

h3 {
  color: #001F3F;
  margin: 10px 0;
}

p {
  color: #4A4947;
  font-size: 14px;
  margin-bottom: 15px;
}

/* Modal styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

.modal-image:hover {
  cursor: pointer;
}
</style>
