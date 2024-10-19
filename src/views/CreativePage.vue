<template>
  <div class="creative-page">
    <h1>Creative Page</h1>

    <div class="section">
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

    <div class="section">
      <h2>Blog</h2>
      <div class="blog-post" v-for="(post, index) in blogPosts" :key="index">
        <h3>{{ post.title }}</h3>
        <p>{{ post.summary }}</p>
        <button @click="toggleContent(index)">
          {{ post.showContent ? "Show Less" : "Read More" }}
        </button>
        <div v-if="post.showContent" class="content-box">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Resume</h2>
      <p>You can download my resume <a href="path/to/your/resume.pdf" target="_blank">here</a>.</p>
    </div>

    <div class="section">
      <h2>Testimonials</h2>
      <blockquote>
        <p>"Mark is an exceptional student with great skills!" - Professor Smith</p>
      </blockquote>
      <blockquote>
        <p>"His creativity and problem-solving skills are outstanding!" - Classmate Jane</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreativePage",
  data() {
    return {
      blogPosts: [
        {
          title: "My First Blog Post",
          summary: "This is a brief summary of my first blog post. I’ll discuss my journey in learning programming and how it has changed my life.",
          content: "In my first blog post, I want to share my journey in learning programming. It all started with curiosity about how software works. I began exploring different programming languages, starting with Python. Over the years, I’ve faced many challenges, but each one has helped me grow and develop my skills. Learning programming has opened up a world of possibilities for me, and I am excited to share more about it!",
          showContent: false,
        },
        {
          title: "Another Interesting Topic",
          summary: "This is a brief summary of another interesting topic I want to share. Stay tuned for more!",
          content: "In this post, I will discuss the importance of continuous learning in technology. The tech industry is constantly evolving, and it’s essential to stay updated with the latest trends and technologies. I will share some resources and tips that have helped me stay ahead in my learning journey.",
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
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.9); /* Light background with opacity */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.7s ease-in-out;
}

h1 {
  color: #2c3e50;
}

h2 {
  color: #34495e;
}

button {
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #1c5982;
}

.content-box {
  margin-top: 10px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a {
  color: #2980b9;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
