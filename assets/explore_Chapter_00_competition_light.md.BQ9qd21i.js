import{_ as r,c as s,G as a,j as o,a as c,a6 as d,B as t,o as h}from"./chunks/framework.mo2VIruZ.js";const q=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"explore/Chapter_00/competition/light.md","filePath":"explore/Chapter_00/competition/light.md","lastUpdated":null}'),p={name:"explore/Chapter_00/competition/light.md"};function m(u,e,_,f,b,x){const l=t("confetti"),n=t("Linkcard"),i=t("ArticleMetadata");return h(),s("div",null,[a(l),a(n,{url:"/explore/Chapter_00/competition/digfax",title:"🍒意外之喜，光电赛混进国赛圈？",description:"光电赛创意组从校赛失利到闯入决赛",logo:"https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/logo_8.jpg"}),e[0]||(e[0]=o("h1",{id:"前言",tabindex:"-1"},[c("前言 "),o("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),a(i),e[1]||(e[1]=d('<blockquote><p>🍊Hello，各位好，我是面包！</p><p>这篇文档集合了面包的光电赛经历与教训总结。</p></blockquote><h2 id="_2024年光电设计大赛创意组" tabindex="-1">2024年光电设计大赛创意组 <a class="header-anchor" href="#_2024年光电设计大赛创意组" aria-label="Permalink to &quot;2024年光电设计大赛创意组&quot;">​</a></h2><h2 id="🍞整体方案-核电站智能巡检机器人" tabindex="-1">🍞整体方案--核电站智能巡检机器人 <a class="header-anchor" href="#🍞整体方案-核电站智能巡检机器人" aria-label="Permalink to &quot;🍞整体方案--核电站智能巡检机器人&quot;">​</a></h2><p>  ROS1路径规划+jetson nano主控核心+Yolov8目标检测</p><p>  jetson nano作为主控核心，承载ROS1系统的运行支持，负责综合处理STM32，激光雷达，高清摄像头的数据识别与事件策划。 STM32驱动两个电机执行履带轮的转动任务，激光雷达通过不断高速旋转识别周围固定高度的障碍物，高清摄像头传回帧图像用于目标检测。</p><p>  基于jetson nano的ROS系统履带式机器人-多点巡航+YOLOv8训练模型识别管道异常+模板匹配识别仪表盘指针读数。</p><h2 id="🍱jetson-nano英伟达开发板" tabindex="-1">🍱Jetson Nano英伟达开发板 <a class="header-anchor" href="#🍱jetson-nano英伟达开发板" aria-label="Permalink to &quot;🍱Jetson Nano英伟达开发板&quot;">​</a></h2><ol><li>ROS1运行核心</li><li>传感器数据传输中心</li></ol><h2 id="🍱stm32下位机任务" tabindex="-1">🍱STM32下位机任务 <a class="header-anchor" href="#🍱stm32下位机任务" aria-label="Permalink to &quot;🍱STM32下位机任务&quot;">​</a></h2><ol><li>电机驱动</li></ol><h2 id="🍱激光雷达" tabindex="-1">🍱激光雷达 <a class="header-anchor" href="#🍱激光雷达" aria-label="Permalink to &quot;🍱激光雷达&quot;">​</a></h2><ol><li>判断周围障碍物距离</li></ol><h2 id="🍱高清摄像头" tabindex="-1">🍱高清摄像头 <a class="header-anchor" href="#🍱高清摄像头" aria-label="Permalink to &quot;🍱高清摄像头&quot;">​</a></h2><ol><li>拍摄仪表盘指针</li></ol>',14))])}const k=r(p,[["render",m]]);export{q as __pageData,k as default};