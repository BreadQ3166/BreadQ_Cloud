---

---

# 前言

>  🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的ROS1学习阶段指令汇总。
>



## 创建Package软件包

* 创建在~/cd catkin_ws/src文件夹里
>cd catkin_ws/src/

* catkin_create_pkg <包名> <依赖项列表>
>catkin_create_pkg ssr_pkg rospy roscpp std_msg

依赖项：将通用的节点或者资源单独封装成一个包

rospy ：ROS+python--对python语言的支持

roscpp ：ROS+c艹--对c++语言的支持

std_msg：标准消息包

在CMakeLists.txt设置节点源码的编译规则



## 编译操作
* 在~/cd catkin_ws下执行catkin_make
>cd catkin_ws/src/
>catkin_make

## 为python文件添加可执行权限
>cd catkin_ws/src/ssr_pkg/scripts/
>chmod +x ssr_node.py

## SLAM建图
>roslaunch slam_pkg gmapping.launch

## 地图保存与加载
> rosrun map_server map_saver -f map


## Navigation自主导航
>