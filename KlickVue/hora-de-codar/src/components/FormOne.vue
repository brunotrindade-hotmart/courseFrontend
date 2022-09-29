<template>
  <div>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name" />
      </div>
      <div>
        <input type="text" v-model="email" />
      </div>
      <div><SubmitOne /></div>
    </form>
  </div>
</template>

<script>
import SubmitOne from './SubmitOne.vue'

export default {
  name: 'FormOne',
  components: {
    SubmitOne,
  },
  methods: {
    enviarFormulario(e) {

      e.preventDefault();

      const name = this.name;
      const email = this.email;
      
      console.log('Enviar formulario')
      console.log(name, email)
    }
  },
  data() {
    return {
      name:'',
      email:''
    }
  }
}
</script>
