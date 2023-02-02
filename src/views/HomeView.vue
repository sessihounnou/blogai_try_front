<script>
import axios from "axios";
export default {
  name: "Home",
  // mounted () {
  //   this.get_data()
  // },
  data() {
    return {
        apiData: null,
        apiDataSpliced: null
    }
},
methods: {
  spliceData: function () {
    const array = [];
    let subArray = [];

    for (let i = 0; i<this.apiData.length; i++) {
      subArray.push(this.apiData[i]);
      if(subArray.length === 3) {
        array.push(subArray);
        subArray = [];
      }
    }
    if(subArray.length > 0) {
      array.push(subArray);
    }
    return array;
  }
},
  mounted() {
    axios.get('http://localhost:8080/articles/0')
   .then(response => {
      this.apiData = response.data;
      this.apiDataSpliced = this.spliceData();
   })
   .catch(error => {
      console.log(error)
   });
  },
  
};
</script>

<template>
<section>
    <!-- Title -->
<div class="pt-32  bg-white">
  <div class="relative text-lg bg-transparent text-gray-800 w-32">
    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
    <input class="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Search">
    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
    </button>
    </div>
</div>
  
<h1 class="text-center text-2xl font-bold text-gray-800">Toutes Les catégories</h1>
</div>

<!-- Tab Menu -->
<div class="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Tech</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Nutrition</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
		<span>Voitures</span>
	</a>
	<a rel="noopener noreferrer" href="#" class="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
			<circle cx="12" cy="12" r="10"></circle>
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
		</svg>
		<span>Geo-politiique</span>
	</a>
</div>
  </section>
 
    <!-- Create By Joker Banny -->
    <div class="">
    <div v-for="(item, index) in apiDataSpliced" :key="index">
      
        <section  class="sm:flex justify-center ">
        <div  class="flex items-center p-4 overflow-hidden " v-for="subitem in item" :key="subitem.id">
          <div class="container mx-auto max-w-sm bg-white rounded-xl shadow-lg  hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
            <img :src="`http://localhost:8080/${subitem.image}`" alt="">
            <div class="p-6">
              <h1 class="text-3xl font-bold text-gray-800 cursor-pointer ">{{subitem.id}}</h1>
              <h2 class="text-xl text-gray-800 font-semibold">{{subitem.title}}</h2>
              <!-- <p class="text-lg font font-thin">{{subitem.content}}</p> -->
            </div>
          </div>
        </div>

        <!-- <div  class="flex items-center p-4 overflow-hidden py-20">
          <div class="container mx-auto max-w-sm bg-white rounded-xl shadow-lg  hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="">
            <div class="p-6">
              <h1 class="text-3xl font-bold text-gray-800 cursor-pointer ">{{item.id}}</h1>
              <h2 class="text-xl text-gray-800 font-semibold">by Stuar Manson</h2>
              <p class="text-lg font font-thin">Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots,</p>
            </div>
          </div>
        </div> -->

        <!-- <div  class="flex items-center p-4 overflow-hidden py-20">
          <div class="container mx-auto max-w-sm bg-white rounded-xl shadow-lg  hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="">
            <div class="p-6">
              <h1 class="text-3xl font-bold text-gray-800 cursor-pointer ">{{item.id}}</h1>
              <h2 class="text-xl text-gray-800 font-semibold">by Stuar Manson</h2>
              <p class="text-lg font font-thin">Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots,</p>
            </div>
          </div>
        </div> -->
        
      </section>
    </div>  
    </div>

</template>
