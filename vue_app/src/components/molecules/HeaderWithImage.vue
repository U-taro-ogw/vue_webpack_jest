<template>
  <div id="header-with-image">
    <HeaderLabel />
    <img src="static/img/cat01.jpg">
  </div>
</template>

<script>
import HeaderLabel from '../atoms/HeaderLabel'

export default {
  name: 'HeaderWithImage',
  components: {
    'HeaderLabel': HeaderLabel
  }
}
</script>
