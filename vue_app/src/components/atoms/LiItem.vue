<template>
  <li class="li-item">{{item.id}} : {{item.name}}</li>
</template>

<script>
  export default {
    name: 'LiItem',
    data() {
      return {
        // item: ""
      }
    },
    props: {
      'item': {
        type: Object,
        default: {}
      }
    }
  }
</script>
