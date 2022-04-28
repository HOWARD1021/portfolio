<template>

      <Navbar/>

    <div class=" header">
    <h1><span>the</span>Aviator</h1>
    <h2>fly it to the end</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from './Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

  .header {
    @apply absolute top-32 left-0 text-center w-full;

    h1 {
      font-family: 'Playfair Display';
      font-size: 5em;
      @apply leading-4 m-0 text-faint_orange tracking-normal;
      letter-spacing: -0.025em;

      span {
        font-style: italic;
        @apply text-sm block whitespace-nowrap -ml-16 mb-1;
        letter-spacing: 0px;
      }
    }

    h2 {
      font-size: 0.585em;
      @apply mx-1 my-0 mt-8 uppercase leading-4 whitespace-nowrap;
      color: #d6483b;
      letter-spacing: 0.8em;
    }
    
  }

</style>
