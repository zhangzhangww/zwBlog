
    const navList=reactive([
        {
        title:'我的',
        icon:'/zwBlog/assets/images/nav/isux.png',
        children:[
          {
          name:'表情包',
          description:'可以快速获取表情包的链接',
          image:'https://bu.dusays.com/2021/01/15/a6068f78ff2b8.gif',
          url:'https://emotion.xiaokang.me/#/emotion/HONKAI3'
          },
    
        ]
        },
        {
        title:'测试',
        icon:'/zwBlog/assets/images/nav/logonews.png',
        children:[
          {
          name:'lkonate',
          description:'免费，样式统一，可调大小、粗细、颜色等参数',
          image:'https://api.yviii.com/ico/get.php?url=http://www.baidu.com',
          url:'http://www.baidu.com'
          },
    
        ]
        },
       
        {
        title:'API接口',
        icon:'/zwBlog/assets/images/nav/iconpark.jpg',
        children:[
          {
          name:'随机视频',
          description:'随机出现视频接口',
          image:'',
          url:'https://api.yviii.com/video/'
          },
          {
          name:'随机图片',
          description:'随机出现图片接口',
          image:'',
          url:'https://api.yviii.com/img/'
          },
          {
          name:'bing每日壁纸',
          description:'Bing官方提供的API接口，作为项目背景图所用。快速地获取精美高清的Bing壁纸，每日自动更新。',
          image:'',
          url:'https://api.yviii.com/bing/'
          },
          {
          name:'随机一言',
          description:'',
          image:'',
          url:'https://api.yviii.com/yiyan/'
          },
          {
          name:'获取favicon图标',
          description:'',
          image:'https://api.yviii.com/ico/get.php?url=https://api.yviii.com/ico/',
          url:'https://api.yviii.com/ico/'
          },
          {
          name:'Magic UI',
          description:'各种动态效果的UI组件库',
          image:'',
          url:'https://magicui.design/docs/installation'
          },
          {
          name:'维梦API合集',
          description:'各类api',
          image:'',
          url:'https://api.52vmy.cn/'
          },
          {
          name:'遇见API合集',
          description:'各类api',
          image:'',
          url:'https://api.yujn.cn/'
          },
    
        ]
        },
        {
        title:'icon',
        icon:'/zwBlog/assets/images/nav/iconfont.png',
        children:[
        {
          "name": "Iconfont",
          "description": "免费，中文，图标数量丰富，包含插画资源",
          "url": "https://www.iconfont.cn",
          "image": "/zwBlog/assets/images/nav/iconfont.png"
        },
        {
          "name": "Ikonate",
          "description": "免费，样式统一，可调大小、粗细、颜色等参数",
          "url": "https://ikonate.com",
          "image": "/zwBlog/assets/images/nav/ikonate.jpg"
        },
        {
          "name": "IconPark",
          "description": "免费，规范、统一、多风格切换",
          "url": "https://iconpark.oceanengine.com/home",
          "image": "/zwBlog/assets/images/nav/iconpark.jpg"
        },
        {
          "name": "ICONS8",
          "description": "多风格",
          "url": "https://icons8.com",
          "image": "/zwBlog/assets/images/nav/icons8.jpg"
        },
        {
          "name": "seeklogo",
          "description": "500000+ 个品牌 logo 图片，包含 png 和矢量格式",
          "url": "https://seeklogo.com",
          "image": "/zwBlog/assets/images/nav/seeklogo.png"
        },
        {
          "name": "Fey's logo database",
          "description": "按字母排序的LOGO资源",
          "url": "https://www.fey.com/logos",
          "image": ""
        },
        {
          "name": "ICONFINDER",
          "description": "类型丰富的图标库",
          "url": "https://www.iconfinder.com",
          "image": "/zwBlog/assets/images/nav/iconfinder.jpg"
        },
        {
          "name": "LOGONEWS",
          "description": "专注LOGO新闻和品牌设计咨询报道",
          "url": "https://www.logonews.cn",
          "image": "/zwBlog/assets/images/nav/logonews.png"
        },
        {
          "name": "Logoipsum",
          "description": "多种风格的LOGO占位符",
          "url": "https://logoipsum.com",
          "image": "/zwBlog/assets/images/nav/logoipsum.svg"
        },
        {
          "name": "Iconoir",
          "description": "免费，线性图标",
          "url": "https://iconoir.com/",
          "image": "/zwBlog/assets/images/nav/iconoir.svg"
        },
        {
          "name": "Logo Design Love",
          "description": "关于LOGO设计的资料、书籍",
          "url": "https://www.logodesignlove.com",
          "image": "/zwBlog/assets/images/nav/logodesignlove.png"
        },
        {
          "name": "macOS Icon Gallery",
          "description": "Mac 应用图标库",
          "url": "https://www.macosicongallery.com/",
          "image": "/zwBlog/assets/images/nav/icon-gallery.png"
        },
        {
          "name": "Remix Icon",
          "description": "免费，精致统一的开源图标",
          "url": "https://remixicon.com",
          "image": "/zwBlog/assets/images/nav/remix.jpg"
        },
        {
          "name": "Tabler Icons",
          "description": "免费，可在线调节颜色、尺寸",
          "url": "https://tablericons.com/",
          "image": ""
        },
        {
          "name": "Branding Style Guides",
          "description": "品牌视觉设计指南",
          "url": "https://brandingstyleguides.com",
          "image": "/zwBlog/assets/images/nav/branding-style-guides.svg"
        },
        {
          "name": "Lordicon",
          "description": "动画图标库",
          "url": "https://lordicon.com/",
          "image": "/zwBlog/assets/images/nav/lordicon.png"
        },
        {
          "name": "Iconscout",
          "description": "精美丰富，包含很多冷门类型",
          "url": "https://iconscout.com",
          "image": "/zwBlog/assets/images/nav/iconscout.jpg"
        },
        {
          "name": "Emoji XD",
          "description": "线上Emoji百科全书，支持关键词搜索",
          "url": "https://emojixd.com",
          "image": "/zwBlog/assets/images/nav/emojixd.jpg"
        },
        {
          "name": "Logobook",
          "description": "以字母、数字、形状、物体、自然、行业分类的黑白LOGO",
          "url": "http://www.logobook.com",
          "image": ""
        }
        ]
        },
        
    
    ])
   
    export default   navList
    
