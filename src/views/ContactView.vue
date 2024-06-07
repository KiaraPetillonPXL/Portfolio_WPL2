<template>
    <div class="contact-form">
      <h2>Contact Formulier</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Naam:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Bericht:</label>
          <textarea id="message" rows="5" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Verzenden</button>
      </form>
      <p v-if="submitted">Bedankt voor uw bericht!</p>
    </div>
  </template>
  
  
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        submitted: false
      };
    },
    methods: {
      submitForm() {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            apikey: '8554cf07-2bbe-4cc4-9ee3-0efb128065b4',
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message,
          }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('E-mail verzonden');
            this.submitted = true;
            this.formData = {
              name: '',
              email: '',
              message: ''
            };
          } else {
            console.error('Er is een fout opgetreden bij het verzenden van de e-mail');
          }
        })
        .catch(error => {
          console.error('Er is een fout opgetreden bij het verzenden van de e-mail', error);
        });
      }
    }
  }
  </script>

<style scoped>
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    color: #ffffff;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  p {
    margin-top: 20px;
    font-weight: bold;
  }
  
@media (max-width: 600px) {
  .contact-form {
    padding: 10px;
  }

  button {
    padding: 10px 15px;
    font-size: 14px;
  }
}
</style>