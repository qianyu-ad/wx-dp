<template>
    <div class="cont">
        <!-- 首页 -->
        <div v-show="showPage=='home'">
            <!-- <van-search :value="value" placeholder="请输入搜索关键词" /> -->
            <div class="banner">
                <!-- <div class="banner-img" :style="{'background-image':'url('+imageURL+')'}"></div> -->
                <div class="banner-img" :style="{'background-image':'url(http://c1.haibao.cn/img/600_0_100_1/1532675134.8818/00f7cc85e99abe8226d1606d794f540a.jpg)'}"></div>

            </div>
            <div class="content">
                <div v-for="i in 6" :key="i" class="card" :style="{'background-image':'url(http://seopic.699pic.com/photo/50038/5465.jpg_wh1200.jpg)'}">
                    <div class="card-mask">职场</div>
                    <div class="card-info">
                        <div class="card-info-l">
                            <img class="card-avatar" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erdaa8d4icn2cfyV8e3N0Eto8uN5WicxKW02BtGhIibETSSibSBdqKRbF01NGngWaImrY0MBMQuCFoEbw/132" alt="">
                            <span class="card-un">千雨</span>
                        </div>
                        <div class="card-info-r">
                            <i-icon type="browse" class="card-icon" size="20" color="#fff" />
                            <span class="card-count card-count-mar">1113</span>
                            <i-icon type="like" class="card-icon" size="20" color="#f40" />
                            <span class="card-count card-count-mar">124</span>
                            <i-icon type="message" class="card-icon" size="20" color="#2d8cf0" />
                            <span class="card-count">36</span>
                        </div>
                    </div>
                </div>
                <button open-type="getUserInfo">测试授权</button>
                <button open-type="getUserInfo" @tap="gg">测试授权2</button>
            </div>
        </div>
        <!-- 我 -->
        <div v-show="showPage=='setting'" class="w100">
            <div class="user-info">
                <img :src="userInfo.avatarUrl" alt="" class="avatar">
                <div class="name">{{userInfo.nickName}}</div>
            </div>

            <div class="sw">
                <van-cell custom-class="mart" title="分享小程序" icon="share" is-link url="/pages/share/main" :border="false" />
                <van-cell custom-class="mart" title="我的文章" icon="pending-orders" is-link :border="false" />
                <van-cell custom-class="" title="我的收藏" icon="browsing-history" is-link :border="false" />
                <van-cell custom-class="" title="意见反馈" icon="chat" is-link url="/pages/feedback/main" :border="false" />
                <van-cell custom-class="mart" title="关于我们" icon="contact" is-link url="/pages/about/main" :border="false" />
            </div>
        </div>
        <van-tabbar :active="0" class="tabbar" z-index="100">
            <van-tabbar-item icon="home" @tap="showPage='home'">首页</van-tabbar-item>
            <van-tabbar-item icon="add2" @click="goAdd" class="add"></van-tabbar-item>
            <van-tabbar-item icon="contact" @tap="showPage='setting'">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import card from '@/components/card'
    export default {
        data () {
            return {
                motto: 'Hello World211',
                userInfo: {},

                // active: 0
                
                current: 'homepage',
                imageURL: 'http://misc.aotu.io/Chen-jj/waterful_5.jpg',
                showPage: 'home'
            }
        },
        components: {
            card
        },
        methods: {
            
            goList(){
                // const url = "../list/main?id=" + this.option
                const url = "../add/main";
                wx.navigateTo({url})
            },
            onChange(event) {
                console.log(event);
            },
            goAdd(){
                const url = "../add/main";
                wx.navigateTo({url})
            },


            // 
            getUserInfo () {
            // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                console.log(res.userInfo)
                                this.userInfo = res.userInfo
                            }
                        })
                    }
                });
            },

            gg(){
                wx.getSetting({
                    success: function(res){
                        console.log(res)
                        if (res.authSetting['scope.userInfo']) {
                            wx.getUserInfo({
                                success: function(res) {
                                    console.log(res.userInfo)
                                //用户已经授权过
                                }
                            })
                        }
                    }
                })
            }
     
        },
        created () {
            this.getUserInfo();
        }
    }
</script>

<style>
    page{
        background: #f5f6f5;
    }
    .tabbar .van-tabbar--fixed{
        bottom:-1px !important;
    }
    .w100{
        width:100%;
    }
    .cont{
        padding-bottom: 60px;
    }
    .cont .van-tabbar-item{
        color:#888;
        /*font-size: 11px;*/
    }
    .cont .van-tabbar-item--active{
        color:#fff;
    }
    .cont .van-tabbar{
        background-color: #000;
    }
    .add .van-tabbar-item__icon{
        margin-bottom:0;
        font-size:36px;
        margin-top:5px;
        color:#fff;
    }

    .banner{
        height:160px;
    }
    .banner .banner-img{
        width:100%;
        height:100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .iview-card{
        margin-top: 10px;
    }
    .card{
        height:160px;
        margin:12px;
        background:#fff;
        border:1px solid #f0f0f0;
        border-radius: 2px;
        position: relative;
        background-size: cover;
        background-position: center;
    }
    .card-mask{
        height:24px;
        line-height: 24px;
        padding:0 20px;
        font-size: 10px;
        background-color: rgba(0,0,0,.35);
        color:#fff;
        position: absolute;
        left:20px;
        top:15px;
        border-radius: 2px;
    }
    .card-mask:before{
        content:' ';
        display: block;
        width:10px;
        border-bottom: 1px solid #fff;
        position: absolute;
        top:12px;
        left:7px;
    }
    .card-mask:after{
        content:' ';
        display: block;
        width:10px;
        border-bottom: 1px solid #fff;
        position: absolute;
        top:12px;
        right:7px;
    }
    .card-info{
        position: absolute;
        bottom:0;
        right:0;
        left:0;
        padding:5px 15px;
        height:28px;
        overflow: hidden;
        background-color: rgba(0,0,0,.3)
    }
    .card-info-l{
        float: left;
        text-align: right;
    }
    .card-info-r{
        float: right;
        text-align: right;
    }
    .card-avatar{
        float: left;
        width:28px;
        height:28px;
        display: block;
        border-radius: 50%;
        margin-right: 4px;
    }
    .card-un{
        color:#fff;
        display: block;
        width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 11px;
        line-height: 28px;
        text-align: left;
    }
    .card-icon{
        vertical-align: middle;
    }
    .card-count{
        font-size: 10px;
        color:#fff;
        margin-right: 1px;
    }
    .card-count-mar{
        margin-right: 10px;
    }




    .user-info{
        background-color: #000;
        height:60px;
        overflow:hidden;
        padding:30px 22px;
        width:100%;
        display: block;
    }
    .avatar{
        width:70px;
        height:70px;
        border-radius: 50%;
        float: left;
    }
    .name{
        font-weight: 700;
        font-size: 16px;
        line-height: 80px;
        color:#fff;
        margin-left: 15px;
        float: left;
    }
    .sw .mart{
        margin-top: 15px;
    }

</style>
