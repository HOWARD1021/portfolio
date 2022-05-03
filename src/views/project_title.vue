<template>
  <div class="title">
    <transition name="slide-fade" mode="out-in">
      <span  :key="title"> {{title}} </span>
    </transition>

    <div>
    <transition name="slide-fade" mode="out-in">
      <div :key="value">
        {{ value }}
      </div>
    </transition>
    <button @click="add">
    Add
    </button>
    <button @click="subtract">
    Subtract
    </button>
  </div>

  </div>
</template>

<script>
export default {
  name: 'projectName',
  data(){
    return{

    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
  	return{
      value: 5,
    }
  },
  methods: {
  	add () {
    	this.value++
    },
    subtract () {
			this.value--
    },
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
    transform: translateX(-10px);
    opacity: 0;
  }
  .slide-fade-enter-from {
    transform: translateX(10px);
    opacity: 0;
  }

</style>