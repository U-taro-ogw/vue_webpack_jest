<template>
  <ul id="ul">
    <LiItem />
  </ul>
</template>

<script>
  import LiItem from '../atoms/LiItem'

  export default {
    name: 'Ul',
    components: {
      'LiItem': LiItem
    }
  }
</script>
