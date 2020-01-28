<template>
  <div id="home">
    <h1>Home</h1>
    <Header/>
  </div>
</template>

<script>
  import Header from '@/components/organisms/Header'

  export default {
    name: 'Home',
    components: {
      'Header': Header
    }
  }
</script>
