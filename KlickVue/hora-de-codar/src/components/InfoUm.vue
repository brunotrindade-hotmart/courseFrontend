<template>
  <div>
    <p>{{email}}</p>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou procurando emprego no momento.</p>
    <p>Utilizo as seguintes tecnologias para back-end:</p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" :key="index">{{ technology }}</li>
    </ul>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="(technology) in frontend_technologies" :key="technology.id">{{ technology.language }}</li>
    </ul>
    <div>
      <button @click="showEmail">Mostrar e-mail</button>
    </div>
    <p v-show="mostrar_email">Meu email é: bruno.fox_carvalho@hotmail.com</p>
    <p class="teste">Para acessar meu portfólio basta clicar aqui: <a v-bind:href="meu_link" target="_blank">Meu link</a ></p>
  </div>
</template>

<script>
export default {
  name: 'InfoUm',
  props: {
    email: String
  },
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      meu_link: 'https://translate.google.com.br/?sl=en&tl=pt&text=pace&op=translate&hl=pt-BR',
      backend_technologies: ['JavaScript', 'PHP', 'Python'],
      frontend_technologies: [
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'Vue'}
      ]
    }
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email
    }
  }
}
</script>