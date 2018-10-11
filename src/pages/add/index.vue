<template>
    <div class='container'>
        <h1>发表文章</h1>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
            }
        },
        methods: {
            
            handleToggle(index) {
                this.$emit('toggleItem', index)
            },
            handleRemove(index) {
                this.$emit('removeItem', index)
            },
        }
    }
</script>

<style scoped>
   
</style>
<style>
    .van-tabbar-item--active{
        color:#ff9900 !important;
    }
</style>