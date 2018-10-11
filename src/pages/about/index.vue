<template>
    <div class=''>
        <div class="logo">
            <img src="../../static/img/logo.jpg" alt="">
        </div>
        <div class="info">
            <div class="info-title">关于我们</div>
            <div class="info-cont">随便穿，随便好看，发现新的自己，穿出我新生,随便穿，随便好看，发现新的自己，穿出我新生,随便穿，随便好看，发现新的自己，穿出我新生~</div>
        </div>
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
            
            
            
        }
    }
</script>


<style>
    .logo{
        width:120px;
        height:120px;
        background:#dee5ea;
        margin:40px auto;
        overflow: hidden;
    }
    .logo img{
        display: block;
        width: 100px;
        height: 100px;
        margin:10px auto;
        border-radius: 50%;
    }
    .info{
        border-top: 1px solid #dee5ea;
    }
    .info-title{
        line-height: 30px;
        font-size: 16px;
        color:#333;
        padding:10px 15px 5px;
    }
    .info-cont{
        line-height: 24px;
        font-size: 13px;
        color:#aaa;
        padding:0 15px;
    }

</style>