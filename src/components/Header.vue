<template>
	<div class="lg:fixed w-screen">
		<nav class="shadow-sm border-b-2 relative z-50 lg:bg-white bg-white">
			<div class="container  lg:flex box-border relative space-x-4  py-2 mx-auto">
				<!-- brand -->
				<span class="ml-2">
					<a href="#"
					class="inline-flex p-2 space-x-2 hover:bg-gray-300 rounded-lg  text-xl font-bold tracking-wider">{{
							blog
					}}</a>
				</span>
				<!-- brand -->
				<!-- toggler btn -->
				<button @click="showhidden"
					class="lg:hidden  inline-flex items-center justify-center h-6 w-6 absolute top-4 right-4  rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
						<path fill-rule="evenodd"
							d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
							clip-rule="evenodd" />
					</svg>
				</button>
				<!-- toggler btn -->
				<!-- search -->
				<div class="lg:relative lg:top-0 lg:left-0 lg:m-auto absolute right-11 top-3">
					<div class="relative lg:flex flex-wrap items-stretch">
						<input type="search"
							class="relateive hover:border-green-500 p-2 lg:w-48 w-24 border rounded-3xl shadow bg-white outline-none text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
							placeholder="请输入搜索关键词" />
						<div
							class="absolute top-0 right-3 h-full leading-snug bg-transparent text-base font-normal text-gray-400 flex items-center justify-center">
							<i class="fa fa-search"></i>
						</div>

					</div>
				</div>
				<!-- search -->
				<!-- menu -->
				<div :class="classObj"
					class="lg:absolute right-4  w-11/12 mx-auto lg:inline-flex lg:w-auto mt-2 lg:mt-0">
					<ul class=" flex space-y-2 lg:space-y-0 flex-wrap lg:flex-row  lg:space-x-2">
						<li class=" w-full lg:w-auto relative" v-for="item in navData" :key="item.id">
							<div class="flex drop px-4 space-x-3 py-2 rounded-md font-medium items-center hover:bg-gray-300 ">
								<i :class="item.font"></i>
							<button href="#"
								>{{
										item.name
								}}</button>
							</div>
							<!-- DropdownMenu -->
							<div class=" lg:absolute right-0 rounded-md p-2 dropdown hidden">
								<ul class=" space-y-2 lg:inline-flex lg:flex-wrap lg:justify-center py-2  shadow-xl rounded-lg bg-white">
									<li class="lg:flex lg:justify-center" v-for="item in item.childNav">
										<div class="flex p-2 space-x-1 font-medium items-center   rounded-md hover:bg-gray-300 hover:text-black">
											<i :class="item.font"></i>
											<a href="#"
											>{{
													item.name
											}}</a>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<!-- menu -->
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			blog: "Cheny's Blog",
			navData: [
				{
					id: '001',
					name: '目录',
					font:'fa-fw fa fa-home',
					childNav: [
						{
							id: '011',
							name: '归档',
							url: '#',
							font:'fa fa-archive',
						},
						{
							id: '012',
							name: '标签',
							url: '#',
							font:'fa fa-tags',
						}, {
							id: '013',
							name: '分类',
							url: '#',
							font:'fa fa-folder-open',
						}
					]
				}, {
					id: '002',
					name: '常用工具',
					font:'fa fa-wrench',
					childNav: [
						{
							id: '021',
							name: "Cheny's 图床",
							url: '#',
							font:'',
						}, {
							id: '021',
							name: "Cheny's 云盘",
							url: '#',
							font:'',
						}
					]
				}, {
					id: '003',
					name: '友链',
					font:'fa fa-link',
					url: '#'
				}, {
					id: '004',
					name: '关于',
					font:'fa fa-heart',
					url: '#'
				}
			],
			classObj: {
				hidden: false
			}
		}
	},
	methods: {
		showhidden() {
			console.log(this.classObj.hidden);
			this.classObj.hidden = !this.classObj.hidden
		}
	}
}
</script>

<style>
.drop:hover~.dropdown {
	display: block;
}

.dropdown:hover {
	display: block;
}
</style>