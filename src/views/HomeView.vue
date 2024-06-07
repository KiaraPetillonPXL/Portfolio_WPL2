<template>
  <img :src="about" alt="about">
  <div>
    <div class="grid-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/projectcardComponent.vue';
import monimo from '../assets/Monimo.png';
import vanbeveren from '../assets/vanbeveren.png';
import about from '../assets/about.png';
import popsesie from '../assets/popsessies.png';
import taak2 from '../assets/taak2.png';
import taak3 from '../assets/taak3.png';
import taak4_1 from '../assets/taak4_1.png';
import taak4_2 from '../assets/taak4_2.png';
import taak5 from '../assets/taak5.png';
import crooze from '../assets/Youtube_Banner_Crooze.png';
import zelfreflectie from '../assets/zelfreflectie.png';
export default {
  name: 'Home',
  components: {
    ProjectCard,
  },
  data() {
    return {
      about: about,
      projects: [
        { 
          id: 1, 
          title: 'Monimo Software', 
          doel: 'persoonlijk',
          year: 2024, 
          image: monimo 
        },
        { 
          id: 2, 
          title: 'vanbeveren reclame', 
          doel: 'persoonlijk',
          year: 2024, 
          image: vanbeveren
        },
        {
          id: 3,
          title: 'POP sessies',
          doel: 'WPL1',
          year: 2023,
          image: popsesie
        },
        {
          id: 4,
          title: 'Werkveldverkening - reflecties seminarie',
          doel: 'WPL1',
          year: 2023,
          image: taak2
        },
        {
          id: 5,
          title: 'werkveldverkenning - analyse werkveld',
          doel: 'WPL1',
          year: 2023,
          image: taak3
        },
        {
          id: 6,
          title: 'conceptposter',
          doel: 'WPL1',
          year: 2023,
          image: taak4_1
        },
        {
          id: 7,
          title: 'groepswerk - site hearted',
          doel: 'WPL1',
          year: 2023,
          image: taak4_2
        },
        {
          id: 8,
          title: 'zelfreflectie',
          doel: 'WPL1',
          year: 2023,
          image: taak5
        },
        {
          id: 9,
          title: 'Crooze',
          doel: 'WPL2',
          year: 2024,
          image: crooze
        },
        {
          id: 10,
          title: 'Zelfreflectie',
          doel: 'WPL2',
          year: 2024,
          image: zelfreflectie
        },
      ]
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  gap: 20px;
  padding: 20px;
}

img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

@media (max-width: 600px) {
  img{
    padding-top: 20px;
  }
  .grid-container {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }
}
</style>