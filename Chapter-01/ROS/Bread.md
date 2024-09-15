---

---

# 前言

>  🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的ROS开发经验与总结。
>


## 🍅开发环境

1. ROS1中环境配置：B站UP主机器人工匠阿杰的ROS1视频配置	

2. ROS2中环境配置:古月居ROS2-21讲配置（如果中途出现不匹配现象，可以使用了另一个UP主鱼香ROS的下载包成功安装）。

3. 开发项目的开发者或商家提供已配置好的虚拟机环境

## 🥯开发经历

1. ROS小车进行导航时，在第二次以上规划路径时，往往会因为障碍而陷入恢复模式，最后导致终端报错

	* 原因分析

	>有可能是tf_.transformPose转换超时

	* 解决方案

	>修改local_costmap_params.yaml中参数transform_tolerance的值，我的原来是0.5，我修改成了3

	* 参考文献

	> [CSDN/启动move_base.launch时出现无法获取机器位置](https://blog.csdn.net/weixin_47807142/article/details/110846481)

2. ROS小车进行导航时，使用虚拟机执行导航命令式小车无反应

	* 原因分析

	>时间轴对不上

	* 解决方案

	>不要用ROS小车终端的热点模式，使用手机热点，然后配置小车与电脑WIFI连接手机热点



## 🍱开发资源

1. [机器人操作系统 ROS 快速入门教程](https://www.bilibili.com/video/BV1BP4y1o7pw?vd_source=33bcedbe2b2c83299996ed742b2f673a)

