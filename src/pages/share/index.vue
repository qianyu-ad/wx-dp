<template>
    <div class='share-page'>
        <div class="ct">
            
        </div>
        <div class="ctrl">
            <button class="ctrl-btn" open-type="share">
                <i-icon type="share" size="20" />
                发送给好友
            </button>
            <button class="ctrl-btn download">
                <i-icon type="task" size="20" />
                保存图片
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                s: ''
            }
        },
        created(){
            wx.showShareMenu({
                withShareTicket: true
            })

            wx.request({
                url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=14_5Pfhg4NY_oyJRpjIdP3rmIyDm_8g7-QIr-ZKCLkx2OHUpmsGGuEdA4XWB2FpmD6R-CFEIwwjNPf7a2IpxPgVucntlLgfcQRqtTPRev0-mWeseHRUXmHQKB7I5XoSYOMgXjtaZPIQyjtTDffbCHIeABAHMN',
                method: 'POST',
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function(res) {
                    console.log(res.data)
                }
            })
        },
        methods: {
            
            share(){
                console.log(1)
                // Page.onShareAppMessage()
            }  
        }
    }
</script>


<style>
    .ct{
        margin: 30px 20px 10px;
        height: calc(100% - 104px);
        background-color: #000;
    }
    .ctrl{
        position: fixed;
        bottom:0;
        left:20px;
        height:64px;
        padding-top: 8px;
        padding-bottom: 8px;
        overflow: hidden;
        width:calc(100% - 40px);
    }
    .ctrl-btn{
        width:calc(50% - 8px);
        float: left;
        text-align:center;
        vertical-align:middle;
        touch-action:manipulation;
        cursor:pointer;
        background-image:none;
        white-space:nowrap;
        user-select:none;
        font-size:14px;
        border-radius:2px;
        position:relative;
        text-decoration:none;
        height:44px;
        line-height:44px;
        box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);
        color:#fff;
        background:#4e6584;
    }
    
    .download{
        float: right;
    }
    page{
        height:100%;
        background-color: #192044;
    }

</style>