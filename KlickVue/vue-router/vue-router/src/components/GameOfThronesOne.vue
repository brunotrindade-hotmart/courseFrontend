<template>
  <div>
    <ul>
      <li v-for="(item) in users" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameOfThronesOne',
  data() {
    const users = [
      {
        name: 'Emma',
      },
      {
        name: 'Sophia',
      },
      {
        name: 'Isabella',
      }
    ]
    return {
      users
    }
  }
}
</script>