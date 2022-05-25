<template>
  <div class="w-full h-[110px] flex items-center border-b border-gray-300 p-2">
      <div class="w-full h-[60%] ph:px-[10px] xl:px-[70px] items-center flex flex-row ph:justify-between xl:justfiy-between">
          <div class="ph:w-[68%] xl:w-[50%]">
              <div class="ph:w-[100%] xl:w-[80%] h-[100%] cursor-pointer duration-500 hover:scale-95"><img :src="img1" class="ph:w-[80%] xl:w-[50%] h-[90%]"></div>
          </div>
          <div class="ph:w-[30%] h-[100%] relative ph:justify-end xl:w-[50%] flex items-center  justify-between xl:hidden ph:block">
          <div  @click="change()" class="w-[35px] absolute top-[15px] right-[5px] flex flex-col justify-center items-center h-[35px] bg-red-500">
              <div class="par1 w-[22px] duration-500 h-[4px] bg-white"></div>
              <div class="par2 w-[22px] duration-500 h-[4px] my-1 bg-white"></div>
              <div class="par3 w-[22px] duration-500 h-[4px] bg-white"></div>
          </div>
          </div>
          <div class="flex flex-row justify-between w-[50%] xl:flex h-full ph:hidden">  
                  <div class="p-2"><a href="/why-topmercury" class="text-gray-500 hover:text-blue-500 text-xl">Why top Mercury?</a></div>
                  <div class="p-2"><a href="/about" class="text-gray-500 hover:text-blue-500 text-xl">About</a></div>
                  <div class="relative p-2 group">
                      <a href="#" class="text-gray-500 hover:text-blue-500 text-xl flex items-center">Servise<i class="fa fa-angle-down group-hover:rotate-180 duration-500 px-1 text-lg translate-y-[3px]"></i></a>
                      <div class="absolute hidden group-hover:block z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-[10px] duration-500 left-[-30px] bg-white rounded-2xl w-[200px] p-4">
                          <ul class="w-full flex flex-col space-y-4">
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/facebook">Facebook Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/instagram">Instagram Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/tiktok">Tik Tok Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/snapshat">Snapchat Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/Penterist">Penterist Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/quora">Quora Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/twitter">Twitter Ads</a></li>
                              <li class="text-gray-400 text-xl hover:text-blue-600"><a href="/youtube">Youtube Ads</a></li>
                          </ul>

                      </div>
                      </div>
                  <div class=" p-2"><a href="/blog" class="text-gray-500 hover:text-blue-500 text-xl">Blog</a></div>
                  <div class=" p-2"><button href="#" class="w-[150px] p-2 text-xl text-white bg-blue-500 rounded-xl hover:bg-blue-600 duration-500 hover:translate-y-[-4px]">Get in Touch</button></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        img1:require('../assets/top.png')
    }
},
methods:{
        change(){
        this.$store.commit('change')
                 var x = document.querySelector('.par1');
                         x.classList.toggle('absolute')
         x.classList.toggle('rotate-45')
 
                  var c = document.querySelector('.par3');
                           c.classList.toggle('absolute')
         c.classList.toggle('-rotate-45')

                  var g = document.querySelector('.par2');
         g.classList.toggle('hidden')
    },
    cha(){

    }
}
}
</script>

<style>

</style>