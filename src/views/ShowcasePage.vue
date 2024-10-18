<template>
    <div class="showcase-page">
      <h1>Portfolio Showcase</h1>
      <div class="project-cards">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShowcasePage",
    data() {
      return {
        projects: [
          { id: 1, title: 'Project 1', description: 'Description of project 1' },
          { id: 2, title: 'Project 2', description: 'Description of project 2' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .project-cards {
    display: flex;
    gap: 20px;
  }
  .project-card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  </style>
  