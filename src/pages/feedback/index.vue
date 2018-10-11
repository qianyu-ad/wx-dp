<template>
    <div class='fpg'>
        <textarea class="remark" v-model="value" placeholder="请输入您的反馈信息"></textarea>
        <van-button class="submit" type="primary" :block="true" @tap="submit">提交</van-button>
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
            
            submit(){
                console.log(this.value)
            }
        }
    }
</script>

<style>
    .fpg{
        height:100%;
    }
    .remark{
        width:100%;
        padding:6px;
        font-size: 12px;
        background:#fff;
        height: calc(100% - 80px);
    }
    .submit{
        position: fixed;
        width:100%;
        bottom:0;
        left:0;
    }
    page{
        height:100%;
        background-color: #e0e0e0;
    }
</style>