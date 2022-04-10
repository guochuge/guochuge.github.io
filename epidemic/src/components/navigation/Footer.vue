<template>

<div id="footer">
    <div class="end">
        <ul>
            <li>©2022 益苗 |</li>
            <li><a href="#">&nbsp;关于益苗</a>|</li>
            <li><a href="#">&nbsp;服务协议 </a>|</li>
            <li><a href="#">&nbsp;隐私政策 </a>|</li>
            <li><a href="#">&nbsp;投诉反馈 </a>|</li>
            <li><a href="#">&nbsp;开放平台 </a>|</li>
            <li><a href="#">&nbsp;商务洽谈 </a>|</li>
            <li><a href="#">&nbsp;客服中心 </a>|</li>
            <li><a href="#">&nbsp;网站导航</a></li>
        </ul>
        <br>
        <ul>
            <li><a href="#">吴彦祖集团 </a>| </li>
            <li><a href="#">&nbsp;广金银行 </a>|</li>
            <li><a href="#">&nbsp;钉钉 </a>|</li>
            <li>&nbsp;&nbsp;经营许可编号： 合字A1-20220046</li>
            <li>&nbsp;&nbsp;网站备案：粤ICP备13140021号-1</li>
        </ul>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style>
#footer{
    margin-top: -1rem ;
    height: 7rem;
    font-size: 0.6rem;
    background-color: #fff;
    /* background: linear-gradient(rgb(154, 219, 223),rgb(136, 222, 226)); */
}
#footer a:link {
    text-decoration: none;
    color: rgb(30, 27, 41);
}
#footer a:visited {
    color: grey;
}
#footer a:hover {
    font-weight: bold;
}
#footer a:active {
    color: yellow;
}
#footer ul li{
    list-style: none;
    float: left;
}
.end{
    width: 50rem;
    height: 2rem;
    margin: 0 auto;
    padding-top:  2rem;
    margin-top: 0rem;
    margin-left:23rem ;
}
</style>