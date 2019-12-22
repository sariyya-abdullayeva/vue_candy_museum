<template>
  <div class="hello" v-bind:style="{ backgroundColor: color}">
    <b-container fluid>
      <b-row >
          <b-col  lg='6' md='0'>
            Museum of candy <br> 
            Museum of candy <br> 
            Museum of candy
          </b-col>
       
        <b-col lg='6' md='12' >
          <b-img fluid :src="require('../assets/mockaroon.jpg')" alt="macaroons" />
        </b-col>
      </b-row> 
    </b-container>
   </div>
</template>

<script>
// require('../assets/mockaroon.jpg')
// require('vue-template-compiler')
export default {
  name: 'HelloWorld',
  data: () => {
  return {
    color: '#ffda00',
    disp: none, 
  }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-top:62px; 
  font-family: 'Open Sans Condensed', sans-serif;

}

.container-fluid{
  padding-left: 0;
  padding-right:0;
}
/* for colums to not show  */
.display{
  display: none;
}
</style>
