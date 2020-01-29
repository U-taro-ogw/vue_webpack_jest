<template>
  <div id="header">
    <HeaderWithImage />
  </div>
</template>

<script>
  import HeaderWithImage from '../molecules/HeaderWithImage'

  export default {
    name: 'Header',
    components: {
      'HeaderWithImage': HeaderWithImage
    }
  }
</script>
