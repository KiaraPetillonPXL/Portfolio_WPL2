<template>
  <div class="project-container">
    <div class="project-details">
      <h1>{{ project.title }}</h1>
      <p>{{ project.subtitle }}</p>
      <h3>Goal:</h3>
      <p>{{ project.goal }}</p>
      <h3>Year:</h3>
      <p>{{ project.year }}</p>
      <RouterLink to="/" class="link">
        <button :style="{ color: project.backgroundColor, background: project.color }" type="submit">
          <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 13C27 9.55219 25.5777 6.24558 23.0459 3.80761C20.5142 1.36964 17.0804 -3.57628e-07 13.5 -3.57628e-07C9.91958 -3.57628e-07 6.4858 1.36964 3.95406 3.80761C1.42232 6.24558 0 9.55219 0 13C0 16.4478 1.42232 19.7544 3.95406 22.1924C6.4858 24.6304 9.91958 26 13.5 26C17.0804 26 20.5142 24.6304 23.0459 22.1924C25.5777 19.7544 27 16.4478 27 13ZM11.4645 19.1395L6.19629 13.7008C6.01172 13.5078 5.90625 13.259 5.90625 13C5.90625 12.741 6.01172 12.4871 6.19629 12.2992L11.4645 6.86055C11.6859 6.63203 11.9971 6.5 12.324 6.5C12.9727 6.5 13.5 7.00781 13.5 7.63242V10.5625H18.5625C19.4959 10.5625 20.25 11.2887 20.25 12.1875V13.8125C20.25 14.7113 19.4959 15.4375 18.5625 15.4375H13.5L13.5 18.3676C13.5 18.9922 12.9727 19.5 12.324 19.5C11.9971 19.5 11.6859 19.368 11.4645 19.1395Z" fill="currentColor"/>
          </svg>
          Back
        </button>
      </RouterLink>
    </div>
    <embed :src="project.image" alt="Project Image" class="project-img" width="794px" height="1123px">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ProjectCard from '../components/projectcardComponent.vue';
import monimo from '../assets/Monimo.png';
import vanbeveren from '../assets/vanbeveren.png';
import about from '../assets/about.png';
import popsesie from '../assets/popsesie.pdf';
import taak2 from '../assets/reflectieseminaries.pdf';
import taak3 from '../assets/werkveld.pdf';
import taak4_1 from '../assets/dashboard.pdf';
import taak4_2 from '../assets/groepswerk.pdf';
import taak5 from '../assets/Zelfreflectie.pdf';
import crooze from '../assets/crooze.pdf';
import zelfreflectie from '../assets/zelfreflectie2.pdf';


const route = useRoute();
const id = parseInt(route.params.id);

const projects = [
  {
    id: 1,
    image: monimo,
    title: 'Monimo Software',
    subtitle: 'Eigen bedrijf in software ontwikkeling waar ik al het design en front-end development voor doe. ',
    goal: 'Veel bijleren',
    year: 2024,
  },
  {
    id: 2,
    image: vanbeveren,
    title: 'Van Beveren Reclame',
    subtitle: 'Een reclame foto gemaakt voor het bedrijf van beveren aluminium.',
    goal: 'de klant gelukkig maken',
    year: 2024,
  },
  {
    id: 3,
    image: popsesie,
    title: 'POP sessies',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 4,
    image: taak2,
    title: 'Werkveldverkenning - reflecties seminarie',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 5,
    image: taak3,
    title: 'Werkveldverkenning - analyse werkveld',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 6,
    image: taak4_1,
    title: 'conceptposter',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 7,
    image: taak4_2,
    title: 'conceptposter',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 8,
    image: taak5,
    title: 'zelfreflectie',
    subtitle: 'Een opdracht voor wpl 1.',
    goal: 'goede punten',
    year: 2023,
  },
  {
    id: 9,
    image: crooze,
    title: 'crooze',
    subtitle: 'Een opdracht voor wpl 2.',
    goal: 'goede punten',
    year: 2024,
  },
  {
    id: 10,
    image: zelfreflectie,
    title: 'zelfreflectie',
    subtitle: 'Een opdracht voor wpl 2.',
    goal: 'goede punten',
    year: 2024,
  },
];

const project = projects.find(p => p.id === id);
</script>

<style scoped>

.project-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  padding: 50px;
}

.project-details {
  width: 60%;
}


embed {
  width: 800px;
  max-height: 1000px;
  object-fit: contain;
}

button {
  font-size: 16px;
  font-weight: 600;
  display: block;
  border-radius: 20px;
  width: 150px;
  height: 35px;
  font-family: 'Arial, sans-serif';
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 2%;
}

svg {
  padding-right: 8px;
  width: 20px;
  height: 20px;
}

a {
  text-decoration: none;
}

h1, h3, p {
  display: block;
  padding: 10px;
}

h1 {
  font-family: 'Arial, sans-serif';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

h3 {
  font-family: 'Arial, sans-serif';
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;

}

p {
  font-family: 'Arial, sans-serif';
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;

}

</style>
