<template>
  <div id="header">
    <p>This is Header</p>
    <Ul/>
  </div>
</template>

<script>
import Ul from '@/components/molecules/Ul'

export default {
  name: 'Header',
  components: {
    'Ul': Ul
  }
}
</script>
