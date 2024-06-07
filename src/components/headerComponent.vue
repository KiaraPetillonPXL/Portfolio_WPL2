<template>
    <nav class="header">
      <div class="header-content">
        <img :src="logo" alt="logo" class="logo" />
        <nav class="nav">
          <ul class="nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </nav>
</template>
  
  <script>
import logo from '../assets/logoportfolio.png'

export default {
  name: 'Header',
  data() {
    return {
      logo: logo
    }
  }
}
</script>
  
  <style lang="scss" scoped>
  @import '../scss/_header.scss';
  
  
  </style>  