<template>
 <div>
    <Home></Home>
 </div>
</template>

<script>
import Home from '../src/pages/home'
export default {
  name: 'App',
  components:{
    Home
  }
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    font-size: 1rem;
}
</style>
