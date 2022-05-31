<template>
  <div id="leaves">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i> 
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i> 
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i> 
  </div>
</template>

<script>
export default {
  
  name: 'fallen'
}
</script>

<style>

#leaves {position:relative;top:-50px;width:100%;text-align: right;}

#leaves i {
  display: inline-block;
  width: 200px;
  height: 600px;
  background: linear-gradient(to bottom right, #ec9bdf, #bb57bb);
  transform: skew(20deg);
  border-radius: 5% 40% 70%;
  box-shadow: inset 0px 0px 1px rgb(173, 77, 165);
  border: 1px solid rgb(182, 95, 177);
  z-index: 1;
  animation: falling 5s 0s infinite;
}

#leaves i:nth-of-type(2n) { animation: falling2 5s 0s infinite; }
#leaves i:nth-of-type(3n) { animation: falling3 8s 0s infinite; }


#leaves i:after {
  content: '';
  height: 125px;
  width: 10px;
  background: linear-gradient(to right, rgba(106, 61, 107, 0.15), rgba(45, 30, 41, 0));
  display: block;
  transform: rotate(125deg);
  position: absolute;
  left: 85px;
  border-radius:50%;
}

#leaves i:nth-of-type(n)    { height:23px; width:30px; }
#leaves i:nth-of-type(n):before { width:7px; height:5px; top:17px; right:1px; }
#leaves i:nth-of-type(n):after { width:2px; height:17px; left: 12px; top:0px; }

#leaves i:nth-of-type(2n+1)    { height:11px; width:16px; }
#leaves i:nth-of-type(2n+1):before { width:4px; height:3px; top:7px; right:0px; }
#leaves i:nth-of-type(2n+1):after { width:2px; height:6px; left: 5px; top:1px; }

#leaves i:nth-of-type(3n+2)  { height:17px; width:23px; }
#leaves i:nth-of-type(3n+2):before  { height:4px; width:4px; top:12px; right:1px; }
#leaves i:nth-of-type(3n+2):after  { height:10px; width:2px; top:1px; left:8px; }

#leaves i:nth-of-type(n)   { animation-delay: 1.9s;}
#leaves i:nth-of-type(2n)  { animation-delay: 3.9s;}
#leaves i:nth-of-type(3n)  { animation-delay: 2.3s;}
#leaves i:nth-of-type(4n)  { animation-delay: 4.4s;}
#leaves i:nth-of-type(5n)  { animation-delay: 5s;  }
#leaves i:nth-of-type(6n)  { animation-delay: 3.5s;}
#leaves i:nth-of-type(7n)  { animation-delay: 2.8s;}
#leaves i:nth-of-type(8n)  { animation-delay: 1.5s;}
#leaves i:nth-of-type(9n)  { animation-delay: 3.3s;}
#leaves i:nth-of-type(10n) { animation-delay: 2.5s;}
#leaves i:nth-of-type(11n) { animation-delay: 1.2s;}
#leaves i:nth-of-type(12n) { animation-delay: 4.1s;}
#leaves i:nth-of-type(13n) { animation-delay: 1s;  }
#leaves i:nth-of-type(14n) { animation-delay: 4.7s;}
#leaves i:nth-of-type(15n) { animation-delay: 3s;  }

#leaves i:nth-of-type(n)    { background: linear-gradient(to bottom right, #e26ef1, #bc62ce); }
#leaves i:nth-of-type(2n+2)  { background: linear-gradient(to bottom right, #e394ee, #f185bb); }
#leaves i:nth-of-type(4n+1)  { background: linear-gradient(to bottom right, rgb(252, 149, 217), #f6adf8); }

#leaves i:nth-of-type(n)    { opacity: .7;}
#leaves i:nth-of-type(3n+1)  { opacity: .5;}
#leaves i:nth-of-type(3n+2)  { opacity: .3;}

#leaves i:nth-of-type(n)    {transform: rotate(180deg);}


#leaves i:nth-of-type(n) { animation-timing-function:ease-in-out;}

@keyframes falling {
    
    0% {
      transform:
        translate3d(0,0,0)
        rotate(0deg);
    }
    
    100% {
      transform:
        translate3d(-350px, 50vh,0)
        rotate(90deg);
      opacity: 0;
    }
}

@keyframes falling2 {
  0% {
    transform:
      translate3d(0,0,0)
      rotate(90deg);
  }
    
  100% {
    transform:
      translate3d(- 60vw, 100vh ,0)
      rotate(0deg);
    opacity: 0;
  }
}

@keyframes falling3 {
  0% {
    transform:
      translate3d(0,0,0)
      rotate(0deg);
  }
  
  100% {
    transform:
      translate3d(-80vw, 100vh,0)
      rotate(-70deg);
    opacity: 0;
  }
}


</style>