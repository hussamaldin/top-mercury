<template>
  <div :class="[nav1?'w-full absolute top-[110px] bg-white z-50 h-auto opacity-100 duration-500 flex items-center border-b border-gray-300 p-2':' opacity-0 duration-500 hidden']">
      <div class="w-full h-[80%] flex flex-col"> 
                  <div class="p-2 my-2"><a href="/why-topmercury" class="text-gray-400 font-bold hover:text-blue-500 text-xl">Why top Mercury?</a></div>
                  <div class="p-2 my-2"><a href="/about" class="text-gray-400 font-bold hover:text-blue-500 text-xl">About</a></div>
                  <div class="p-2 h-auto my-2">
                      <a href="#" @click="cha" class="text-gray-400 font-bold hover:text-blue-500 text-xl flex items-center">Servise<i class="aple fa fa-angle-down duration-500 px-1 text-lg translate-y-[3px]"></i></a>
                          <ul class=" flex flex-col space-y-4 para hidden duration-500 bg-white rounded-2xl w-[200px] p-4">
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
                  <div class="p-2 my-2"><a href="/blog" class="text-gray-400 font-bold hover:text-blue-500 text-xl">Blog</a></div>
                  <div class="p-2 my-[30px]"><button href="#" class="w-full p-2 text-xl text-white bg-blue-500 rounded-xl hover:bg-blue-600 duration-500 hover:translate-y-[-4px]">Get in Touch</button></div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
computed:{
        nav1(){
        return this.$store.state.nav1
    }
},
methods:{
        change1(){
        this.$store.commit('change1')
    },
    cha(){
         var x = document.querySelector('.para');
         x.classList.toggle('hidden')
          var c = document.querySelector('.aple');
          c.classList.toggle('rotate-180')
    }
}
}
</script>

<style>

</style>