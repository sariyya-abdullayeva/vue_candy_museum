<template>
  <div class="hello" v-bind:style="{ backgroundColor: color}">
    <div>
        <b-navbar id="mainNavBar" type="dark" variant="dark">
          <b-nav-item href="#">Cand</b-nav-item>
        </b-navbar>
    </div>

    <p>Here is hello</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
  return {
    color: '#ffda00'
  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
