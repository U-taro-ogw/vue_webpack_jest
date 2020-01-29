<template>
  <div id="home">
    <Header />
    <Body />
  </div>
</template>

<script>
  import Header from '../organisms/Header'
  import Body from '../organisms/Body'

  export default {
    name: 'Home',
    components: {
      "Header": Header,
      "Body": Body
    }
  }
</script>
