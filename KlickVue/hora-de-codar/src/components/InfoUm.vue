<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou procurando emprego no momento.</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>Python</li>
    </ul>
    <p v-show="mostrar_email">Meu email é: bruno.fox_carvalho@hotmail.com</p>
    <p>Para acessar meu portfólio basta clicar aqui: <a v-bind:href="meu_link" target="_blank">Meu link</a ></p>
  </div>
</template>

<script>
export default {
  name: 'InfoUm',
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      meu_link: 'https://translate.google.com.br/?sl=en&tl=pt&text=pace&op=translate&hl=pt-BR'
    }
  }
}
</script>