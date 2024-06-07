<template>
  <div class="about-me">
    <h1>About Me</h1>
    <div class="profile-info">
      <img :src="about" alt="Your Profile Picture">
      <div class="bio">
        <h2>Hallo! Ik ben Kiara!</h2>
        <p>
          Ik ben 20 jaar, kom uit Leopoldsburg en ben een enthousiaste student digitaal ontwerp. Met een sterke basis in ontwerpprincipes en nieuwe technologieën, ben ik vastbesloten om mijn creatieve vaardigheden te ontwikkelen en innovatieve, gebruiksvriendelijke digitale ervaringen te creëren. Naast mijn studie geniet ik van lezen en het studentenleven. Ik kijk uit naar de mogelijkheden die de toekomst biedt in de wereld van digitaal ontwerp. Ook ben ik oprichter van monimo software, waar ik optreed als creative director.
        </p>
      </div>
    </div>
    <div class="contact-info">
      <h2>Contactinformatie</h2>
      <ul>
        <li>Email: kiara.petillon@monimo-software.com</li>
        <li>Telefoon: 0494589494</li>
        <li>Locatie: Leopoldsburg, België</li>
      </ul>
    </div>
  </div>
</template>

<script>
import about from '../assets/kiara.png';
export default {
  name: 'about',
  data() {
    return {
      about: about,
    };
  },
}
</script>

<style scoped>
.about-me {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  color: #ffffff;
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.profile-info img {
  width: 200px;
  height: 200px;
  margin-right: 40px;
}

.bio {
  flex-grow: 1;
}

.contact-info {
  margin-top: 40px;
}

.contact-info h2 {
  margin-bottom: 20px;
}

.contact-info ul {
  list-style-type: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
}
</style>
