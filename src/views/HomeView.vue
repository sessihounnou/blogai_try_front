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
    axios.get('http://localhost:8080/articles/2')
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
            <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="">
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
