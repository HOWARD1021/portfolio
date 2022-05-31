<template>
  <div class="title">
    <transition name="slide-fade" mode="out-in">
      <div  :key="project_name"> {{project_name}} </div>
    </transition>

  </div>

</template>

<script>
export default {
  name: 'projectName',
  data(){
    return{
      project_name_list: ['PROJECT1', 'PROJECT2', 'PROJECT3','PROJECT4','PROJECT5', 'PROJECT6'],
      project_name:  'PROJECT3'
    };
  },
  props: {
    ind: {
      type: Number,
      default: 3,
      required: true
    }
  },
  watch:{
    /*ind: (newVal, oldVal)=>{
      console.log(this.test)
    }*/
    ind:{
      handler(val, oldVal) {
        this.project_name = this.project_name_list[val]
        console.log(this.project_name)
      }
    }
  }
}
</script>

<style lang="scss">
  .title{
    @apply text-5xl absolute bottom-8 ;
  }

  /* slide fade animation */
  .slide-fade-enter-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-fade-enter-from {
    transform: translateY(10px);
    opacity: 0;
  }

</style>