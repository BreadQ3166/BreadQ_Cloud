# 前言

> 🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的duo256开发经验与总结。



## 🍞开发经历

1. 南山职业技能竞赛备赛中



## 🍅开发环境

1. 通过scons与menuconfig工具编译大核与小核文件boot.sd、fin.bin，挂载到分好区的SD卡上，然后通过串口连接duo256核心板。自动执行main函数，也可输入函数名称执行其他函数，但不能与主main函数调用资源起冲突（引脚命名为SG2002，其中有XGPIOA，XGPIOB、XGPIOC、XGPIOD、PWR_GPIO【引用时时可当成XGPIOE格式】）
2. 先将官方镜像烧录进SD卡中，然后核心板与电脑通过type-C连接，通过终端进行ssh连接，一是基于python通过pingpong库编写代码（引脚命名为物理引脚序号PIN），二是基于c语言通过wiringx库编写（引脚命名为NAME）。



## 🍱开发资源

1. 复位/【STM32】标准库与HAL库对照学习系列教程大全](https://blog.csdn.net/qq_51447215/article/details/133939122?spm=1001.2014.3001.5502
2. [CSDN/混分巨兽龙某某/STM32项目开发](https://blog.csdn.net/black_sneak/category_11863290.html?spm=1001.2014.3001.5482)