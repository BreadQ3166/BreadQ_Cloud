import{_ as p,c as s,G as i,j as e,a as n,a4 as h,B as l,o as c}from"./chunks/framework.c_DFoYEo.js";const q=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"explore/Chapter_01/diffusion/marker.md","filePath":"explore/Chapter_01/diffusion/marker.md"}'),d={name:"explore/Chapter_01/diffusion/marker.md"};function m(u,a,g,b,E,f){const t=l("confetti"),o=l("Linkcard"),r=l("ArticleMetadata");return c(),s("div",null,[i(t),i(o,{url:"/explore/Chapter_01/diffusion/marker",title:"🍯基于ComfyUI的工作流是怎样生成标志物的？",description:"探讨对标志物一致性生成效果的整个流程",logo:"/logo_3.jpg"}),a[0]||(a[0]=e("hr",null,null,-1)),a[1]||(a[1]=e("h1",{id:"前言",tabindex:"-1"},[n("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1)),i(r),a[2]||(a[2]=h('<blockquote><p>🍊Hello，各位好，我是面包！</p><p>这篇文档集合了面包的科研实训的经历。</p></blockquote><h2 id="基本流程" tabindex="-1">基本流程 <a class="header-anchor" href="#基本流程" aria-label="Permalink to &quot;基本流程&quot;">​</a></h2><ol start="0"><li>图片预处理</li><li>基本标志物随机数量</li><li>标志物纯色幕布抠图</li><li>参考图片反推</li><li>BrushNet背景生成</li><li>光影遮罩潜空间调整</li><li>IC-Light图片打光</li><li>雨幕蒙版添加</li><li>高清放大</li></ol><h3 id="图片预处理" tabindex="-1">图片预处理 <a class="header-anchor" href="#图片预处理" aria-label="Permalink to &quot;图片预处理&quot;">​</a></h3><p>  首先拍摄若干张不同视角，大小基本一致，标志物尽量占据大部分区域，处于干净背景，背景与标志物有明显分割线的720*540的彩色图片。 然后作为【加载批次图像】节点的输入，通过调用G-DinoSAM语义分割模型对图片进行干净背景与标志物的分割，输出纯白背景替换成(0,255,0)纯绿色背景的图片，作为后续工作流的输入。</p><h3 id="基本标志物随机数量" tabindex="-1">基本标志物随机数量 <a class="header-anchor" href="#基本标志物随机数量" aria-label="Permalink to &quot;基本标志物随机数量&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E5%9F%BA%E6%9C%AC%E6%A0%87%E5%BF%97%E7%89%A9%E9%9A%8F%E6%9C%BA%E6%95%B0%E9%87%8F.png" alt="" loading="lazy"></p><p>通过逆分块进行图片合并，最终通过图像缩放生成720*544的图片。</p><h5 id="一-标志物绿幕图片由几个样本生成" tabindex="-1">（一）标志物绿幕图片由几个样本生成 <a class="header-anchor" href="#一-标志物绿幕图片由几个样本生成" aria-label="Permalink to &quot;（一）标志物绿幕图片由几个样本生成&quot;">​</a></h5><ul><li>确定样本数量</li></ul><p>  首先，通过randomchoice(1, 4, 4, 4, 4, 4, 9, 9, 9, 9, 16)这个函数来随机确定标志物绿幕图片是由几个样本组合而成的。 这个函数的意思是，从数字1、4、4、4、4、4、9、9、9、9、16中随机选择一个数字。比如，可能选到数字4，那么就表示标志物绿幕图片是由4个样本组合而成；也可能选到数字9，表示由9个样本组合而成，等等。</p><h5 id="二-样本的选取和处理过程" tabindex="-1">（二）样本的选取和处理过程 <a class="header-anchor" href="#二-样本的选取和处理过程" aria-label="Permalink to &quot;（二）样本的选取和处理过程&quot;">​</a></h5><ul><li>基底图片的准备</li></ul><p>基底图片有两种类型：</p><p>  一种是24张不同视角的有标志物图片，这些图片已经经过了预处理，尺寸是720×520像素。</p><p>  另一种是12张纯绿幕图片，尺寸同样是720×520像素，也经过了预处理。</p><p>这些基底图片分别存放在两个不同的文件夹中，方便后续的选取操作。</p><ul><li>随机选取基底图片并生成样本</li></ul><p>随机选取基底图片</p><p>  使用randomint(1, 标志物绿幕图片基底图片的个数)这个函数来随机选取基底图片。这里的“标志物绿幕图片基底图片的个数”是指有标志物图片和纯绿幕图片的总数，即24 + 12 = 36张。</p><p>  例如，randomint(1, 36)可能会随机选到数字10，那么就从基底图片中选取第10张图片。通过这种方式，可以随机地从36张基底图片中选取一张。</p><p>  然后，将这个随机选到的数字与索引+1进行比较。索引是从0开始的，比如第一张图片的索引是0，第二张图片的索引是1，以此类推。通过比较，可以确保至少选中一张有标志物的图片，避免出现纯绿幕图片的组合输出。也就是说，即使选到了纯绿幕图片的编号，也会通过比较和调整来保证最终组合的图片中至少有一个标志物。</p><ul><li>画布扩展处理--对选取出来的基底图片进行画布扩展处理。</li></ul><p>长方向扩展</p><p>  首先计算长方向的总扩展距离，使用randomint(a/8, a)公式，其中a是图片的长度720像素。例如，randomint(720/8, 720)，即randomint(90, 720)，随机选取一个介于90到720之间的整数作为长方向的总扩展距离。</p><p>  然后确定向上扩展距离，使用randomint(0, b)公式，b是长方向的总扩展距离。比如，如果总扩展距离是300像素，那么向上扩展距离可能是在0到300像素之间随机的一个值，如120像素。</p><p>  向下扩展距离则通过a - b公式计算，即原始长度720像素减去向上扩展距离。还是以向上扩展距离120像素为例，向下扩展距离就是720 - 120 = 600像素。</p><p>宽方向扩展</p><p>  计算宽方向的总扩展距离，使用int(a/720<em>544)公式，其中a是图片的长度720像素。计算结果为int(720/720</em>544) = int(544) = 544像素。 确定向左扩展距离，使用randomint(0, c)公式，c是宽方向的总扩展距离544像素。例如，向左扩展距离可能是在0到544像素之间随机的一个值，如200像素。</p><p>  向右扩展距离通过c - 向左扩展距离公式计算，即总扩展距离544像素减去向左扩展距离。以向左扩展距离200像素为例，向右扩展距离就是544 - 200 = 344像素。</p><ul><li>缩放处理</li></ul><p>  经过画布扩展处理后的图片，再通过图像缩放等比例缩放，将尺寸统一成720×544像素。这样就形成了一个处理后的样本图片。</p><h5 id="三-样本组合形成标志物绿幕图片" tabindex="-1">（三）样本组合形成标志物绿幕图片 <a class="header-anchor" href="#三-样本组合形成标志物绿幕图片" aria-label="Permalink to &quot;（三）样本组合形成标志物绿幕图片&quot;">​</a></h5><ul><li>挑选样本并合并</li></ul><p>  根据之前通过randomchoice函数确定的样本数量，从处理后的样本图片中挑选相应数量的样本。</p><p>  例如，如果确定是由4个样本组合而成，就从处理后的样本图片中随机挑选4个样本。</p><p>  使用“选择图像模选”节点跳过最开始的参考空图像（这个参考空图像可能是用于对齐或者其他参考用途的图像）。</p><p>  将挑选出来的平方数个数的样本图片进行逆分块合并。逆分块合并的意思是，把这些小的样本图片按照一定的规则拼接在一起，形成一个大的图片。比如，如果有4个样本，可以2×2地拼接在一起。</p><ul><li>最终缩放处理</li></ul><p>  合并后的图片再经过一次缩放处理，形成最终的720×544像素的标志物绿幕图片，作为后续处理的输入。</p><div class="tip custom-block"><p class="custom-block-title">小纸条</p><p>对数学运算节点和逻辑节点针对性地串并联实现对图像的随机挑选与成比例缩放，然后单张处理图片进行平方数数量的合并，输出图像随机地出现不同数量标志物的绿幕图片作为后续处理输入。</p><ul><li>数学运算节点主要包括【数学表达式】、【整数】，通过数学关系对图像进行成比例的随机画布拓展，实现标志物生成在图片的不同位置，以及实现对有标志物的图片与无标志物的图片的随机挑选，实现图片中生成不同数量的标志物。</li><li>逻辑节点主要包括【For循环-起始】、【For循环-结束】、【比较】、【If else】，通过与【数学表达式】配合，实现对平方数图片的合并</li><li>图片处理节点主要包括【图像缩放】、【图像逆分块】等，实现最终图片以720*544分辨率输出</li></ul></div><h3 id="标志物纯色幕布抠图" tabindex="-1">标志物纯色幕布抠图 <a class="header-anchor" href="#标志物纯色幕布抠图" aria-label="Permalink to &quot;标志物纯色幕布抠图&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E7%BA%AF%E8%89%B2%E5%B9%95%E5%B8%83%E6%8A%A0%E5%9B%BE.png" alt="" loading="lazy"></p><ul><li>输入:【标志物随机数量】中输出的绿幕图片</li><li>输出:标志物为纯白色，绿幕为黑色的单色遮罩图片</li></ul><h3 id="过程" tabindex="-1">过程 <a class="header-anchor" href="#过程" aria-label="Permalink to &quot;过程&quot;">​</a></h3><p>  通过判断纯绿色颜色进行遮罩的生成。使用【图像颜色到遮罩】节点对【标志物随机生成】输出的图片进行绿幕识别，生成以标志物为白底，绿幕为黑底的遮罩图像。</p><h3 id="参考图片反推" tabindex="-1">参考图片反推 <a class="header-anchor" href="#参考图片反推" aria-label="Permalink to &quot;参考图片反推&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E5%8F%82%E8%80%83%E5%9B%BE%E7%89%87%E5%8F%8D%E6%8E%A8.png" alt="" loading="lazy"></p><ul><li>输入:【参考图片】</li><li>输出:【提示词】</li><li>过程:加载Florence2-large模型对输入参考图像进行提示词反推，作为提示词输入。 首先通过Load Image节点加载一张图片，然后通过调用Florence2执行节点对图片中的元素进行描述，进行参考图片的反推</li></ul><h3 id="brushnet背景生成" tabindex="-1">BrushNet背景生成 <a class="header-anchor" href="#brushnet背景生成" aria-label="Permalink to &quot;BrushNet背景生成&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/Brushnet%E8%83%8C%E6%99%AF%E7%94%9F%E6%88%90.png" alt="" loading="lazy"></p><ul><li>输入:【绿幕图片】、【遮罩图片】</li><li>输出:【添加背景后的图像】</li></ul><h4 id="过程-1" tabindex="-1">过程: <a class="header-anchor" href="#过程-1" aria-label="Permalink to &quot;过程:&quot;">​</a></h4><p>  通过调用基于sd1.5大模型训练的realisticVisionV51VAE_2大模型作为基础检测模型生成基本图像， 通过ip-adapter进行参考图像的风格转绘，基于CLIP视觉加载器 通过Brushnet对遮罩物品的背景生成 加载Checkpoint加载器，加载基于sd1.5大模型训练的realisticVisionV51VAE_2大模型作为基础检测模型，并通过CLIP视觉加载器加载CLIP-ViT-H辅助IPAdapter模型进行风格转绘。之后，调用segmentation_mask_brushnet_ckpt模型，将这些模型通过各自的应用接口连接到K采样器上进行生图，针对标志物在原本的绿幕上添加与提示词相对应的背景，并保持了基本标志物的完整轮廓，其中负面提示词中需要填写相应的低质量提示词，用以辅助生成更高质量的图像，而文本连锁用于将参考图片反推工作流的提示词与自定义正面提示词合并。</p><div class="info custom-block"><p class="custom-block-title">K采样器的解释</p><p>K采样器使用提供的模型以及正向和负向条件来生成给定潜在图像的新版本。首先，根据给定的seed和denoise强度对潜在图像进行加噪，部分擦除潜在图像。然后，使用给定的Model和positive、negative条件作为指导，去除这些噪声，&quot;梦想&quot;在图像被噪声擦除的地方生成新的细节。</p></div><p>适当扩展遮罩 在遮罩环节中，适当扩展遮罩区域，以最大限度地保持基本标志物的一致性。这一步是为了确保在处理过程中，标志物的细节和特征不会被破坏，保持其完整性和一致性。 适当混合遮罩 将标志物随机生成的图片与添加背景后的图片进行遮罩融合，只将标志物的区域进行融合，更好地保留标志物，而背景仍是生成后的背景。</p><h3 id="光影遮罩潜空间调整" tabindex="-1">光影遮罩潜空间调整 <a class="header-anchor" href="#光影遮罩潜空间调整" aria-label="Permalink to &quot;光影遮罩潜空间调整&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E5%85%89%E5%BD%B1%E9%81%AE%E7%BD%A9%E6%BD%9C%E7%A9%BA%E9%97%B4%E8%B0%83%E6%95%B4.png" alt="" loading="lazy"></p><ul><li>输入:【标志物随机数量】中输出的绿幕图片</li><li>输出：通过数学表达式进行随机渐变的遮罩。</li></ul><div class="tip custom-block"><p class="custom-block-title">函数解释</p><p>randomchoice(x,y,z)等概率地选择其中一个数据</p></div><h4 id="过程-2" tabindex="-1">过程 <a class="header-anchor" href="#过程-2" aria-label="Permalink to &quot;过程&quot;">​</a></h4><p>  首先获取图像尺寸，即720*544作为参考尺寸,然后经过randomint()生成一个随机高度，随机宽度的阴影椭圆遮罩图片，作为后续打光的潜空间输入。</p><h3 id="ic-light图片打光" tabindex="-1">IC-Light图片打光 <a class="header-anchor" href="#ic-light图片打光" aria-label="Permalink to &quot;IC-Light图片打光&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/IC-Light%E5%9B%BE%E7%89%87%E6%89%93%E5%85%89.png" alt="" loading="lazy"></p><ul><li>输入:【添加背景的图片】</li><li>输出:【去除标志物的纯背景图像】</li></ul><h4 id="过程-3" tabindex="-1">过程 <a class="header-anchor" href="#过程-3" aria-label="Permalink to &quot;过程&quot;">​</a></h4><p>  调用Lama模型进行去除标志物的纯背景图像提取，将提取的背景图像应用于IC-Light的背景潜空间输入，而【BrushNet背景生成】的图像作为IC-Light应用节点的前景潜空间(Latent)输入，最后通过K采样器进行图片的重新打光,，其中步数参考为10，CFG参考为3.5，采样器参考为dpmpp_2m_sde,实现对光照的分布调整。</p><div class="info custom-block"><p class="custom-block-title">小纸条</p><p>编辑图像中的光照是深度学习和图像编辑中的一项基本任务。经典的计算机图形方法通常使用物理照明模型来对图像的外观进行建模。</p><p>然而，在更大的尺度上训练具有更多多样性的照明编辑模型比看起来更具挑战性。</p><p>第一个挑战在于保持所需的模型行为，以确保正确的照明操作，而不是偏离到意外的随机行为。随着数据集大小和多样性的增加，学习目标的映射和分布可能变得模糊和不确定。在没有适当约束的情况下，训练可能产生结构引导的随机图像生成器，从而导致不与期望的照明编辑要求对准的输出。</p><p>第二个挑战是在修改照明时保留底层图像细节和固有属性，例如反射或反射颜色。由于扩散算法的随机性和潜在空间的编码-解码过程，基于扩散的图像生成器固有地倾向于将随机性引入图像内容，使得难以保留细粒度的细节。</p><p>在本文中，作者提出了一种在训练过程中施加一致光（IC光）传输的方法，该方法基于光传输独立性的物理原理-不同照明条件下物体外观的线性混合与混合照明下的外观一致。通过强制执行这种一致性，作者引入了一个强大的、物理根源的约束，确保模型只修改图像的照明方面，同时保留其他内在属性，如亮度和精细的图像细节。</p><p>原文链接：<a href="https://blog.csdn.net/sherlockMa/article/details/144189071" target="_blank" rel="noreferrer">https://blog.csdn.net/sherlockMa/article/details/144189071</a></p></div><div class="info custom-block"><p class="custom-block-title">Lama模型</p><p>图像修复（根据mask移除目标）</p></div><h3 id="雨幕添加" tabindex="-1">雨幕添加 <a class="header-anchor" href="#雨幕添加" aria-label="Permalink to &quot;雨幕添加&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E9%9B%A8%E5%B9%95%E8%92%99%E7%89%88%E6%B7%BB%E5%8A%A0.png" alt="" loading="lazy"></p><ul><li>输入:提示词--用户需要提供一个描述性的提示词，这个提示词将用于指导生成雨幕图片的内容和风格。</li><li>输出结果:【雨幕图片】--最终生成的带有雨幕效果的图片。</li></ul><h4 id="过程-4" tabindex="-1">过程 <a class="header-anchor" href="#过程-4" aria-label="Permalink to &quot;过程&quot;">​</a></h4><p>  使用realisticVisionV51VAE_2大模型进行雨幕图像的生成。这是一个专门用于生成逼真图像的模型，能够根据输入的提示词生成高质量的图像。 采用基本文生图工作流来执行图像生成任务。这个工作流是一个标准化的流程，确保图像生成过程的稳定性和一致性。</p><p>  提供提示词：用户输入一个描述性的提示词，例如“城市街道上的雨幕”或“森林中的雨景”等。</p><p>  调用模型：系统将使用realisticVisionV51VAE_2模型，根据提供的提示词生成相应的雨幕图片。</p><p>  生成图片：通过基本文生图工作流，模型将生成一张带有雨幕效果的图片。</p><p>  输出结果：生成的雨幕图片将作为输出结果展示给用户。</p><h3 id="高清放大" tabindex="-1">高清放大 <a class="header-anchor" href="#高清放大" aria-label="Permalink to &quot;高清放大&quot;">​</a></h3><p><img src="https://gitee.com/the-origin-of-bread/images_-pic-go/raw/master/images/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7.png" alt="" loading="lazy"></p><ul><li>输入:【添加打光的图片】--用户需要提供一张需要添加打光效果的图片。</li><li>输出:【1440×1080】--最终生成的图片尺寸为1440×1080像素。而且分为4类：【灰度】、【灰度+模糊】、【灰度+雨幕】、【灰度+雨幕+模糊】</li></ul><h4 id="过程-5" tabindex="-1">过程 <a class="header-anchor" href="#过程-5" aria-label="Permalink to &quot;过程&quot;">​</a></h4><p>  使用ControlNet的tile模型对放大成1440px*1080px的图片进行细节修复</p><p>  首先通过【图像按系数缩放】节点对图片进行放大两倍，即1440px*1080px,然后加载controlnet的tile细节保留模型通过ControlNet应用节点使用K采样器基于realisticVisionV51VAE_2大模型进行高清放大生图，ControlNet是一种先进的图像处理技术，能够有效地保留图片的细节信息。输出尺寸为1024×1440像素的图片。这一步确保图片在放大后仍然保持高质量和清晰度。</p><p>  之后通过【图像混合模式】节点将生成的雨幕图片与背景图片进行融合。这一步是为了将雨幕效果自然地添加到背景图片中，使两者融合得更加自然和逼真。生成彩色图像。通过【图像线性】节点调整图片的色彩和对比度，输出灰度图像。通过【高斯模糊】节点对图片进行适当的模糊处理，增强图片的模糊度。</p><h3 id="图像预览" tabindex="-1">图像预览 <a class="header-anchor" href="#图像预览" aria-label="Permalink to &quot;图像预览&quot;">​</a></h3><ul><li>输入:【绿幕图片】、【线性图片】、【灰度图片】、【线性+模糊】、【线性+模糊+雨幕】</li><li>输出:图像对比效果</li></ul><div class="tip custom-block"><p class="custom-block-title">小纸条</p><p>Florence-2是一种先进的视觉基础模型，采用基于提示的方法来处理广泛的视觉和视觉语言任务。 Florence-2可以解释简单的文本提示来执行诸如图像描述、物体检测和分割等任务。 它利用我们的FLD-5B数据集，该数据集包含1.26亿张图像的54亿个注释，以掌握多任务学习。 该模型的序列到序列架构使其能够在零样本和微调设置中都表现出色，证明是一个具有竞争力的视觉基础模型。</p></div><h3 id="类型保存" tabindex="-1">类型保存 <a class="header-anchor" href="#类型保存" aria-label="Permalink to &quot;类型保存&quot;">​</a></h3><h2 id="论文写作" tabindex="-1">论文写作 <a class="header-anchor" href="#论文写作" aria-label="Permalink to &quot;论文写作&quot;">​</a></h2><p>  ComfyUI界面采用节点式工作流，每个步骤作为一个节点，完成后的结果输入到下一个步骤，以此实现整个工作流程。本套工作流程主要分为8大板块：【标志物随机生成】、【光影遮罩空间调整】、【纯色幕布抠图遮罩】、【IC-Light】、【BrushNet背景生成】、【图片高清放大】、【参考图片反推】、【雨幕蒙版添加】。本文所引用的大模型是基于512 * 512图像训练的，初步思路是先完成720 * 540的小样，确认后再通过【图片高清放大】节点群进行高清尺寸放大。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3>',92))])}const B=p(d,[["render",m]]);export{q as __pageData,B as default};