<template>
  <PrimeiroComponente />
  <LifeCycle />
  <PessoaUm />
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/lifeCycle.vue'
  import PessoaUm from './components/PessoaUm.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      PessoaUm,
    }
  }
</script>
