<template>
    <div class="h-screen">
        <div class="bg-backimg w-full h-full">
            <div class="flex flex-col space-y-8 justify-center items-center h-full">
                <h1 class="text-6xl font-serif ">{{persin}}</h1>
                <div class="after:animate-cursor whitespace-nowrap overflow-hidden font-mono text-6xl
                after:inline-block after:w-3 after:ml-3 after:h-16 after:align-bottom after:bg-black">{{ text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Back',
    data() {
        return {
            persin:'自律自信冷静',
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