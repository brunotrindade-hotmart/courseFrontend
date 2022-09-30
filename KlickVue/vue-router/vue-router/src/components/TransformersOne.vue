<template>
  <div>
    <ul>
      <li v-for="(item) in users" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TransformersOne',
  data() {
    const users = [
      {
        name: 'Optimus Prime',
      },
      {
        name: 'Bumble Bee',
      },
      {
        name: 'Megatron',
      }
    ]
    return {
      users
    }
  }
}
</script>