<template>
  <div>
    <button @click="primeiro(), segundo()">Ativar múltiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name:'MultiplosEventos',
  methods: {
    primeiro() {
      this.multiplos_eventos = 'Primeiro evento ativado!'
    },
    segundo() {
      setTimeout(() => this.multiplos_eventos = 'Segundo evento ativado!', 500)
    }
  },
  data() {
    return {
      multiplos_eventos: ''
    }
  }
}
</script>
