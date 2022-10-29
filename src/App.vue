<template>
  <div>  
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
::-webkit-scrollbar {
	width: 4px;
	height: 5px;
}
::-webkit-scrollbar-thumb {
	background-color: rgba(38, 255, 0, 0.777);
	border-radius: 6px;
	cursor: pointer;
}
::-webkit-scrollbar-track {
	background-color: #ddd;
	border-radius: 6px;
}
</style>
