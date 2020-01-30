<template>
  <div id="home">
    <Header />
    <input @click="getAxios" type="button" value="fetch">
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
    methods: {
      getAxios() {
        return axios.get('http://localhost:3001/isekai').then((res) => {
          this.listItems = res.data.kono_suba.characters
        })
      }
    }
  }
</script>
