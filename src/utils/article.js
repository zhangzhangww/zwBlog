import { reactive } from "vue"

const articleList = reactive([
    { id: 1, 
    createtime: '2024-03-01',
    title: '未来三年，请主动给生活降级',
    content: ` <h1>linux # 时区同步</h1>
               <p>系统时间与现实时间不一致</p>
                <p>网上的办法也无法快速解决，都是什么乱七八兆的搞法，麻烦得要死</p>
                <p>快速解决方法</p>
                <pre>
                <code class="lang-antlr4">                # 更改时区
                timedatectl set-timezone 'Asia/Shanghai'
                # 添加软连接
                ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
                # 重启
                reboot</code>
                </pre>
               <p>完成</p>
                <div class="Copyrightnew">
                    本文来自投稿，不代表本站立场，如若转载，请注明出处：<input id="informationurl"
                        value="https://www.yvii.cn/archives/2044.html">
                </div>`,
    fenlei: '精品分享',
    desc:'在Linux系统中，当系统时间与现实时间出现不一致时，可以通过快速解决方法实现时区同步。首先，使用命令timedatectl set-timezone Asia/Shanghai来更改时区为亚洲/上海；然后，通过创建软连接ln -sf/usr/share/zoneinfo/Asia/Shanghai/etc/localtime来确保系统使用正确的时区信息；最后，重新启动系统以应用更改。这种简单而有效的方法可以快速解决时区同步问题，避免繁琐且无效的搞法，提高系统时间与现实时间的一致性。',
},
    { id: 2, 
    title: '未来si年，请主动给生活降级',
    content: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    desc: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    fenlei: '精品分享',
},
    { id: 3, 
    title: '未来三年，请主动给生活降级',
    content: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    desc: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    fenlei: '精品分享',
},
    { id: 4, 
    title: '未来三年，请主动给生活降级',
    content: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    desc: '这是QQ邮箱给我推的文章 【 查看原文】,大意如下:任正非曾在华为内部论坛发言时说:接下来3年,华为要将“活去”作为主要纲领。企业寒意阵阵，其中的个人…',
    fenlei: '精品分享',
},
])

export default  articleList
