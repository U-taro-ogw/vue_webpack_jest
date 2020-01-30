<template>
  <ul id="ul">
    <LiItem v-for="item in listItem" :item="item" />
  </ul>
</template>

<script>
  import LiItem from '../atoms/LiItem'

  export default {
    name: 'Ul',
    components: {
      'LiItem': LiItem
    },
    props: {
      'listItem': {
        type: Array,
        default: []
      }
    }
  }
</script>
