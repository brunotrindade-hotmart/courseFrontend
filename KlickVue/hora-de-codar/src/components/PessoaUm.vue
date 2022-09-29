<template>
  <div>
    <h2>
      Esta é a descrição da pessoa: {{nome}}
    </h2>
    <InfoUm :email="email"/>
  </div>
</template>

<script>
  import InfoUm from './InfoUm.vue'

export default {
  name: 'PessoaUm',
  components: {
    InfoUm
  },
  data() {
    return {
      nome: 'Bruno',
      email: "bruno.fox2_carvalho@hotmail.com"
    }
  }
} 
</script>
