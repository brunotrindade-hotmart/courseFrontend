<template>
  <div>
    <h1>Test Vue-router</h1>
    <p>Série: {{serie}}</p>
    <select v-model="serie" @change="changeSerie()">
      <option v-for="(option) in options" :key="option.name">{{option.name}}</option>
    </select>
    {{name}}
    <input v-model="name" @input="changeInput()" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    changeSerie() {
      this.$store.dispatch('changeSerie', this.serie)
      this.$router.push(`/${this.serie}`)
    },
    changeInput() {
      console.log(this.name)
    }
  },
  data() {
    const options = [
      {
        name: 'Transformers'
      },
      {
        name: 'GameOfThrones'
      }
    ];
    const serie = ''

    return {
      options,
      serie,
      name: ''
    }
  }
}
</script>
