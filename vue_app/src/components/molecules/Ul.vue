<template>
  <div>
    <ul id="ul-1">
      <Li  v-for="item in items" v-bind:li-item="item"/>
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
      axios
        .get('http://localhost:3001/isekai')
        .then(response => (this.items = response.kono_suba.characters))
    }
  }
</script>
