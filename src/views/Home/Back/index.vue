<template>
    <div class="h-screen">
        <div class="svg">
            <div class="flex flex-col space-y-8 justify-center items-center h-full">
                <h1 class="text-6xl font-serif ">{{persin}}</h1>
                <div class="word w-100px  whitespace-nowrap overflow-hidden font-mono text-6xl">{{ text }}</div>
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
        }, 350)
    }
}
</script>

<style>
.svg {
    width: 100%;
    height: 100%;
    background-image: url("./images/bg-logo.svg");
}

.word {
    width: 28ch;
    animation: typin 2.5s forwards;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}

.word::after {
    content: '';
    display: inline-block;
    /* position: absolute; */
    width: 10px;
    margin-left: 12px;
    height: 4rem;
    /* line-height: 16px; */
    vertical-align: bottom;
    background-color: #000;
    /* border-radius: 10px; */
    animation: cursor 1s steps(2, jump-none) infinite;
}

@keyframes cursor {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes typing {
    0% {}

    to {
        width: 28ch;
    }
}
</style>