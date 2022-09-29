<template>
  <h1>Testando</h1>
  <br>
  <br>
  <AppProducts />
  <br>
  <br>
  {{ $store.getters.total }}
  <br>
  <br>
  {{$store.state.user.first_name}} {{$store.state.user.last_name}}
  <br>
  <br>
  <button @click="updateUser()">Atualizar perfil</button>
</template>

<script>
import AppProducts from './products/AppProducts.vue'

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data() {
    return {

    }
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Bruno',
        last_name: 'Carvalho',
        email: 'bruno.fox_carvalho@hotmail.com'
      }
      this.$store.dispatch('storeUser', newUser).then(() => {
      console.log('terminou com sucesso')
      })
      console.log(this.$store.state.user)
    }
  }
}
</script>
