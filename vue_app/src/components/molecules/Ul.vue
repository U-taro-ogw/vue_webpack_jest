<template>
  <div>
    <ul id="ul-1">
      <Li  v-for="(item, key, index) in items" :key="index" v-bind:li-item="item"/>
    </ul>
  </div>
</template>

<script>
import Li from '@/components/atoms/Li'

export default {
  name: 'Ul',
  components: {
    'Li': Li
  },
  data: () => {
    return {
      items: []
    }
  },
  mounted () {
  }
}
</script>
