<template>
  <div class="ai-icon" >
    <div v-if="!aichat" class="ai" @click="goChat">
      <img  src="@/assets/images/aiIcon.png" alt="">
    </div>
    <div  v-if="aichat" class="ai aihover" @click="goChat">
      <span>返回</span>
    </div>
    <!-- <div v-if="!aichat" class="ai aihover" @click="catTop">置顶</div> -->
  </div>

  <div class="content-chat" v-show="aichat">

    <div class="message" id='message-box'>
      <div class="top">
        <img style="width: 28px;height: 28px;margin-right: 6px;object-fit: cover;margin-bottom: 4px;" src="@/assets/images/robat.png"  />
        AI智能助手
      </div>
      <div class="role-content" id="role-content">

        <div v-for="(msg, index) in msgList" :key="index" :class="{
          'user': msg.role === 'user',
          'assistant': msg.role === 'assistant'
        }">

          <img v-if="msg.role === 'assistant'" class='role-img' src="@/assets/images/aiIcon.png"
            style="margin-right: 8px;" />
          <img class='role-img' style="margin-left: 8px;" src="@/assets/images/bac1.png" v-if="msg.role === 'user'" />
          <div class="content-html" :class="msg.role === 'assistant' ? 'ass' : 'us'" v-highlight v-html='msg.content'></div>
        </div>
      </div>
    </div>


    <div class="footer">
      <textarea rows="5" placeholder="请输入问题" class="text" v-model="msgValue">
      </textarea>
      <button class="btn" @click="submitMsg">发送</button>

    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import TTSRecorder from "@/utils/TTSRecorder"
import { userMsgStore } from '@/stores/msgStore'
const aichat = ref(false)
const msgStore = userMsgStore()
const msgValue = ref("")
let ttsRecorder = new TTSRecorder()
const msgList = ref([])
let msgDom = ref(null)
 
onMounted(() => {
  msgDom.value = document.getElementById("role-content")
  msgList.value = msgStore.list
  scroll()
})
 //点击后跳转至顶部
 const catTop = () => {
  nextTick(() => {
        document.documentElement.scrollTop = document.body.scrollTop = 0
      })
  }
// 滚动到最底部
const scroll = () => {
  nextTick(() => {
    msgDom.value.scrollTop = msgDom.value.scrollHeight
  })
}
const goChat = () => {
  aichat.value = !aichat.value
  scroll()
  
}

// 发送消息
const submitMsg = async () => {
  msgStore.userAddMsg(msgValue.value)
  msgValue.value = ""
  // 开始提问
  ttsRecorder.start(msgStore, msgDom)
  scroll()
}
</script>

<style scoped lang="scss">
.ass {
  background-color: #ffffff
}

.us {
  background: linear-gradient(78deg, #6740FD 0%, #4495F9 99%);
  color: #ffffff;
}

.ai-icon {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4%;
  bottom: 20%;
  z-index: 9999;
 
  .ai{
    margin-bottom: 12px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;



  }
  .aihover:hover {
    background-color: #6740FD;
    color: #fff;
  }
  
}

.content-html {
  max-width: calc(100% - 98px);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}


.content-chat {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: rgb(219, 222, 255);



  .message {
    position: relative;
    max-width: 800px;
    width: 60%;
    height: 76%;
    margin: 40px auto 20px;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-color: #ffffff;

    .role-content {
    min-height: calc(100% - 80px);
      padding: 20px;
      background-color: rgb(238, 240, 246);
      margin: 20px 10px 20px 20px;
      margin-top: 60px;
      border-radius: var(--border-radius);
      overflow: auto;
    }

    .top {
      font-family: "HarmonyOS_Sans_SC_Medium";
      position: fixed;
      border-radius: var(--border-radius);
      height: 60px;
      line-height: 60px;
      padding-left: 40px;
      background-color: #ffffff;
      font-size: 1.8rem;

    }

    .user {
      padding: 15px 0;
      box-sizing: border-box;
      display: flex;
      align-items: self-start;
      // 从右向左排列
      flex-direction: row-reverse;

    }

    .assistant {
      padding: 15px 0;
      box-sizing: border-box;
      display: flex;
      align-items: self-start;

      img {
        min-width: 40px;
        height: 40px;

      }
    }
  }

  .footer {
    position: relative;
    margin: auto;
    max-width: 800px;
    width: 60%;


    .text {
      height: 100px;
      width: 100%;
      padding: 20px;
      border-radius: var(--border-radius);

    }

    .btn {
      position: absolute;
      top: 32%;
      right: 3%;
      width: 100px;
      height: 40px;
      background: linear-gradient(78deg, #6740FD 0%, #4495F9 99%);
      color: white;
    }


  }

  @media screen and (max-width: 768px) {

    .message,
    .footer {
      left: 0;
      right: 0;
    }

    .message {
      bottom: 100px;
    }

    .footer {
      bottom: 10px;
    }
  }
}

.imgbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  .name {
    font-size: 13px;
    color: #fd919e;
    font-weight: 400;
  }
}

.role-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
</style>