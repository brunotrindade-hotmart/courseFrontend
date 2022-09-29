<template>
  <div>
    <h1> Olá Vue! </h1>
    <p>Meu nome é {{nome}} e minha profissão é: {{profissao}}</p>
    <MultiplosEventos />
    <ReutilizacaoOne />
  </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import ReutilizacaoOne from './Reutilizacao.vue'

export default {
  name:'PrimeiroComponente',
  components: {
    MultiplosEventos,
    ReutilizacaoOne
  },
  data() {
    return {
      nome: 'Bruno',
      profissao: 'Programador'
    }
  },
  created() {
    this.nome = 'Brunao'
  },
  mounted() {
    this.nome = 'Brunocarv'
  }
}
</script>
