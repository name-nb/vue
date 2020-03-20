<template>
 <div>
     <Tops></Tops>
    <Conents></Conents>
    <Tabbar></Tabbar>
 </div>
</template>

<script>
import Tops from '../components/tops'
import Conents from '../components/conents'
import Tabbar from '../components/tabbar'
export default {
  name: 'home',
  components:{
    Tops,Conents,Tabbar
  }
}
</script>

<style>

</style>