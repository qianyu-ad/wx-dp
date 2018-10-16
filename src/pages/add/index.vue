<template>
    <div class='container'>
        <h1>发表文章</h1>
        <div>{{userInfo.nickName}}</div>
        <open-data type="userAvatarUrl"></open-data>
        <open-data type="userGender" lang="zh_CN"></open-data>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                userInfo: {}
            }
        },
        created(){
            this.getUserInfo();
        },
        methods: {
            
            handleToggle(index) {
                this.$emit('toggleItem', index)
            },
            handleRemove(index) {
                this.$emit('removeItem', index)
            },
            getUserInfo () {
            // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                console.log(res.userInfo)
                                this.userInfo = res.userInfo
                            },
                            
                        })
                    }
                });
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