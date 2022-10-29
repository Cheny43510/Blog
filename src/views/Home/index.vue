<template>
    <div>
        <Back />
        <Show />
    </div>
</template>

<script>
import Back from './Back'
import Show from './Show'
export default {
    name: '',
    components:{
        Back,Show
    },
    mounted(){
        console.log('首页');
    }
}
</script>

<style>

</style>