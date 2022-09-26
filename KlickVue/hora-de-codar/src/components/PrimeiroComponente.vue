<template>
  <div>
    <h1> Olá Vue! </h1>
    <p>Meu nome é {{nome}} e minha profissão é: {{profissao}}</p>
  </div>
</template>

<script>
export default {
  name:'PrimeiroComponente',
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
