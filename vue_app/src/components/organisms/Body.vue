<template>
  <div id="body">
    <Ul :listItem="listItem" />
  </div>
</template>

<script>
  import Ul from '../molecules/Ul'

  export default {
    name: 'Body',
    components: {
      'Ul': Ul
    },
    props:{
      'listItem': {
        type: Array,
        default: []
      }
    }
  }
</script>
