<template>
  <nav class=" navStyle ">
    <router-link to="/">Home</router-link> 
    <router-link to="/flickityImg">Flckity</router-link>
    <router-link to="/lyingCat">Cat</router-link>
    <router-link to="/sideProject">Project</router-link>
	</nav>
  <router-view/>

</template>

<script>
export default {
    name: 'navBar',
}
</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #b97742;
    }
  }
}

.navStyle {
    @apply absolute text-center top-4 left-4 leading-4 flex flex-wrap text-faint_orange text-sm;
    font-family: 'Playfair Display';

    a{
        @apply  border-faint_orange px-3 py-3 font-bold tracking-widest uppercase;
        border: 1px solid #d1b790;

        :not(:last-child){
          border-right: 0;
        }
    }


}
</style>
