<template>
  <div class="lyingCat">
    <div class="content content--cat">
      <div class="fox">
      
        <div class="fox-tail">
						<div class="fox-tail">
							<div class="fox-tail">
								<div class="fox-tail">
									<div class="fox-tail">
										<div class="fox-tail">
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
      </div>
        <div class ="place_center">
          <div class="Cat">
          </div>
        </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
        <defs>
            <filter id="squiggly-0">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2" />
            </filter>
            <filter id="squiggly-1">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="squiggly-2">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
            <filter id="squiggly-3">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="squiggly-4">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
        </defs>
      </svg>
    </div><!-- /content -->

    <div class="canvas-bCenter" >
      <canvas id="canvas" width="220" height="220" ref="canvas" @click="trigger">   </canvas>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import rough from 'roughjs/bundled/rough.cjs';

export default {
  name: 'LyingCat',
  components: {
  },
  data() {
    return {
      activate: true,
      vueCanvas: null
    }
  },
  mounted() {
    console.log(document.getElementById('test'))
    console.log(this.$refs.canvas)
    this.vueCanvas = rough.canvas(this.$refs.canvas);//);
    this.vueCanvas.rectangle(20, 70, 180, 80, { 
                            roughness: 2.5, 
                            fill: '#EBCEA2',
                            hachureAngle: 60,
                            //hachureGap: 8,
                            fillWeight: 3 ,
                            bowing: 1,
                            fillStyle:'solid'
                            });
  },
  methods:{

    trigger(){
      console.log("trigger")
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/sassdash';
@import 'node_modules/sass-svg/index';

  $duration: 17s;
  $size: 0.07;
  $color-fox: #e37c67;
  
/* cat animation */

.fox {
	position: absolute;
	height: 375vmax * $size;
	width: 260vmax * $size;
	animation: fox $duration none, squigglevision 0.3s infinite;
	animation-timing-function: cubic-bezier(0, 0, 0.80, 0.90);
	bottom: 2.5vmax;
	left: 60%;
	transform-origin: bottom right;

	*, *:before, *:after {
		animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1) !important;
	}

	* {  
		position: absolute;
		background-size: contain;
		background-repeat: no-repeat;
		transform-style: preserve-3d;
		
		&:before, &:after {
			content: '';
			position: absolute;
			display: block;
			background-size: contain;
			background-repeat: no-repeat;
			height: 100%;
			width: 100%;
		}
	}
}

.lyingCat {
  .content--cat {
    background-size: cover;
    position: absolute;
    pointer-events: none;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%); 

  }
  .place_center{
    @apply flex justify-center;
    .Cat {
      position: absolute;
      @apply  flex justify-center;
      animation: cat $duration none, squigglevision 0.3s infinite;
      animation-timing-function: cubic-bezier(0, 0, 0.8, 0.9);
      bottom: 10.5vmax;

      transform-origin: bottom right;
      width : 35vw;
      height: 35vh
    }

  }

  #tail{
    $initial-tail-width: 40vmax * $size;

    > #tail{
      animation: tail-inner 3s ease-in-out both infinite;
      transform-origin: bottom center;

    }

  }
    
  }

  .fox-tail {
    z-index: -1;
    $initial-tail-width: 50vmax * $size;
    width: $initial-tail-width;
    height: $initial-tail-width;
    transform-origin: center bottom;

    &:before {
      transform-origin: center bottom;

        @include svg((viewBox: (0 0 66.4 66.4))) {
        @include svg('path', (
          fill: rgb(31, 31, 182),
          d: 'M43.0793 30.6286C42.8598 29.2779 42.6111 29.4953 35.3529 19.5903C29.4118 11.4708 26.412 7.34113 25.3437 4.76397C24.4657 2.63705 24.2462 1.56582 23.0756 0.75852C19.5782 -1.66338 13.5054 2.23339 8.91052 5.16762C3.56935 8.58312 0.554866 10.5237 0.0426991 13.9858C-0.264601 16.0351 1.0963 18.752 3.8181 24.2013C4.98877 26.5455 6.32042 29.1848 8.54468 32.6158C11.047 36.4971 13.2127 39.8349 16.6662 43.0331C20.6025 46.6815 24.0267 49.8486 28.3728 49.8176C36.4943 49.771 44.411 38.624 43.0793 30.6286Z'
        ));
      }
    }

    .fox > & {
      transform: rotate(90deg);
      top: 280vmax * $size;
      left: 160vmax * $size;
    }

    > .fox-tail {
      animation: tail-inner 3s ease-in-out both infinite;
      top: -$initial-tail-width / 2;
      transform:
        scale(1.1)
        rotate(-35deg);
    }

    > .fox-tail > .fox-tail > .fox-tail > .fox-tail {
      // opacity: 0.5;
      animation: tail-outer 3s ease-in-out both infinite;
      transform:
        scale(1.1)
        rotate(15deg);
    }
  }

  @keyframes tail-inner {
    0% { transform: scale(1.1) rotate(-38deg); }
    50% { transform: scale(1.1) rotate(-35deg); }
    100% { transform: scale(1.1) rotate(-38deg); }
  }

  @keyframes tail-outer {
    0% { transform: scale(1.1) rotate(-3deg); }
    50% { transform: scale(1.1) rotate(15deg); }
    100% { transform: scale(1.1) rotate(-3deg); }
  }

/*
  @keyframes tail-inner {
    0% { transform:  rotate(-1deg); }
    50% { transform:  rotate(-2deg); }
    100% { transform: rotate(-3deg); }
  }

  @keyframes tail-outer {
    0% { transform: scale(1.1) rotate(-3deg); }
    50% { transform: scale(1.1) rotate(15deg); }
    100% { transform: scale(1.1) rotate(-3deg); }
  }
*/
  $animations: (

    'body': (
      (1s, 2s, 3s, 4s): translateY(5vmax * $size),
      (1.2s, 2.2s, 3.2s, 4.2s): translateY(0),
    )
  );

  @each $animation-name, $animation in $animations {
    @keyframes #{$animation-name} {
      @each $offsets, $transform in $animation {
        @each $offset in $offsets {      
          #{percentage($offset / $duration)} {
            @if (type-of($transform) == 'number') {
              opacity: $transform;
            } @else {
              transform: #{$transform};
            }
          }
        }
      }
    }
  }


  @keyframes squigglevision {
    0% {
      filter: url("#squiggly-0");
    }
    25% {
      filter: url("#squiggly-1");
    }
    50% {
      filter: url("#squiggly-2");
    }
    75% {
      filter: url("#squiggly-3");
    }
    100% {
      filter: url("#squiggly-4");
    }
  }


  /* some style */

  .canvas-bCenter{
    @apply flex justify-center ;

    #canvas {
      position: absolute;
      top: -20vh;
      bottom: 0;
      left: 0;
      right: 0;
      margin:auto;
    }
  }
  

</style>