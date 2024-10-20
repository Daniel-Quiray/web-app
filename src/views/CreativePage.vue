<template>
  <div class="creative-page">
    <h1>Creative Page</h1>

    <!-- Hobbies Section -->
    <div class="section hobbies">
      <h2>My Hobbies</h2>
      <p>Here are some of my favorite hobbies:</p>
      <ul>
        <li>Reading</li>
        <li>Coding</li>
        <li>Playing video games</li>
        <li>Basketball</li>
        <li>Playing musical instruments</li>
        <li>Traveling</li>
      </ul>
    </div>

    <!-- Blog Section -->
    <div class="section blog">
      <h2>Blog</h2>
      <div class="blog-post" v-for="(post, index) in blogPosts" :key="index">
        <h3>{{ post.title }}</h3>
        <p>{{ post.summary }}</p>
        <button @click="toggleContent(index)">
          {{ post.showContent ? "Show Less" : "Read More" }}
        </button>
        <transition name="slide-fade">
          <div v-if="post.showContent" class="content-box" @click.self="post.showContent = false">
            <div class="content-modal">
              <h4 class="modal-title">{{ post.modalTitle }}</h4> <!-- Title inside modal -->
              <p class="content-text">{{ post.content }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Resume Section -->
    <div class="section resume">
      <h2>My Resume</h2>
      <button @click="showResume = true" class="resume-btn">View Resume</button>
    </div>

    <!-- Resume Modal -->
    <transition name="slide-fade">
      <div v-if="showResume" class="resume-modal" @click.self="showResume = false">
        <div class="resume-content">
          <h3>Mark Daniel Quiray</h3>
          <div class="resume-details">
            <p><strong>Education:</strong> <span>B.S. in Computer Engineering, Technological Institute of the Philippines (Manila)</span></p>
            <p><strong>Skills:</strong> <span>Programming (C++, Java, Python), IoT, Firebase, Vue.js, Arduino</span></p>
            <p><strong>Experience:</strong> <span>Intern at EFB Geostrukt, AutoCAD operator </span></p>
            <p><strong>Certifications:</strong> <span>Certified Ethical Hacker (CEH), IoT Security, Certified Safety</span></p>
            <p><strong>Projects:</strong> <span>BioSecure - IoT Credential Protection for Biogas Systems</span></p>
          </div>
          <button @click="showResume = false" class="close-btn">Close</button>
        </div>
      </div>
    </transition>

    <!-- Testimonials Section -->
    <div class="section testimonials">
      <h2>Testimonials</h2>
      <blockquote>
        <p>"Mark is an exceptional student with a rare blend of creativity and technical skills. His projects demonstrate a deep understanding of complex concepts, and his dedication to learning is truly inspiring!" - Dr. Rufo Marasigan</p>
      </blockquote>
      <blockquote>
        <p>"Working with Mark on various projects has been a fantastic experience. He is a great team player, always willing to help others and share his knowledge. His passion for technology shines through in everything he does!" - Bestfriend Vonn Garcia</p>
      </blockquote>
      <blockquote>
        <p>"Mark has a remarkable ability to tackle challenging problems with innovative solutions. His enthusiasm for coding and his commitment to continuous improvement set him apart as a future leader in the tech industry!" - Classmate Hans Lumasang</p>
      </blockquote>
      <blockquote>
        <p>"Mark is not just a brilliant coder but also a fantastic friend! His enthusiasm for technology is contagious, and he always finds a way to make even the toughest challenges fun. Whether we’re working on projects together or just hanging out, his positive energy and creativity never fail to impress me. I can’t wait to see all the amazing things he’ll accomplish in the tech world!" - Friend shawn chua</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreativePage",
  data() {
    return {
      showResume: false,
      blogPosts: [
        {
          title: "My First Blog Post",
          summary: "Join me as I recount my coding journey, from the first frustrating attempts to create a simple \"Hello, World!\" program to building exciting projects that combine my love for technology and creativity. Spoiler alert: there may be some hilarious coding fails along the way!",
          content: "When I first dipped my toes into the vast ocean of coding, I felt like a toddler learning to walk wobbly and unsure! My first encounter was with Python, a friendly snake of a language that promised simplicity. I remember the thrill of my very first program: “Hello, World!” I hit enter, and there it was a glowing message on the screen! But oh, the struggles were real. I made every mistake in the book, from misplaced commas to mind boggling syntax errors that left me staring blankly at my code. It was like speaking a foreign language where I didn’t know the words! As I progressed, I discovered the magic of creating games. The first game I ever built was a simple guessing game, and I felt like a wizard casting spells. With every new project, my confidence grew, and I found joy in problem-solving and debugging yes, even debugging! The best part? Connecting with other budding coders online. We shared our triumphs and tribulations, and I learned that everyone had a horror story about a late night coding session gone wrong. Today, I’m excited to dive into more complex projects, from web apps to IoT devices. Stay tuned as I continue to explore this incredible world of coding, armed with passion and a sense of humor!",
          modalTitle: "Adventures in Coding: My Journey from Zero to Hero!",
          showContent: false,
        },
        {
          title: "Another Interesting Topic",
          summary: "Discover how technology can coexist with nature to create sustainable solutions. From smart farming techniques to innovative ways to reduce waste, learn how we can harness technology to protect our planet while making life easier and more enjoyable.",
          content: "Have you ever wondered how technology and nature can dance together in perfect harmony? Imagine a world where smart sensors help farmers monitor soil moisture, ensuring crops receive just the right amount of water while reducing waste. Sounds like magic, right? Welcome to the age of sustainable tech! I recently stumbled upon the fascinating realm of smart farming, where drones survey fields, and IoT devices keep track of weather conditions. Farmers can now make data-driven decisions that lead to healthier crops and happier earth. And the best part? These innovations are helping to combat climate change by optimizing resources! But it doesn’t stop there! Let’s talk about recycling apps. These nifty tools guide us on how to sort our waste properly. You simply scan the barcode of a product, and voilà! The app tells you if it’s recyclable or not. It’s like having a mini eco-expert in your pocket! I also learned about bioplastics, made from natural materials that break down much faster than traditional plastics. Companies are working hard to replace harmful materials with eco-friendly alternatives, and I couldn’t be more excited! As I explore these innovations, I’m inspired to contribute to a greener future. Whether it’s using less plastic or supporting sustainable brands, every small step counts! Together, we can build a future where technology helps preserve the beauty of our planet.",
          modalTitle: "Tech and Nature: The Perfect Harmony!",
          showContent: false,
        },
      ],
    };
  },
  methods: {
    toggleContent(index) {
      this.blogPosts[index].showContent = !this.blogPosts[index].showContent;
    },
  },
};
</script>

