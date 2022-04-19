<template>
  <div class="sideProject">

  <transition name="scroll">
    <div class="item-image">
      
      <img class="" src="../img/spring_fox.jpg"> 
    </div>
  </transition>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SideProject',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style lang="scss">
  :root {
    --vh: 9.37px;
  }

.item-image{
  border: 5px solid #d7d7d7;

  margin: 0 auto;
  height: 400px;
  width: 300px;
  overflow: hidden;
  text-align: center;
  transition: width 1s ease-out;

  @apply flex justify-center;

  img {
    max-height: 100%;
    margin: 0 0;

    max-width: none;
    width: auto;

  }
  
}

  .item-image:hover {
    width: 400px;
    cursor: pointer;
  }

/*
.item-image:hover {
  width: 400px;
  cursor: pointer;
}
*/

</style>