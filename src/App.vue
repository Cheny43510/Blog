<template>
  <div>  
    <Header />
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
	width: 8px;
	height: 10px;
}
::-webkit-scrollbar-thumb {
	background-color: rgba(0, 255, 30, 0.745);
	border-radius: 6px;
	cursor: pointer;
}
::-webkit-scrollbar-track {
	background-color: #ddd;
	border-radius: 6px;
}
</style>
