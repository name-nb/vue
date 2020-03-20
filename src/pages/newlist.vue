<template>
  <div>
    <div class="newlist">
        <div class="newlist1">
            新闻资讯
        </div>
        <div class="newlist2">
            图片分享
        </div>
        <div class="newlist3">
            商品购买
        </div>
        <div class="newlist4">  
            留言反馈
        </div>
        <div class="newlist5">
            视频专区
        </div>
        <div class="newlist6">
            联系我们
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'newlist',
}
</script>

<style>
.newlist{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8rem;
    padding: 0.5rem;
    text-align: center;
}
.newlist div{
    width: 20%;
    height: 2rem;
     padding: 0.5rem;
    outline: solid 1px black;
}
</style>