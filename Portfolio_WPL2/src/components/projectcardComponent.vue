<template>
    <div class="project-card">
      <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }">
        <div class="image-container">
          <img :src="project.image" alt="project.title" />
          <div class="overlay">
            <h2>{{ project.doel }}</h2>
            <h2>{{ project.title }}</h2>
            <p>{{ project.year }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .image-container {
    position: relative;
    width: 100%;
  }
  
  .project-card img {
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease;
  }
  
  .project-card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover img {
    opacity: 0.3;
  }
  
  .project-card:hover .overlay {
    opacity: 1;
  }
  </style>
  