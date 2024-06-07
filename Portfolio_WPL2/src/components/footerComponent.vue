<template>
    <footer class="footer">
      <div class="social-links">
        <a href="https://www.facebook.com/your-facebook-page" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="https://twitter.com/your-twitter-account" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="https://www.instagram.com/your-instagram-account" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      </div>
      <div class="copyright">
        &copy; {{ currentYear }}
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #7b8ce9;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
  }
  
  .social-links {
    margin-bottom: 10px;
    color: #ffffff;
    text-decoration: none;
  }
  
  .social-links a {
    margin: 0 10px;
  }
  </style>