<style scoped>
.creative-page {
  padding: 20px;
  background-image: url('@/assets/creativebg.jpg');
  background-size: cover;
  background-position: center;
  animation: fadeIn 1s ease-in-out;
  color: #f1f1f1;
  font-family: 'Poppins', sans-serif;
}

h1 {
  color: #E68369;
  font-size: 70px;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

h2 {
  color: #ECB176; /* Changed color for section headers */
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  background: rgba(50, 50, 50, 0.7);
  border: 2px solid #E68369; /* Decorative border color */
  transition: transform 0.3s ease;
}

.section:hover {
  transform: scale(1.02);
}

.blog-post {
  border: 1px solid #ECB176; /* Blog post border */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px; /* Space between blog posts */
}

blockquote {
  border-left: 4px solid #E68369; /* Decorative border for testimonials */
  padding-left: 10px; /* Space between border and text */
  margin: 10px 0;
  font-style: italic;
}

button {
  background-color: #7D8ABC;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #304463;
  transform: scale(1.05); /* Slight scale on hover */
}
.blog-title {
  color: #ff6f61; /* Change this to your desired color */
}

.testimonial-content {
  color: #f39c12; /* Change this to your desired color for testimonials */
}


.content-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.content-modal {
  background-color: #bdc3c7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: popUp 0.6s ease-out;
}

.modal-title {
  font-size: 20px; 
  font-weight: bold; 
  text-align: center; 
  margin-bottom: 10px; 
  color: #028391;
}

.content-text {
  font-weight: bold;
  color: #2F3645; 
}

.resume-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.resume-content {
  background-color: #2c3e50;
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: popUp 0.6s ease-out;
  color: #F1F1F1;
}

.resume-content h3 {
  margin-bottom: 15px;
  text-align: center;
  color: #FFFAE6; /* Matching color for title */
}

.close-btn {
  background-color: #E74C3C; /* Red for close button */
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.hobbies {
  border-left: 4px solid #D10363; /* Decorative border for testimonials */
  padding-left: 20px;
  margin: 20px 0;
}
.blog {
  border-left: 4px solid #D10363; /* Decorative border for testimonials */
  padding-left: 20px;
  margin: 20px 0;
}
.resume {
  border-left: 4px solid #D10363; /* Decorative border for testimonials */
  padding-left: 20px;
  margin: 20px 0;
}
.testimonials {
  border-left: 4px solid #D10363; /* Decorative border for testimonials */
  padding-left: 20px;
  margin: 20px 0;
}

blockquote {
  font-style: italic;
  margin: 10px 0;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popUp {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
