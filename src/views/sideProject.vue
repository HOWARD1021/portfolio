<template>
  <div class="sideProject">

    <p class="crop"><a ><img src="../img/spring_fox.jpg" alt="css template" /></a></p> 

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
  $--vh: 9.37px;

  .crop{
    float:left;
    margin:.5em 10px .5em 0;
    overflow:hidden; /* this is important */
    position:relative; /* this is important too */
    border:1px solid #ccc;
    width:450px;
    height:390px;
	}
  .crop img{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
	}

  .img_container{

    position:relative;
    overflow:hidden;
    @apply flex ;
    height: auto;
    width: 400px;
    
    .img_shape{
      align-items: center;
      bottom: 0;
      display: flex;
      
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    img{
      position:absolute; 
      top:0; 
      bottom:0; 
      margin: auto;
      width:100%;
    }

  }

  .en_col_set{
    -webkit-tap-highlight-color: transparent;
    
    text-rendering: optimizeSpeed;
    font-family: Mondia;
    font-size: 20px;
    line-height: 1;
    pointer-events: all;
    visibility: inherit;
    font-kerning: auto;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    color: inherit;
    flex: auto 0 1;
    height: calc(var(--vh, 1vh)*60.3703);
    margin: 0 calc(var(--vh, 1vh)*2.3148);
    position: relative;
    width: calc(var(--vh, 1vh)*24.232);
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    will-change: width;
    cursor: pointer;
    margin-top: calc(var(--vh, 1vh)*3.24);
    transition: all .7s cubic-bezier(.16,1,.3,1);
  }

  .full_bg {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .en_col {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .en_col_shape {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
  }

  .en_col_set, .en_col_set * {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: width;
  }

  .en_col_shape img {
    height: 90%;
    width: auto;
  }


</style>