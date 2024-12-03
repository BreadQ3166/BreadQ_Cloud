# 前言

> 🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的ESP开发经验与总结





## 🍅开发环境

​	anaconda双击无反应，连图标也不显示，可能是字符编码格式错误，我遇到的有gdk与utf-8，可以通过命令开启anaconda-nevigator，然后通过终端报错信息打开指定文件修改编码格式即可。



一、创建虚拟环境

conda  create  --name  env_name
conda  create  --name  env_name python=3.6 # 创建指定python版本
conda  create  --name  env_name python=3.6 pandas numpy scipy # 创建指定python版本下包含某些包
二、激活/使用/进入某个虚拟环境

activate  env_name
三、退出当前环境

deactivate
四、复制某个虚拟环境

conda  create  --name  new_env_name  --clone  old_env_name
五、删除某个环境

conda  remove  --name  env_name  --all
六、查看当前所有环境

conda  info  --envs   或者  conda  env  list
七、查看当前虚拟环境下的所有安装包

conda  list  需进入该虚拟环境
conda  list  -n  env_name
八、安装或卸载包(进入虚拟环境之后）

conda  install  requests
conda  install  xx=版本号  # 指定版本号
conda  install  xxx -i 源名称或链接 # 指定下载源
conda  uninstall  xxx
九、分享虚拟环境

conda env export > environment.yml  # 导出当前虚拟环境
conda env create -f environment.yml  # 创建保存的虚拟环境
十、源服务器管理

conda当前的源设置在$HOME/.condarc中，可通过文本查看器查看或者使用命令>conda config --show-sources查看。

conda config --show-sources #查看当前使用源
conda config --remove channels 源名称或链接 #删除指定源
conda config --add channels 源名称或链接 #添加指定源
例如：

conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels  https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
国内pip源

阿里云 http://mirrors.aliyun.com/pypi/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

豆瓣(douban) http://pypi.douban.com/simple/

清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/

中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/

十一、升级

升级Anaconda需先升级conda

conda  update  conda
conda  update  anaconda
十二、卸载

rm  -rf  anaconda
十三、批量导出虚拟环境中的所有组件

conda list -e > requirements.txt  # 导出
conda install --yes --file requirements.txt  # 安装
十四、pip批量导出环境中的所有组件

pip freeze > requirements.txt
pip install -r requirements.txt
希望对博友有帮助，建议收藏起来已备用时之需，如有错误敬请指正

作者整理不易，麻烦动动发财的小手点个赞关注一下哦
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/m0_64892604/article/details/128806043





