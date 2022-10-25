<template>
    <div class="navbar bg-base-100 shadow-xl fixed opacity-75">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Cheny's Blog</a>
        </div>
        <div class="flex-none text-xs">
            <ul class="menu menu-horizontal p-0 ">
                <li tabindex="0" >
                    <a>
                        目录
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </a>
                    <ul class="p-2 bg-base-100 shadow-2xl" >
                        <li><a>归档</a></li>
                        <li><a>标签</a></li>
                        <li><a>分类</a></li>
                    </ul>
                </li>
                <li tabindex="0">
                    <a>
                        常见工具
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </a>
                    <ul class="p-2 bg-base-100 shadow-2xl">
                        <li><a>Cheny's 图床</a></li>
                        <li><a>Cheny's 云盘</a></li>
                    </ul>
                </li>
                <li><a>友链</a></li>
                <li><a>关于</a></li>
                <li tabindex="0">
                    <a>
                        其他站点
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </a>
                    <ul class="p-2 bg-base-100 shadow-2xl">
                        <li><a>Cheny's 图床</a></li>
                        <li><a>Cheny's 云盘</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

</style>