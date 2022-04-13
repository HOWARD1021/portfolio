<template>
  <div class="sideProject">

  <div class="item-image">
    <div class="snowflake"><span></span></div>
    <img class="" src="../img/spring_fox.jpg"> 
  </div>

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
  width: 200px;
  overflow: hidden;
  text-align: center;

  @apply flex justify-center;

   img {
    max-height: 100%;
    margin: 0 0;
    top:0;
    left: 0;
    max-width: none;
    width: auto;
  }

}

</style>