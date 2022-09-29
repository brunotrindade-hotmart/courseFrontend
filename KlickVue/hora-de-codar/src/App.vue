<template>
<HeaderOne :esta_logado="true"/>
  <PrimeiroComponente />
  <LifeCycle />
  <PessoaUm />
  <FormOne />
  <PictureOne />
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/lifeCycle.vue'
  import PessoaUm from './components/PessoaUm.vue'
  import HeaderOne from './components/Header.vue'
  import FormOne from './components/FormOne.vue'
  import PictureOne from './components/PictureOne.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      PessoaUm,
      HeaderOne,
      FormOne,
      PictureOne
    }
  }
</script>

<style>
  body {
    background-color: #333;
    color: #fff
  }

  a {
    color: red
  }

  .teste {
    background-color: #000;
  }
</style>