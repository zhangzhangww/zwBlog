import{u as b,_ as O,r as l,f as s,h as i,F as d,k as g,x as m,y as f,e as a,l as L,A as M,j as N,z as u}from"./index-pjpQ3ACe.js";import{_ as B}from"./castalia-CjF9NGUo.js";const y=b([{title:"我的",icon:"/assets/images/nav/isux.png",children:[{name:"表情包",description:"可以快速获取表情包的链接",image:"https://bu.dusays.com/2021/01/15/a6068f78ff2b8.gif",url:"https://emotion.xiaokang.me/#/emotion/HONKAI3"}]},{title:"百度",icon:"/assets/images/nav/logonews.png",children:[{name:"lkonate",description:"搜索引擎",image:"",url:"http://www.baidu.com"}]},{title:"API接口",icon:"/assets/images/nav/iconpark.jpg",children:[{name:"随机视频",description:"随机出现视频接口",image:"",url:"https://api.yviii.com/video/"},{name:"随机图片",description:"随机出现图片接口",image:"",url:"https://api.yviii.com/img/"},{name:"bing每日壁纸",description:"Bing官方提供的API接口，作为项目背景图所用。快速地获取精美高清的Bing壁纸，每日自动更新。",image:"",url:"https://api.yviii.com/bing/"},{name:"随机一言",description:"",image:"",url:"https://api.yviii.com/yiyan/"},{name:"获取favicon图标",description:"",image:"https://api.yviii.com/ico/get.php?url=https://api.yviii.com/ico/",url:"https://api.yviii.com/ico/"},{name:"Magic UI",description:"各种动态效果的UI组件库",image:"",url:"https://magicui.design/docs/installation"},{name:"维梦API合集",description:"各类api",image:"",url:"https://api.52vmy.cn/"}]},{title:"icon",icon:"/assets/images/nav/iconfont.png",children:[{name:"Iconfont",description:"免费，中文，图标数量丰富，包含插画资源",url:"https://www.iconfont.cn",image:""},{name:"Ikonate",description:"免费，样式统一，可调大小、粗细、颜色等参数",url:"https://ikonate.com",image:""},{name:"IconPark",description:"免费，规范、统一、多风格切换",url:"https://iconpark.oceanengine.com/home",image:""},{name:"ICONS8",description:"多风格",url:"https://icons8.com",image:""},{name:"seeklogo",description:"500000+ 个品牌 logo 图片，包含 png 和矢量格式",url:"https://seeklogo.com",image:""},{name:"Fey's logo database",description:"按字母排序的LOGO资源",url:"https://www.fey.com/logos",image:""},{name:"ICONFINDER",description:"类型丰富的图标库",url:"https://www.iconfinder.com",image:""},{name:"LOGONEWS",description:"专注LOGO新闻和品牌设计咨询报道",url:"https://www.logonews.cn",image:""},{name:"Logoipsum",description:"多种风格的LOGO占位符",url:"https://logoipsum.com",image:""},{name:"Iconoir",description:"免费，线性图标",url:"https://iconoir.com/",image:""},{name:"Logo Design Love",description:"关于LOGO设计的资料、书籍",url:"https://www.logodesignlove.com",image:""},{name:"macOS Icon Gallery",description:"Mac 应用图标库",url:"https://www.macosicongallery.com/",image:""},{name:"Remix Icon",description:"免费，精致统一的开源图标",url:"https://remixicon.com",image:""},{name:"Tabler Icons",description:"免费，可在线调节颜色、尺寸",url:"https://tablericons.com/",image:""},{name:"Branding Style Guides",description:"品牌视觉设计指南",url:"https://brandingstyleguides.com",image:""},{name:"Lordicon",description:"动画图标库",url:"https://lordicon.com/",image:""},{name:"Iconscout",description:"精美丰富，包含很多冷门类型",url:"https://iconscout.com",image:""},{name:"Emoji XD",description:"线上Emoji百科全书，支持关键词搜索",url:"https://emojixd.com",image:""},{name:"Logobook",description:"以字母、数字、形状、物体、自然、行业分类的黑白LOGO",url:"http://www.logobook.com",image:""}]}]),G={class:"navigation-ui"},S={class:"nav-content"},E={class:"mulu"},j={class:"mulu1"},A=["href","onClick"],C=["src"],X={class:"link-box"},D=["id"],F={class:"link-content"},P=["href"],$={class:"link-left"},z=["src"],V={class:"link-right"},R={__name:"Navigation",setup(T){const h=l(0),k=(t,c)=>{h.value=t,document.getElementById(t).scrollIntoView({behavior:"smooth"})},v=l(0),_=l(0),r=l({transition:"transform 0.3s",transform:"translate(0px, 0px)"}),p=l({transition:"transform 0.3s",transform:"translate(0px, 0px)"}),w=t=>{v.value=t.clientX,r.value.transition="none",p.value.transition="none"},x=t=>{_.value=t.clientX;const c=_.value-v.value,e=c/18,o=-c/40;r.value.transform=`translate(${e}px, 0px)`,p.value.transform=`translate(${o}px, 0px)`},I=()=>{r.value.transition="transform 0.3s",r.value.transform="translate(0px, 0px)",p.value.transform="translate(0px, 0px)"};return(t,c)=>(a(),s("div",G,[i("div",S,[i("div",E,[i("div",j,[(a(!0),s(d,null,g(m(y),(e,o)=>(a(),s("div",{key:o},[i("a",{href:"#"+o,class:L(["mulu-item",o==m(h)?"active":""]),onClick:M(n=>k(o),["prevent"])},[i("img",{src:e.icon,alt:""},null,8,C),N(" "+u(e.title),1)],10,A)]))),128))])]),i("div",X,[i("div",{class:"banner",onMouseenter:w,onMousemove:x,onMouseleave:I},[i("div",{class:"png",style:f(m(r))},c[0]||(c[0]=[i("img",{src:B,alt:"Background"},null,-1)]),4),i("p",{style:f(m(p))},"不止设计",4)],32),(a(!0),s(d,null,g(m(y),(e,o)=>(a(),s("div",{class:"link",key:e.name},[i("h2",{id:o},u(e.title),9,D),i("div",F,[(a(!0),s(d,null,g(e.children,n=>(a(),s("a",{href:n.url,class:"link-item",key:n.name,target:"_blank"},[i("div",$,[i("img",{src:n.image?n.image:`https://api.yviii.com/ico/get.php?url=${t.url=n.url}`,alt:""},null,8,z)]),i("div",V,[i("h3",null,u(n.name),1),i("p",null,u(n.description),1)])],8,P))),128))])]))),128))])])]))}},K=O(R,[["__scopeId","data-v-579fd1b8"]]);export{K as default};