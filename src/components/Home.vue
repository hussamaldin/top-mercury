<template>
  <div class="w-full h-full overflow-hidden">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-[600px]  ph:h-auto overflow-hidden flex flex-row ph:flex-wrap relative">
        <div class="w-[530px] ph:h-[250px] h-full bg-blue-500 overflow-hidden absolute xl:top-0 ph:bottom-0 right-0">
          <div class="ph:translate-x-[500px] ph:translate-y-[-50px] xl:translate-x-[500px] xl:translate-y-[-250px] xl:h-[350px] ph:h-[180px] ph:w-[180px] xl:w-[350px] bg-red-400 rotate-45 transform origin-top-left"></div>
          <div class="xl:w-[250px] ph:w-[180px] absolute top-0 ph:hidden xl:h-[300px] ph:h-[180px] bg-blue-800"></div>
          <div class="w-[250px] absolute bottom-0 right-0 xl:h-[250px] ph:h-[180px] bg-blue-800"></div>
          <div class="w-[350px] rounded-full absolute bottom-[-180px] left-[-80px] h-[350px] bg-yellow-500"></div>
        </div>
        <div class="xl:w-[48%] ph:w-full xl:h-full ph:h-auto flex justify-center items-center">
          <div class="xl:w-[75%] ph:w-[95%] flex flex-col items-center justify-center">
          <div class="my-4 text-blue-500 ph:text-sm xl:text-xl">hussam RUN PROFITABLE ADS ON FACEBOOK & MORE</div>
          <div class=" ph:text-2xl xl:text-5xl my-4 font-bold">Let's DominatePaid Social</div>
          <div class="text-gray-400 my-4 text-lg">Scale your business with results driven paid advertising across social platforms.</div>
          <div class="flex flex-row ph:flex-wrap my-4 justify-between">
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="w-full ph:m-2 rounded-2xl text-lg text-white duration-500 p-4 bg-blue-500 hover:bg-blue-600 hover:translate-y-[-3px]">Get In Touch</button></div>
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="w-full ph:m-2  p-4 rounded-2xl text-lg text-blue-600 hover:text-white duration-500 border-2 border-blue-600 hover:bg-blue-600 hover:translate-y-[-3px]">Browse Service</button></div>
          </div>
          </div>

        </div>
        <div class="xl:w-[52%] ph:w-full">
          <div class="w-full h-full flex justify-center items-center">
            <div class="w-[65%] relative">
            <div class="xl:h-[250px] ph:h-[180px] ph:w-[180px] rounded-xl border-1 border-gray-300 shadow-xl translate-y-[80px] absolute z-10 w-[250px]"><img class="w-full rounded-xl h-full" :src="img1"></div>
            <div class="h-full shadow-xl rounded-xl border-1 border-gray-300 translate-x-[20px]"><img class="w-full rounded-xl h-full" :src="img2"></div>
            </div>
          </div>
        </div>

      </div>
      
      <div class="w-full h-[400px] my-4">
        <div class="w-full flex justify-center">
          <div class="xl:w-[50%] slidet opacity-0 ph:w-full flex xl:justify-center ph:justify-center">
            <div class="ph:text-lg slidet opacity-0 xl:text-2xl font-bold">We Work With Major Brands Across the World</div>
            </div>
        </div>
        <div class="w-full flex flex-row ph:flex-wrap ph:justify-center p-4 my-4">
          <div class="xl:w-[18%] ph:w-[32%] m-4 flex justify-center slidet opacity-0 items-center"><img class="w-[90%] slidet opacity-0 xl:h-[60%] ph:h-[100%]" :src="img3"></div>
          <div class="xl:w-[18%] ph:w-[32%] m-4 flex justify-center slidet opacity-0 items-center"><img class="w-[90%] slidet opacity-0  xl:h-[60%] ph:h-[100%]" :src="img4"></div>
          <div class="xl:w-[18%] ph:w-[32%] m-4 flex justify-center slidet opacity-0 items-center"><img class="w-[90%] slidet opacity-0  xl:h-[60%] ph:h-[100%]" :src="img5"></div>
          <div class="xl:w-[18%] ph:w-[32%] m-4 flex justify-center slidet opacity-0 items-center"><img class="w-[90%] slidet opacity-0  xl:h-[60%] ph:h-[100%]" :src="img6"></div>
          <div class="xl:w-[18%] ph:w-[32%] m-4 flex justify-center slidet opacity-0 items-center"><img class="w-[90%] slidet opacity-0  xl:h-[60%] ph:h-[100%]" :src="img7"></div>
        </div>
      </div>

      <div class="w-full bg-gray-200">
        <div class="flex justify-center">
          <div class="xl:w-[50%] slidet opacity-0 ph:w-[95%] my-4">
          <div class="text-center my-4 text-blue-500 h:text-lg xl:text-xl">Our service</div>
          <div class="text-center my-4 font-bold ph:text-xl xl:text-3xl">Direct Response Advertising Services to Grow Your Business</div>
          </div>
        </div>

            <div class="relative ph:w-[100%] xl:w-[100%] h-[460px] overflow-hidden my-[100px] scroll-smooth">
          <div :class="[page==lgsm ? 'hidden':'w-[100px] flex justify-center items-center absolute z-20 right-0 h-full']"><span @click="next" class="bg-blue-600 rounded-full ph:h-[60px] xl:h-[70px] hover:bg-blue-800 duration-500 hover:scale-95 flex justify-center items-center ph:w-[60px] xl:w-[70px]"><i class="fa fa-arrow-right text-white text-2xl"></i></span></div>
          <div :class="[page==1 ? 'hidden':'w-[100px] absolute flex justify-center items-center left-[20px] z-20 h-full']"><span @click="prev" class="bg-blue-600 rounded-full ph:h-[60px] xl:h-[70px] hover:bg-blue-800 duration-500  hover:scale-95 flex justify-center items-center ph:w-[60px] xl:w-[70px]"><i class="fa fa-arrow-left text-white text-2xl "></i></span></div>
                <div class="slidetr slidet opacity-0 duration-500 absolute flex flex-row justify-center h-full">

                  <div class="h-[450px] solo duration-500 translate-x-[-0px] p-4 border-1 bg-white border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                                <div class="solo duration-500 h-[450px]  bg-white p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa1">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                              <div class="h-[450px] duration-500  bg-white solo p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa2">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                              <div class="h-[450px] solo  bg-white duration-500 p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa3">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                            <div class="h-[450px] solo  bg-white duration-500 p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa4">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                             <div class="h-[450px] solo  bg-white duration-500 p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa5">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                                <div class="h-[450px] bg-white solo duration-500 p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa6">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                                 <div class="h-[450px]  bg-white solo duration-500 p-4 border-1 border-gray-200 rounded-xl">
                    <div class="w-full flex flex-col">
                      <div class="w-full flex justify-center">
                     <img class="w-[120px] h-[120px]" :src="fa7">
                     </div>
                      <div class="w-full flex-col">
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-2xl font-bold">Facebook Ads</div></div>
                      <div class="w-full my-4 flex justify-center"><div class="text-center text-gray-500 text-lg font-bold">As a certified Facebook Marketing Partner with proven systems in place, we're equipped to explode your sales.</div></div>
                      <div class="w-full flex justify-center"><div class="text-center text-blue-500 hover:text-red-500 duration-500">Learn More</div></div>
                      </div>
                    </div>
                  </div>
                  

                </div>
            </div>

            <div class="w-full flex justify-center mb-[130px]">
              <div class="w-[50%] ph:w-full flex flex-row ph:flex-wrap  justify-center">
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="ph:w-full slidet opacity-0 ph:m-2 ph:w-full mx-2 rounded-2xl border-2 border-blue-600 text-lg text-white duration-500 p-4 bg-blue-600 hover:bg-blue-700 hover:translate-y-[-3px]">Get In Touch</button></div>
            <div class="ph:w-full mx-2 xl:w-[200px]"><button class="ph:w-full slidet opacity-0 ph:m-2 ph:w-full p-4 mx-2 rounded-2xl text-lg text-blue-600 hover:text-white duration-500 border-2 border-blue-600 hover:bg-blue-700 hover:translate-y-[-3px]">About Our Team</button></div>
              </div>
            </div>

      </div>

      <div class="w-full xl:h-[600px] ph:h-auto ph:p-[15px] xl:p-[50px] my-[180px]">
        <div class="flex flex-row ph:flex-wrap">
          <div class="xl:w-[50%] order-2  ph:w-full border-1 relative border-gray-200 rounded-xl">
            <div class="rounded-full ph:hidden absolute opacity-30 top-[-80px] left-[-50px] w-[200px] h-[200px] bg-yellow-200"></div>
            <div class="rounded-xl w-full h-full"><img class=" slidet opacity-0 z-50 rounded-xl w-full h-full" :src="top1"></div>
            </div>
          <div class="xl:w-[50%] slidet opacity-0 order-1 ph:w-full p-4">

            <div class="text-blue-500 ph:text-sm xl:text-lg my-4">WHAT WE'VE ACCOMPLISHED</div>
            <div class="ph:text-2xl xl:text-4xl font-bold my-4">Why Work With TopMercury?</div>
            <div class="text-gray-400 ph:text-sm xl:text-lg leading-8 my-4">We have over a decade of experience delivering 
              unparalleled paid social results. The majority of 
              our clients stay with us for 2+ years. We are also a
               certified Facebook Marketing Partner, and our founder 
               is directly involved in every relationship.</div>
               <div class="flex flex-row w-[90%] my-4 flex-wrap">
                 <div class="flex flex-row ph:my-3 xl:mx-1 ph:w-full xl:w-[48%]">
                   <div class="ph:text-2xl xl:text-4xl font-bold">50M<span class="text-blue-500 ph:text-2xl xl:text-4xl">+</span></div>
                   <div class="text-lg text-gray-400 mx-1">Ad Spend Managed</div>
                 </div>
                 <div class="flex flex-row ph:my-3 xl:mx-1  ph:w-full xl:w-[48%]">
                   <div class="ph:text-2xl xl:text-4xl font-bold">150<span class="text-blue-500 ph:text-2xl xl:text-4xl">+</span></div>
                   <div class="text-lg text-gray-400 mx-1">Successful Clients</div>
                 </div>
                 <div class="flex flex-row ph:my-3 xl:mx-1  ph:w-full xl:w-[48%]">
                   <div class="ph:text-2xl xl:text-4xl font-bold">20k<span class="text-blue-500 ph:text-2xl xl:text-4xl">+</span></div>
                   <div class="text-lg text-gray-400 mx-1">Campaigns Launched</div>
                 </div>
                 <div class="flex flex-row ph:my-3 xl:mx-1  ph:w-full xl:w-[48%]">
                   <div class="ph:text-2xl xl:text-4xl font-bold">Zero</div>
                   <div class="text-lg text-gray-400 mx-1">Gotcha" Contracts</div>
                 </div>
               </div>
                <div class="ph:w-full mx-2 xl:w-[200px]"><button class="ph:w-full rounded-2xl my-4 text-lg text-white duration-500 p-4 bg-blue-700 hover:bg-blue-800 hover:translate-y-[-3px]">Why TopMercury</button></div>
          </div>


        </div>
      </div>

      <div class="flex justify-center ph:hidden w-full h-[450px] my-[220px] rounded-xl">
        <div class="bg-blue-600 w-[80%] relative">
          <div class="flex w-[50%] h-full justify-center flex-col items-center">
            <div class="w-[80%] slidet opacity-0">
            <div class="text-3xl text-white">You Deserve An Objective, Data-Driven Approach</div>
            <div class="w-full flex justify-around">
                <div><button class="w-[200px] slidet opacity-0 rounded-2xl my-4 text-lg text-blue-800 duration-500 p-4 bg-gray-50 hover:text-white hover:bg-red-600 hover:translate-y-[-3px]">Why TopMercury</button></div>
                <div><button class="w-[200px] slidet opacity-0 rounded-2xl my-4 text-lg text-white duration-500 p-4 bg-blue-700 hover:bg-red-600 outline-1 outline outline-white hover:outline-red-600 border-white hover:translate-y-[-3px]">Why TopMercury</button></div>
            </div>
            </div>
          </div>
          <div class="w-[40%] slidet opacity-0 h-full absolute z-10 top-0 flex-wrap right-0 flex flex-row">
            <div class="w-[50%] slidet opacity-0 h-[50%] z-20"><div class="w-full h-full bg-blue-800"></div></div>
            <div class="w-[50%] slidet opacity-0 h-[50%] z-20"><div class="w-full h-full rounded-full bg-yellow-500"></div></div>
            <div class="w-[50%] slidet opacity-0 h-[50%] overflow-hidden z-10"><div class="w-full h-full translate-x-[80px] rounded-full bg-red-500"></div></div>
            <div class="w-[50%] slidet opacity-0 h-[50%] overflow-hidden z-0"><div class="w-[100%] translate-x-[-60px] translate-y-[-15px] h-[100%] bg-blue-800 rotate-45 transform origin-top-right"></div></div>

          </div>
        </div>
      </div>

      <div class="w-full xl:h-[1000px] ph:h-auto ph:p-[25px] xl:p-[50px] bg-gray-100 mb-[130px]">
        <div class="flex flex-row ph:flex-wrap items-center">
          <div class="xl:w-[50%] slidet opacity-0 xl:order-1 ph:order-2  ph:w-full border-1 relative border-gray-200 rounded-xl">
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
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer h-full bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-left text-2xl text-white"></i></span></div>
                      <div class="ph:w-[30px] xl:w-[60px] ph:h-[30px] xl:h-[60px] mx-2"><span @click="slide" class="flex w-full h-full hover:scale-95 duration-500 hover:bg-blue-600 cursor-pointer bg-blue-500 rounded-full justify-center items-center"><i class="fa fa-arrow-right text-2xl text-white"></i></span></div>
                    </div>
                  </div>
                </div>
            <div :class="[cont==2 ?'rounded-xl w-full  opacity-100 duration-500 h-full':' duration-500 translate-x-[-400px] hidden']"><img class="z-50 rounded-xl w-full h-full" :src="m2"></div>
            </div>
          <div class="xl:w-[50%] slidet opacity-0 xl:order-2 ph:order-1 ph:w-full h-full ph:p-[15px] xl:p-[100px]">
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

      <div class="w-full flex justify-center items-center my-[50px] xl:h-[600px] ph:h-auto">
        <div class="w-[90%]">
          <div class=" flex flex-row ph:flex-wrap xl:justify-between ph:justify-center my-[40px]">
            <div class="xl:w-[35%] slidet opacity-0 ph:w-[90%]">
              <div class="text-blue-500 ph:text-lg xl:text-xl">OUR PROCESS</div>
              <div class="font-bold ph:text-2xl xl:text-4xl">A Simple, Yet Effective Three Step Process</div>
            </div>
            <div class="xl:w-[30%] ph:w-[60%] ph:hidden xl:flex text-right"><button class="xl:w-[200px] ph:w-[180x] rounded-2xl font-bold my-2 text-lg text-white duration-500 p-2 bg-blue-500 hover:bg-blue-600 hover:translate-y-[-3px]">Git In Touch</button></div>
          </div>
          <div class="flex flex-row ph:flex-wrap ph:h-auto xl:h-[360px] justify-between my-[40px]">
            <div class="xl:w-[32%] slidet opacity-0 ph:w-full flex xl:flex-col ph:flex-row">
              <div class="xl:w-full ph:w-[85%] xl:order-1 ph:order-2">
              <img class="w-[80px] h-[80px]" :src="re1">
              <div class="my-[50px]">
                <h1 class="ph:text-xl xl:text-2xl font-bold">1. Audit & Consultation</h1>
                <p class="text-gray-400 ph:text-sm xl:text-lg">We take a deep dive into your company to propose a game plan, and you don't pay a </p>
              </div>
              </div>
              <div class="ph:w-[15%] xl:order-2 ph:order-1  ">
                <div class="relative xl:h-[35px] xl:w-[600px] ph:w-[30px] ph:h-[400px] flex items-center justify-center">
                  <div class="w-[35px] h-[35px] rounded-full bg-blue-600 absolute top-0 left-0"></div>
                  <p class="xl:w-full text-center ph:w-[2px] bg-gray-400 xl:h-[2px] ph:h-[300px]"></p>
                </div>
              </div>
            </div>
            <div class="xl:w-[32%] slidet opacity-0 ph:w-full flex xl:flex-col ph:flex-row">
              <div class="xl:w-full ph:w-[85%] xl:order-1 ph:order-2">
              <img class="w-[80px] h-[80px]" :src="re2">
              <div class="my-[50px]">
                <h1 class="ph:text-xl xl:text-2xl font-bold">2. Create & Launch</h1>
                <p class="text-gray-400 ph:text-sm xl:text-lg">We build sales funnels with robust targeting, and we tie it all together with just the right message.</p>
              </div>
              </div>
              <div class="ph:w-[15%] xl:order-2 ph:order-1  ">
                <div class="relative xl:h-[35px] xl:w-[600px] ph:w-[30px] ph:h-[400px] flex items-center justify-center">
                  <div class="w-[35px] h-[35px] rounded-full bg-yellow-400 absolute top-0 left-0"></div>
                  <p class="xl:w-full ph:w-[2px] bg-gray-400 xl:h-[2px] ph:h-[300px]"></p>
                </div>
              </div>
            </div>
            <div class="xl:w-[32%] slidet opacity-0 ph:w-full flex xl:flex-col ph:flex-row">
              <div class="xl:w-full ph:w-[85%] xl:order-1 ph:order-2">
              <img class="w-[80px] h-[80px]" :src="re3">
              <div class="my-[50px]">
                <h1 class="ph:text-xl xl:text-2xl font-bold">3. Test & Optimize</h1>
                <p class="text-gray-400 ph:text-sm xl:text-lg">We continuously assess your ads, optimize your budget, and create new ads for ongoing success.</p>
              </div>
              </div>
              <div class="ph:w-[15%] xl:order-2 ph:order-1  ">
                <div class="relative xl:h-[35px] xl:w-[600px] ph:w-[30px] ph:h-[400px] flex items-center justify-center">
                  <div class="w-[35px] h-[35px] rounded-full bg-red-500 absolute top-0 left-0"></div>
                  <p class="xl:w-full ph:w-[2px] bg-gray-400 xl:h-[2px] ph:h-[300px]"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                      <div class="w-full h-[1300px] ph:h-auto border-y-2 border-gray-200 mt-[150px] flex justify-center items-center relative">
        <div class="w-full xl:h-[65%] ph:h-[100%] flex flex-row ph:flex-wrap xl:justify-between ph:justify-center  p-4 items-center">
          <div class="xl:w-[47%] slidet opacity-0 ph:w-full xl:h-full ph:h-auto z-50">
            <div class="text-blue-500 text-xl my-4">READY TO CHAT?</div>
            <div class="text-2xl font-bold my-4">Let's Talk Growth!</div>
            <div class="text-gray-400 text-lg my-4">Don't worry, there are no sleazy salespeople here. You'll speak directly to our founder and you won't be pressured to move forward. We only take on a client if it truly makes sense for everyone. Seriously.</div>
            <div><img class="w-[280px] h-[200px] my-4 cursor-pointer" :src="met"></div>
          </div>
          <div class="xl:w-[48%] ph:w-[90%] border-1 border-gray-200 rounded-xl shadow-xl xl:p-[50px] ph:p-[20px] h-full ph:h-auto bg-white z-50">
            <form class=" w-full flex  flex-col ph:z-50">
              <div class="w-full flex flex-row ph:flex-wrap justify-between  xl:my-3 ph:my-1">
                <div class="xl:w-[40%] slidet opacity-0 ph:w-full">
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
        <div class="bg-blue-600 xl:h-full slidet opacity-0 ph:h-[700px] absolute xl:top-0 ph:bottom-0 right-0 w-[450px] z-10">
          <div class="w-[300px] absolute slidet opacity-0 top-0 right-0 rounded-full h-[300px] bg-yellow-400"></div>
          <div class="w-[250px]  absolute slidet opacity-0 bottom-0 right-0 overflow-hidden inline-block">
         <div class="h-[400px] bg-red-500 slidet opacity-0 rotate-45 transform origin-bottom-left"></div>
         </div>
          <div class="w-[300px] translate-x-[-150px] slidet opacity-0 absolute bottom-0 left-0 h-[300px] bg-blue-700"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    img1:require('../assets/icon1.png'),
    img2:require('../assets/icon2.svg'),
    img3:require('../assets/in1.png'),
    img4:require('../assets/in2.png'),
    img5:require('../assets/in3.png'),
    img6:require('../assets/in4.png'),
    img7:require('../assets/in5.png'),
    fa:require('../assets/fa.png'),
    fa1:require('../assets/fa1.png'),
    fa2:require('../assets/fa2.png'),
    fa3:require('../assets/fa3.png'),
    fa4:require('../assets/f4.png'),
    fa5:require('../assets/fa5.png'),
    fa6:require('../assets/fa6.png'),
    fa7:require('../assets/fa7.png'),
    top1:require('../assets/top1.png'),
    m1:require('../assets/m1.jpg'),
    m2:require('../assets/m2.jpg'),
    re1:require('../assets/re1.svg'),
    re2:require('../assets/re2.svg'),
    re3:require('../assets/re3.svg'),
    met:require('../assets/met.png'),
    tra:0,
    page:1,
    cont:1,
    lgsm:7,
  }
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
  slide(){
    if(this.cont==1){
 this.cont=2
    }
    else{
      this.cont=1
    }
  },

  next(){
       var x= document.querySelector(".slidetr");
    x.classList.remove('translate-x-[-'+this.tra+'px]');
         var viewportWidth = window.innerWidth;
          
    if ( viewportWidth <= 720 ) {
 this.tra +=viewportWidth
 this.lgsm=8
    }
    else{
     var newvw=Math.floor(viewportWidth/3)
     this.tra +=newvw
    }
       this.page+=1

x.classList.add('translate-x-[-'+this.tra+'px]')

  
   console.log('translate-x-['+this.tra+'px]')
  },
  prev(){
       var x= document.querySelector(".slidetr");
    x.classList.remove('translate-x-[-'+this.tra+'px]');
         var viewportWidth = window.innerWidth;
          
    if ( viewportWidth <= 720 ) {
 this.tra -=viewportWidth
    }
    else{
     var newvw=Math.floor(viewportWidth/3)
     this.tra -=newvw
    }
       this.page-=1

x.classList.add('translate-x-[-'+this.tra+'px]')

  
   console.log('translate-x-['+this.tra+'px]')
  },
  reportW(){
              var viewportWidth = window.innerWidth;
          
    if ( viewportWidth <= 720 ) {
this.view=viewportWidth
 var x = document.getElementsByClassName("solo");
 var i;
  for (i = 0; i < x.length; i++) {
    if(viewportWidth <= 640){
x[i].classList.add('ph:w-screen')
    }

  }

    } 
    else{
   var newvw=Math.floor(viewportWidth/3)

    var y = document.getElementsByClassName("solo");
 var r;
     for (r = 0; r < y.length; r++) {
y[r].classList.add('xl:w-['+newvw+'px]')

  }
    }
  }
},
mounted(){
  window.addEventListener('resize', this.reportW);
   window.addEventListener('scroll', this.onLoaded);
          var viewportWidth = window.innerWidth;
          
    if ( viewportWidth <= 720 ) {
this.view=viewportWidth
 var x = document.getElementsByClassName("solo");
 var i;
  for (i = 0; i < x.length; i++) {
    if(viewportWidth <= 640){
x[i].classList.add('ph:w-screen')
    }

  }

    } 
    else{
   var newvw=Math.floor(viewportWidth/3)

    var y = document.getElementsByClassName("solo");
 var r;
     for (r = 0; r < y.length; r++) {
y[r].classList.add('xl:w-['+newvw+'px]')

  }
    }
}
};
</script>

<style>
</style>
