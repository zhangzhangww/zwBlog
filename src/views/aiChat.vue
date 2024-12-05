<template>
	
	<div class="box">
        
       
        <div class="message">
            <div class="wenti">
                <div>

                    <input type="text" placeholder="输入水果帮你测热量" v-model="message"> <button @click="send">查看热量</button> <button @click="chat">对话</button> <button @click="eng">翻译为英文</button>
                </div>
            </div>
            <div class="null" v-if="!reply.length>0">
                <img src='https://bu.dusays.com/2021/01/15/6ed1dad31d260.gif' alt='25'>
                快去搜索吧
            </div>
            <div class="content" v-if="reply.length>0">
                <div class="content1" v-for="item,index in reply" :key="index">
                    
                    <!-- <p>名称：{{ item.name }}</p> -->
                    <p>{{ item.title }}</p>
                    <p>{{ item.heat }}</p>
                </div>
                {{ ceshi.target }}
                {{ ceshi }}
            </div>
        </div>
	
	
	</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const message = ref('')
const reply = ref('')
const ceshi=ref('')
const send=()=>{
    axios.get(`https://api.52vmy.cn/api/query/food?food=${message.value}`
).then((res) => {
    reply.value = res.data.data
    console.log(res)
    console.log(reply.value)
})
}

const eng=()=>{
    axios.get(`https://api.52vmy.cn/api/query/fanyi/youdao?msg=${message.value}`
).then((res) => {
    ceshi.value = res.data.data
    console.log(res)
    console.log(reply.value)
})
}
const chat=()=>{
    axios.get(` http://api.yujn.cn/api/ff.php?msg=${message.value}`
).then((res) => {
    ceshi.value = res.data
    console.log(res)
    console.log(reply.value)
})
}

</script>

<style scoped>
.null{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    top: 52%;
    transform: translate(-50%,-50%);
}
img{
    width: 100px;
    height: 100px;
}
.wenti{
   display: flex;
   justify-content: center;
   align-items: center;
    width: 1398px;
    height: 60px;
    background: #83dbfd;
    position: fixed;
    border-bottom: 1px solid #999;
}
input{
    margin: auto;
	width: 800px;
	height: 40px;
    border-radius: 4px;
	
}
button{
   
    background: #2299DD;
    color: #fff;
}
.content{
   
    padding: 10px;
    margin: 60px 20px 20px 20px;
    
}
.content1{
    padding: 10px;
    margin-bottom: 12px;
    background: rgb(236, 239, 239);
    border-radius: 4px;
    border: 1px solid #999;
}
.box{
	width: 1400px;
	height: 800px;
	background-color: #fff;
    margin-top: 60px;
}
.message{
   
	width: 100%;
	height: 100%;
	border: 1px solid #000;
    margin-bottom: 20px;
    overflow: auto;
}


</style>