<template>
  <div class="headerNavBar">
    <div>
      <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Candy</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Candy Type" right>
              <b-dropdown-item href="#">Chocolate</b-dropdown-item>
              <b-dropdown-item href="#">Jelly</b-dropdown-item>
              <b-dropdown-item href="#">Macaroon</b-dropdown-item>
              <b-dropdown-item href="#">M&M</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </div>
    </div>
  
  
  </div>
</template>

<script>
export default {
  name: 'HeaderNavBar',
  data: () => {
  return {
  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>