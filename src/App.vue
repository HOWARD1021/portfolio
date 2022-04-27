<template>
  <nav class=" navStyle ">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/lyingCat">Cat</router-link>
    <router-link to="/sideProject">Project</router-link>
    <router-link to="/flickityImg">Flickity</router-link>
	</nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: antiquewhite;
}

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
