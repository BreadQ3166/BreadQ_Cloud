import{_ as c,c as i,G as n,j as a,a as s,a4 as d,B as t,o as l}from"./chunks/framework.c_DFoYEo.js";const y=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"explore/Chapter_00/environment/conda.md","filePath":"explore/Chapter_00/environment/conda.md"}'),m={name:"explore/Chapter_00/environment/conda.md"};function u(h,e,f,g,_,v){const r=t("confetti"),o=t("Linkcard"),p=t("ArticleMetadata");return l(),i("div",null,[n(r),n(o,{url:"/explore/Chapter_00/enviroment/conda",title:"🥑它是最经典的环境分类工具？",description:"conda的配置流程",logo:"https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/logo_13.jpg"}),e[0]||(e[0]=a("hr",null,null,-1)),e[1]||(e[1]=a("h1",{id:"前言",tabindex:"-1"},[s("前言 "),a("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),n(p),e[2]||(e[2]=d(`<blockquote><p>🍊Hello，各位好，我是面包！</p><p>这篇文档集合了面包的ESP开发经验与总结</p></blockquote><h2 id="🍅开发环境" tabindex="-1">🍅开发环境 <a class="header-anchor" href="#🍅开发环境" aria-label="Permalink to &quot;🍅开发环境&quot;">​</a></h2><p>​ anaconda双击无反应，连图标也不显示，可能是字符编码格式错误，我遇到的有gdk与utf-8，可以通过命令开启anaconda-nevigator，然后通过终端报错信息打开指定文件修改编码格式即可。</p><p>一、创建虚拟环境</p><p>conda create --name env_name conda create --name env_name python=3.6 # 创建指定python版本 conda create --name env_name python=3.6 pandas numpy scipy # 创建指定python版本下包含某些包 二、激活/使用/进入某个虚拟环境</p><p>activate env_name 三、退出当前环境</p><p>deactivate 四、复制某个虚拟环境</p><p>conda create --name new_env_name --clone old_env_name 五、删除某个环境</p><p>conda remove --name env_name --all 六、查看当前所有环境</p><p>conda info --envs 或者 conda env list 七、查看当前虚拟环境下的所有安装包</p><p>conda list 需进入该虚拟环境 conda list -n env_name 八、安装或卸载包(进入虚拟环境之后）</p><p>conda install requests conda install xx=版本号 # 指定版本号 conda install xxx -i 源名称或链接 # 指定下载源 conda uninstall xxx 九、分享虚拟环境</p><p>conda env export &gt; environment.yml # 导出当前虚拟环境 conda env create -f environment.yml # 创建保存的虚拟环境 十、源服务器管理</p><p>conda当前的源设置在$HOME/.condarc中，可通过文本查看器查看或者使用命令&gt;conda config --show-sources查看。</p><p>conda config --show-sources #查看当前使用源 conda config --remove channels 源名称或链接 #删除指定源 conda config --add channels 源名称或链接 #添加指定源 例如：</p><p>conda config --add channels <a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/" target="_blank" rel="noreferrer">https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</a> conda config --add channels <a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/" target="_blank" rel="noreferrer">https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/</a> 国内pip源</p><p>阿里云 <a href="http://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noreferrer">http://mirrors.aliyun.com/pypi/simple/</a></p><p>中国科技大学 <a href="https://pypi.mirrors.ustc.edu.cn/simple/" target="_blank" rel="noreferrer">https://pypi.mirrors.ustc.edu.cn/simple/</a></p><p>豆瓣(douban) <a href="http://pypi.douban.com/simple/" target="_blank" rel="noreferrer">http://pypi.douban.com/simple/</a></p><p>清华大学 <a href="https://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple/</a></p><p>中国科学技术大学 <a href="http://pypi.mirrors.ustc.edu.cn/simple/" target="_blank" rel="noreferrer">http://pypi.mirrors.ustc.edu.cn/simple/</a></p><p>十一、升级</p><p>升级Anaconda需先升级conda</p><p>conda update conda conda update anaconda 十二、卸载</p><p>rm -rf anaconda 十三、批量导出虚拟环境中的所有组件</p><p>conda list -e &gt; requirements.txt # 导出 conda install --yes --file requirements.txt # 安装 十四、pip批量导出环境中的所有组件</p><p>pip freeze &gt; requirements.txt pip install -r requirements.txt 希望对博友有帮助，建议收藏起来已备用时之需，如有错误敬请指正</p><p>作者整理不易，麻烦动动发财的小手点个赞关注一下哦 ————————————————</p><pre><code>                        版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
</code></pre><p>原文链接：<a href="https://blog.csdn.net/m0_64892604/article/details/128806043" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_64892604/article/details/128806043</a></p>`,30))])}const b=c(m,[["render",u]]);export{y as __pageData,b as default};