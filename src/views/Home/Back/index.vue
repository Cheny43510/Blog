<template>
    <div class="hidden md:block h-screen">
        <div class="bg-backimg w-full h-full">
            <div class="flex flex-col justify-end items-center h-full">
                <h1 class="text-6xl font-semibold mb-6">{{ persin }}</h1>
                <div class="mb-72 after:animate-cursor whitespace-nowrap overflow-hidden font-mono text-3xl
                after:inline-block after:w-1 after:ml-3 after:h-8 after:align-sub after:bg-black">{{ text }}</div>
                <div class="relative -z-10 bottom-8 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                        <path fill-rule="evenodd"
                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Back',
    data() {
        return {
            persin: '自律自信冷静',
            inittext: "庭前落尽梧桐，水边开彻芙蓉。",
            index: -1,
            text: ''
        }
    },
    methods: {
        autoTyping() {
            this.index++
            this.text = this.inittext.slice(0, this.index)
            if (this.text.length === this.inittext.length) {
                this.index = -1
            }

        }
    },
    mounted() {
        setInterval(() => {
            this.autoTyping()
        }, 400)
    }
}
</script>

<style>

</style>