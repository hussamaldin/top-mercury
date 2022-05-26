<template>
  <div class="w-full">
          <div class="flex items-center justify-center h-auto">
              <div class="w-[87%] my-[30px]">
                  <div class="xl:w-[50%] ph:w-[90%] slidet opacity-0 py-[100px] mx-auto text-center flex flex-col justify-center">
                      <div class="font-bold ph:text-3xl xl:text-5xl">OUR VALUES</div>
                      <div class="xl:text-2xl ph:text-xl text-gray-400 font-bold">The Core Values That Drive Everything We Do</div>
                  </div>
                  <div class="flex flex-row ph:flex-wrap border-y-2 py-[60px] border-gray-200 justify-between flex-wrap">
                      <div class="ph:w-full xl:w-[48%] h-[600px] relative group slidet opacity-0 rounded-xl">
                      <div class="bg-white w-[200px] z-30 rounded-xl p-2 flex justify-around absolute top-[10px] right-[10px]">
                          <img :src="ra" ><p class="font-bold text-2xl ">Facbook Ads</p>
                      </div>
                          <div class="h-[60%] rounded-xl overflow-hidden"><img class="w-full duration-500 group-hover:scale-105 rounded-xl h-full rounded-xl" :src="img1"></div>
                          <div class="h-[40%]">
                              <h1 class="text-2xl font-bold my-3">Best Way To Advertise On Facebook: Overlooked Method</h1>
                              <p class="text-lg my-3 text-gray-400">Adam Lawrence ---- February 20, 2022</p>
                          </div>
                      </div>
                      <div class="ph:w-full xl:w-[48%] h-[600px] relative group slidet opacity-0">
                      <div class="bg-white w-[200px] z-30 rounded-xl p-2 flex justify-around absolute top-[10px] right-[10px]">
                          <img :src="ra"><p class="font-bold text-2xl">Facbook Ads</p>
                      </div>
                          <div class="h-[60%] rounded-xl overflow-hidden"><img class="w-full duration-500 group-hover:scale-105 rounded-xl h-full rounded-xl" :src="img1"></div>
                          <div class="h-[40%]">
                              <h1 class="text-2xl font-bold my-3">Best Way To Advertise On Facebook: Overlooked Method</h1>
                              <p class="text-lg my-3 text-gray-400">Adam Lawrence ---- February 20, 2022</p>
                          </div>
                      </div>
                      <div class="ph:w-full xl:w-[48%] h-[600px] relative group slidet opacity-0">
                      <div class="bg-white w-[200px] z-30 rounded-xl p-2 flex justify-around absolute top-[10px] right-[10px]">
                          <img :src="ra"><p class="font-bold text-2xl">Facbook Ads</p>
                      </div>
                          <div class="h-[60%] rounded-xl overflow-hidden"><img class="w-full duration-500 group-hover:scale-105 rounded-xl h-full rounded-xl" :src="img1"></div>
                          <div class="h-[40%]">
                              <h1 class="text-2xl font-bold my-3">Best Way To Advertise On Facebook: Overlooked Method</h1>
                              <p class="text-lg my-3 text-gray-400">Adam Lawrence ---- February 20, 2022</p>
                          </div>
                      </div>
                      <div class="ph:w-full xl:w-[48%] h-[600px] relative group slidet opacity-0">
                      <div class="bg-white w-[200px] z-30 rounded-xl p-2 flex justify-around absolute top-[10px] right-[10px]">
                          <img :src="ra"><p class="font-bold text-2xl">Facbook Ads</p>
                      </div>
                          <div class="h-[60%] rounded-xl overflow-hidden"><img class="w-full duration-500 group-hover:scale-105 rounded-xl h-full rounded-xl" :src="img1"></div>
                          <div class="h-[40%]">
                              <h1 class="text-2xl font-bold my-3">Best Way To Advertise On Facebook: Overlooked Method</h1>
                              <p class="text-lg my-3 text-gray-400">Adam Lawrence ---- February 20, 2022</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

  </div>
</template>

<script>
export default {
data(){
    return{
    img1:require('../assets/b1.jpg'),
    img2:require('../assets/b2.jpeg'),
    img3:require('../assets/b3.jpeg'),
    img4:require('../assets/b4.jpeg'),
    ra:require('../assets/ra.svg'),
    }
},
mounted(){
     window.addEventListener('scroll', this.onLoaded);
},
methods:{
             onLoaded(){
     var page=window.pageYOffset
     var x = document.getElementsByClassName("slidet");
     var i;
     console.log(page)
       console.log(x[0].getBoundingClientRect().top)
          for (i = 0; i < x.length; i++) {

              var c=x[i].getBoundingClientRect().top
            if(c <= 490){
       x[i].classList.replace("opacity-0","opacity-100");  
       x[i].classList.add("animate__animated" ,"animate__fadeIn" ,"animate__fast") 
            } 
       
  }
       },
}
}
</script>

<style>

</style>