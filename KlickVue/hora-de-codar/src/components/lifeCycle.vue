<template>
  <div> 
    <h1> Meu sobrenome é: {{nome}} </h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      nome: 'Carvalho'
    }
  }
}
</script>
