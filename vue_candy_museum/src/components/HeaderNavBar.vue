<template>
  <div class="headerNavBar">
    <div>
      <div>
      <b-navbar toggleable="lg" type="light" variant="light" >
        <b-navbar-brand href="#" class="navBarBrand">Candy</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown id ='Candy' text="candy" right>
              <b-dropdown-item href="#">Chocolate</b-dropdown-item>
              <b-dropdown-item href="#">Jelly</b-dropdown-item>
              <b-dropdown-item href="#">Macaroon</b-dropdown-item>
              <b-dropdown-item href="#">M&M</b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Sign in</b-dropdown-item>
              <b-dropdown-item href="#">Sign up</b-dropdown-item>
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

.headerNavBar{
    font-family: 'Emilys Candy', cursive;
}

.headerNavBar .navBarBrand{
    color:#ca0a7f;
    font-size: 1.5rem;
}
.headerNavBar #nav-collapse{
    font-size: 1.5rem;
}
/* .navbar-dark .navbar-nav .nav-link, .navbar-dark .navbar-nav .nav-link:hover {
    color: #ffc107;
}

.navbar-dark .navbar-nav .navbar-item, .navbar-dark .navbar-nav .navbar-item:hover {
    color: #ffc107;
} */

/* .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #ffc107;
    text-align: inherit;
    white-space: normal;
    background-color: transparent;
    border: 0;
} */
</style>