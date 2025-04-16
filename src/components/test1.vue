<template>
  <div class="ai-icon">
    <div v-if="!aichat" class="ai" @click="goChat">
      <img src="@/assets/images/aiIcon.png" alt="">
    </div>
    <div v-if="aichat" class="ai aihover" @click="goChat">
      <span>返回</span>
    </div>
    <!-- <div v-if="!aichat" class="ai aihover" @click="catTop">置顶</div> -->
  </div>

  <div class="content-chat" v-show="aichat">
    <div class="message" id='message-box'>
      <div class="top" style="display: flex;align-items: center;">
        <img style="width: 28px;height: 28px;margin-right: 6px;object-fit: cover;margin-bottom: 4px;"
          src="@/assets/images/robat.png" />
        <span style="margin: 0 28px 0 0;"> AI智能助手</span>
        <select id="myDropdown" v-model="model">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="role-content" id="role-content">
        <div v-for="(msg, index) in msgList" :key="index" :class="{
          'user': msg.role === 'user',
          'assistant': msg.role === 'assistant'
        }">
          <img v-if="msg.role === 'assistant'" class='role-img' src="@/assets/images/aiIcon.png"
            style="margin-right: 8px;" />
          <img class='role-img' style="margin-left: 8px;" src="@/assets/images/bac1.png" v-if="msg.role === 'user'" />
          <div>
            <!-- <div class="load" v-if="msg.role === 'assistant' && isloading">
              <div>思考中...</div>
              <img class="loadimg" src="@/assets/images/loading.svg" alt="">
            </div> -->
            <div class="content-html ass1" v-if="msg.role === 'assistant'" v-highlight v-html="msg.reasoning_content">
            </div>
            <div class="content-html" :class="msg.role === 'assistant' ? 'ass' : 'us'" v-highlight v-html="msg.content">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <textarea rows="5" placeholder="请输入问题" class="text" v-model="msgValue"></textarea>
      <button class="btn" @click="submitMsg">发送</button>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, onUnmounted } from 'vue'
import { userMsgStore } from '@/stores/msgStore'
import { marked } from 'marked'

const msgStore = userMsgStore()
const aichat = ref(false)
const msgValue = ref("")
const model = ref("deepseek-ai/DeepSeek-R1")
const isloading = ref(false)
const msgDom = ref(null)
let controller = new AbortController()

const options = ref([
  { value: 'Qwen/QwQ-32B', text: 'Qwen/QwQ-32B' },
  { value: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B', text: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B' },
  { value: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B', text: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B' },
  { value: 'deepseek-ai/DeepSeek-R1', text: 'deepseek-ai/DeepSeek-R1' },
  { value: 'deepseek-ai/DeepSeek-V3', text: 'deepseek-ai/DeepSeek-V3' },
])

const msgList = ref([...msgStore.list])

onMounted(() => {
  msgDom.value = document.getElementById("role-content")
  scroll()
})

onUnmounted(() => {
  controller.abort()
})

const scroll = () => {
  nextTick(() => {
    if (!msgDom.value) return
    // 使用动画效果
    msgDom.value.scrollTo({
      top: msgDom.value.scrollHeight,
      behavior: 'smooth'
    })
  })
}

const goChat = () => {
  aichat.value = !aichat.value
  document.body.style.overflow = aichat.value ? 'hidden' : 'auto'
  scroll()
}

const isSubmitting = ref(false)
const submitMsg = async () => {
  if (!msgValue.value.trim()) return
  //防止重复提交
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    isloading.value = true
    controller = new AbortController()

    // 添加用户消息
    msgStore.userAddMsg(msgValue.value)
    msgList.value = [...msgStore.list]

    // 添加初始助手消息
    msgStore.addAssistantMessage('', '')
    msgList.value = [...msgStore.list]

    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer sk-ikbdqintkdjvvzouoofbxilnrhcordukkducqdmhttwzhwtj',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model.value,
        stream: true,
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        frequency_penalty: 0.5,
        n: 1,
        messages: [{ content: msgValue.value, role: "user" }]
      }),
      signal: controller.signal
    })

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })

      // 处理完整的数据块
      const chunks = buffer.split('data: ')
      buffer = chunks.pop() || ''

      for (const chunk of chunks) {
        const trimmedChunk = chunk.trim()
        if (!trimmedChunk) continue

        try {
          const data = JSON.parse(trimmedChunk)
          const delta = data.choices[0].delta

          // 更新最后一条消息
          const lastMsg = msgList.value[msgList.value.length - 1]
          if (lastMsg.role === 'assistant') {
            lastMsg.content += delta.content || ''
            lastMsg.reasoning_content += delta.reasoning_content || ''

            // 同步到 store
            // msgStore.aiAddContent(lastMsg)
            msgList.value = [...msgStore.list]


          }
        } catch (e) {
          console.error('解析错误:', e)
        }
      }
    }

  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('请求失败:', error)
    }
  } finally {
    isloading.value = false
    msgValue.value = ""
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
select {
  padding: 5px 12px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loadimg {
  // 旋转
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


.ass {
  background-color: #ffffff;
  max-width: calc(100% - 98px);
  white-space: normal;
}

.ass1 {
  position: relative;
  max-width: calc(100% - 98px);
  color: #8b8b8b;
  line-height: 26px;
  height: 100%;
  white-space: pre-wrap;

  // 文字前面加个丨
  &::before {
    content: '';
    position: absolute;
    margin-top: 8px;
    left: 0;
    width: 2px;
    height: calc(100% - 28px);
    background-color: #d1d1d1;
    display: inline-block;

  }
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

  .ai {
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
  background-color: rgba(0, 0, 0, 0.7);
  // background-color: rgb(219, 222, 255);



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
      white-space: pre-wrap;
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