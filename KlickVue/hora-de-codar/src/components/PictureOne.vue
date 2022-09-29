<template>
  <div>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudarImagem="trocarImagem" />
  </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue'

export default {
  name: 'PictureOne',
  components: {
    MudarImagem
  },
  data() {
    return {
      avatar:"./img/avatar.jpg",
      descricao: "Bruno Carvalho Trindade"
    }
  },
  methods: {
    trocarImagem() {
      this.avatar = "./img/avatar2.jpg"
    }
  }
}
</script>
