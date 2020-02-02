<template>
  <div id="home">
    <Header />
<!--    <input @click="fetchApi" type="button" value="fetch">-->
    <Body :listItem="listItems" />
  </div>
</template>

<script>
  import axios from 'axios'

  import Header from '../organisms/Header'
  import Body from '../organisms/Body'

  export default {
    name: 'Home',
    components: {
      "Header": Header,
      "Body": Body
    },
    data(){
      return {
        listItems: []
      }
    },
    created: function () {
      this.fetchApi()
    },
    // mounted() {
    //   this.fetchApi()
    // },
    methods: {
      fetchApi() {
        axios.get('http://localhost:3001/isekai').then((res) => {
          this.listItems = res.data.kono_suba.characters
        })
      }
    }

  }
</script>
