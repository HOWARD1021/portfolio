<template>
  <div class=" FlickityImg">
    <div class="flickWrap">
      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">1</div>
        <div class="carousel-cell" >2</div>
        <div class="carousel-cell" >3</div>
        <div class="carousel-cell" >4</div>
        <div class="carousel-cell" >5</div>
      </flickity>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Flickity from 'vue-flickity';
export default {
  name: 'FlickityImg',
  components: {
    Flickity
  },
  data() {
    return{
      flickityOptions: {
        initialIndex: 3,
        draggable:true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: true,
        // any options from Flickity can be used
      }
    }
  }
}
</script>

<style lang="scss">
.FlickityImg{

  .flickWrap{
    margin-top: 50vh;

    .carousel-cell {
      width: 150px;
      height: 300px;
      margin-right: 80px;
      background: #8C8;
      border-radius: 5px;
      counter-increment: gallery-cell;
      
      :before {
        display: block;
        text-align: center;
        content: counter(gallery-cell);
        line-height: 200px;
        font-size: 80px;
        color: white;
      }
    }
  }

}

</style>
