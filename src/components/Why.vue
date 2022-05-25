<template>
  <div>
      <div class="w-full ph:h-auto xl:h-[880px] pb-[150px] mb-[50px]">
        <div class="flex flex-row ph:flex-wrap justify-center items-center">
          <div class="ph:w-full xl:w-[50%] ph:p-[20px] xl:p-[50px]">
            <div class="text-blue-500 text-lg my-4">WHY TOPMERCURY?</div>
            <div class="ph:text-2xl xl:text-4xl font-bold my-4">Paid SocialDone ROIght</div>
            <div class="text-gray-400 text-lg leading-8 my-4">We know why you're here. This is about sales. Lots of them. And we're here to make it all happen.Get In Touch</div>
          <div class="flex flex-row ph:flex-wrap my-4">
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="ph:w-full ph:m-2 rounded-2xl mx-2 text-lg text-white duration-500 p-4 bg-blue-500 hover:bg-blue-600 hover:translate-y-[-3px]">Get In Touch</button></div>
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="ph:w-full ph:m-2 p-4 rounded-2xl mx-2 text-lg text-blue-600 hover:text-white duration-500 border-2 border-blue-600 hover:bg-blue-600 hover:translate-y-[-3px]">Browse Service</button></div>
          </div>
          </div>
                    <div class="ph:w-full xl:w-[50%] border-1 relative border-gray-200 rounded-xl">
            <div class="rounded-xl w-full h-full"><img class=" z-50 rounded-xl w-full h-[880px]" :src="img1"></div>
            </div>


        </div>
      </div>
      <div class="w-full xl:h-[1000px] ph:h-auto ph:p-[25px] xl:p-[50px] bg-gray-100 mb-[130px]">
        <div class="flex flex-row ph:flex-wrap items-center">
          <div class="xl:w-[50%] xl:order-1 ph:order-2  ph:w-full border-1 relative border-gray-200 rounded-xl">
                <div :class="[cont==1 ?'ph:w-[270px] xl:w-[550px] rounded-xl opacity-100 duration-500 border-1 shadow-xl border-gray-200 absolute bottom-[-80px] right-[-20px] bg-white z-10 ph:p-[20px] xl:p-[50px] ph:h-[400px] xl:h-[350px]':'hidden translate-x-[-400px] duration-500']">
                  <div class="w-[80%]">
                    <div><span class="mx-2"><i class="fa fa-star ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star ph:text-lg xl:text-2xl text-yellow-400"></i></span></div>
                    <div class="ph:text-lg xl:text-xl my-4 text-gray-400">“TopMercury has completely reworked our paid social strategy and is growing our brand with industry-leading ROAS. You are in good hands."</div>
                    <div class="ph:text-lg xl:text-xl mt-4 font-bold">Josh Walker</div>
                    <div class="text-gray-400">1620 Workwear</div>
                    <div class="absolute right-[1px] flex ph:w-[120px] xl:w-[200px] ph:bottom-[20px] xl:bottom-[25px] p-2">
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer h-full bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-left ph:text-lg xl:text-2xl text-white"></i></span></div>
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full h-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-right ph:text-lg xl:text-2xl text-white"></i></span></div>
                    </div>
                  </div>
                </div>
            <div :class="[cont==1 ?'rounded-xl w-full  opacity-100 h-full duration-500':'hidden translate-x-[-400px] opacity-100 duration-500']"><img class="z-50 rounded-xl w-full h-full" :src="m1"></div>
                            <div :class="[cont==2 ?'ph:w-[270px] xl:w-[550px]  opacity-100 rounded-xl duration-500 border-1 shadow-xl opacity-100 border-gray-200 absolute bottom-[-80px] right-[-20px] bg-white z-10 ph:p-[20px] xl:p-[50px] ph:h-[400px] xl:h-[350px]':'hidden translate-x-[-400px] duration-500']">
                  <div class="w-[80%]">
                    <div><span class="mx-2"><i class="fa fa-star  ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star  ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star  ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star  ph:text-lg xl:text-2xl text-yellow-400"></i></span><span class="mx-2"><i class="fa fa-star  ph:text-lg xl:text-2xl text-yellow-400"></i></span></div>
                    <div class="ph:text-lg xl:text-xl my-4 text-gray-400">“Adam and TopMercury did in 2 weeks what 4 other Upwork hires couldn't do in over 2 years. I wish I found them sooner...”</div>
                    <div class="ph:text-lg xl:text-xl mt-4 font-bold">Michelle Demaree</div>
                    <div class="text-gray-400">Miss Diamond Ring</div>
                    <div class="absolute right-[1px] flex ph:w-[120px] xl:w-[200px] ph:bottom-[20px] xl:bottom-[25px] p-2">
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer h-full bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-left ph:text-xl xl:text-2xl text-white"></i></span></div>
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full h-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-right ph:text-xl xl:text-2xl text-white"></i></span></div>
                    </div>
                  </div>
                </div>
            <div :class="[cont==2 ?'rounded-xl w-full  opacity-100 duration-500 h-full':' duration-500 translate-x-[-400px] hidden']"><img class="z-50 rounded-xl w-full h-full" :src="m2"></div>
            </div>
          <div class="xl:w-[50%] xl:order-2 ph:order-1 ph:w-full h-full ph:p-[15px] xl:p-[100px]">
            <div class="text-blue-500 ph:text-sm xl:text-lg my-4">WHAT WE'VE ACCOMPLISHED</div>
            <div class=" ph:text-2xl xl:text-4xl font-bold my-4">We Treat Our Clients Like Business Partners</div>
            <div class="text-gray-400  ph:text-sm xl:text-lg leading-8 my-4">We have over a decade of experience delivering 
              unparalleled paid social results. The majority of 
              our clients stay with us for 2+ years. We are also a
               certified Facebook Marketing Partner, and our founder 
               is directly involved in every relationship.</div>
                <div><button class="w-[200px] rounded-2xl my-4 text-lg text-white duration-500 p-4 bg-blue-700 hover:bg-blue-800 hover:translate-y-[-3px]">Why TopMercury</button></div>
          </div>


        </div>
      </div>

            <div class="w-full ph:h-auto xl:h-[800px] ph:pd-[50px] xl:pb-[100px] my-[100px]">
        <div class="flex flex-row ph:flex-wrap justify-center items-center">
          <div class="ph:w-full xl:w-[50%] p-[50px]">
            <div class="text-blue-500 text-lg my-[50px]">WHY TOPMERCURY?</div>
            <div class="ph:text-xl xl:text-4xl font-bold my-[50px]">A Professional Service Run Like A Professional Service</div>
            <div class="text-gray-400 ph:text-sm xl:text-lg leading-8 my-[50px] py-4 border-b-2 border-gray-200">Most digital agencies are founded by experts (professionals), yet run by entry-level employees. We don't do that here. At TopMercury, you'll work directly with experts who have over 10,000 hours of experience on social ad platforms.</div>
            <div class="text-gray-400 ph:text-sm xl:text-lg leading-8 my-[50px]">We're like an agency... that works. Which is why our clients stay with us for an average of nearly 3 years.</div>
            <div class="my-[50px]"><button class="w-[200px] rounded-2xl text-lg text-white duration-500 p-4 bg-blue-700 hover:bg-blue-800 hover:translate-y-[-3px]">About our Team</button></div>
          </div>
            <div class="ph:w-full xl:w-[45%] border-1 relative border-gray-200 rounded-xl">
            <div class="rounded-xl w-full h-full"><img class=" z-50 rounded-xl w-full ph:h-[750px] xl:h-[880px]" :src="img2"></div>
            </div>
        </div>
      </div>

            <div class="w-full ph:h-[250px] xl:h-[400px]">
          <div class="w-full h-full flex flex-row ph:flex-wrap justify-center items-center">
              <div class="ph:w-[50%] xl:w-[23%] flex items-center flex-col">
                  <div class="ph:text-3xl xl:text-5xl font-bold p-2">50M<span class="text-blue-600">+</span></div>
                  <div class="text-gray-500 ph:text-xl xl:text-3xl">Ad Spend Managed</div>
              </div>
              <div class="ph:w-[50%] xl:w-[23%] flex items-center flex-col">
                  <div class="ph:text-3xl xl:text-5xl font-bold p-2">150<span class="text-blue-600">+</span></div>
                  <div class="text-gray-500 ph:text-xl xl:text-3xl">Successful Clients</div>
              </div>
              <div class="ph:w-[50%] xl:w-[23%] flex items-center flex-col">
                  <div class="ph:text-3xl xl:text-5xl font-bold p-2">20K<span class="text-blue-600">+</span></div>
                  <div class="text-gray-500 ph:text-xl xl:text-3xl">Campaigns Launched</div>
              </div>
              <div class="ph:w-[50%] xl:w-[23%] flex items-center flex-col">
                  <div class="ph:text-3xl xl:text-5xl font-bold p-2">ZERO</div>
                  <div class="text-gray-500 ph:text-xl xl:text-3xl">"Gotcha" Contracts</div>
              </div>
          </div>
      </div>

                      <div class="w-full h-[1300px] ph:h-auto border-y-2 border-gray-200 mt-[150px] flex justify-center items-center relative">
        <div class="w-full xl:h-[65%] ph:h-[100%] flex flex-row ph:flex-wrap xl:justify-between ph:justify-center  p-4 items-center">
          <div class="xl:w-[47%] ph:w-full xl:h-full ph:h-auto z-50">
            <div class="text-blue-500 text-xl my-4">READY TO CHAT?</div>
            <div class="text-2xl font-bold my-4">Let's Talk Growth!</div>
            <div class="text-gray-400 text-lg my-4">Don't worry, there are no sleazy salespeople here. You'll speak directly to our founder and you won't be pressured to move forward. We only take on a client if it truly makes sense for everyone. Seriously.</div>
            <div><img class="w-[280px] h-[200px] my-4 cursor-pointer" :src="met"></div>
          </div>
          <div class="xl:w-[48%] ph:w-[90%] border-1 border-gray-200 rounded-xl shadow-xl xl:p-[50px] ph:p-[20px] h-full ph:h-auto bg-white z-50">
            <form class=" w-full flex  flex-col ph:z-50">
              <div class="w-full flex flex-row ph:flex-wrap justify-between  xl:my-3 ph:my-1">
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Name</label>
                  <input type="text" placeholder="Full Name" class=" my-2 w-full border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Email</label>
                  <input type="text" placeholder="Email Address" class=" w-full my-2 border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
              </div>
              <div class="w-full flex flex-row ph:flex-wrap justify-between  xl:my-3 ph:my-1">
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Phone</label>
                  <input type="text" placeholder="+249920499020" class=" my-2 w-full border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Company</label>
                  <input type="text" placeholder="Company Name" class="my-2 w-full border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
              </div>
              <div class="w-full flex flex-row ph:flex-wrap justify-between xl:my-3 ph:my-1">
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Social Platform</label>
                  <input type="text" placeholder="Facebook, etc" class=" my-2 w-full border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
                <div class="xl:w-[40%] ph:w-full">
                  <label class="font-bold">Month Budget</label>
                  <input type="text" placeholder="Budger" class="my-2 w-full border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500">
                </div>
              </div>
              <div class="w-full my-3">
                <textarea placeholder="Anything else we should know" class="w-full xl:h-[180px] ph:h-[140px] border-none rounded-lg duration-500 outline p-3 focus:outline-blue-500 outline-2 outline-gray-400 hover:outline-blue-500"></textarea>
              </div>
              <div class="my-3 ph:w-full"><button class="xl:w-[200px] ph:w-full rounded-2xl xl:my-4 ph:my-2 text-lg text-white duration-500 p-4 bg-blue-500 hover:bg-blue-600 hover:translate-y-[-3px]">Get in Touch</button></div>
            </form>
  
          </div>
        </div>
        <div class="bg-blue-600 xl:h-full ph:h-[700px] absolute xl:top-0 ph:bottom-0 right-0 w-[450px] z-10">
          <div class="w-[300px] absolute top-0 right-0 rounded-full h-[300px] bg-yellow-400"></div>
          <div class="w-[250px]  absolute bottom-0 right-0 overflow-hidden inline-block">
         <div class="h-[400px] bg-red-500 rotate-45 transform origin-bottom-left"></div>
         </div>
          <div class="w-[300px] translate-x-[-150px] absolute bottom-0 left-0 h-[300px] bg-blue-700"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
     img1:require('../assets/w1.jpeg'),
         m1:require('../assets/m1.jpg'),
    m2:require('../assets/m2.jpg'),
    img2:require('../assets/w2.jpeg'),
    met:require('../assets/met.png'),
    cont:1
    }
},
methods:{
  slide(){
    if(this.cont==1){
 this.cont=2
    }
    else{
      this.cont=1
    }
  },
}
}
</script>

<style>

</style>