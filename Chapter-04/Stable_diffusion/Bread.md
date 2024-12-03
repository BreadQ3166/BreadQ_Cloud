# 前言

> 🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的Stable diffusion的学习经历。



## 🍅常用网站

C站【微调模型】：https://civitai.com

huggingface【大模型】：https://huggingface.co

openart【comfyui工作流】：https://openart.ai

github【comfyui插件】:https://github.com



## 🍞Prompt收集



##### 二次元人物细节修复【sd1.5】

1. 正面提示词后添加：

>(masterpiece:1,2), best quality, masterpiece, highres, original, extremely detailed wallpaper, perfect lighting,(extremely detailed CG:1.2), drawing, paintbrush,


2. 负面提示词后添加：
>NSFW, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, (ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21), (tranny:1.331), mutated hands, (poorly drawn hands:1.5), blurry, (bad anatomy:1.21), (bad proportions:1.331), extra limbs, (disfigured:1.331), (missing arms:1.331), (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051), (unclear eyes:1.331), lowers, bad hands, missing fingers, extra digit,bad hands, missing fingers, (((extra arms and legs))),

   *广泛适用于二次元风格，可以考虑搭配不同模型使用！



##### 二次元人物描述【sd1.5】

Adorable, whimsical, anime-style, vibrant, imaginative, colorful, spirited, youthful, energetic, fantasy-inspired, manga-influenced, cute, quirky, ethereal, dreamy, otherworldly, charming, dynamic, artistic, expressive, vibrantly dressed, distinctive, visually striking, manga-styled, anime-featured, pop-culture, eye-catching, stylish, imaginatively coiffed, characterful.



##### 桥梁钢架细节【realistic_vision】

1. 正面提示词后添加：

>Detail of the steel frame of the bridge,no_humans, 8k,raw photo,masterpiece,best quality,photorealistic, professional, 4k, highly detailed(steel is product),product close-up shots,suitable size,


2. 负面提示词后添加：

>unsuitable,big product,drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly,worst quality,low quality,



室内设计【realistic_vision】

{ High-ceilinged living room|minimalist aesthetic|warm beige walls|floor-to-ceiling windows|natural light infusion|large pendant lighting|modern art accents }, { charcoal low-profile sofa|plush cream shag rug|cosy conversation nook|sculptural brass chandelier|ambient lighting|minimalist wall art|floor cushions }, { modern fireplace|black marble surround|abstract art collection|potted succulents|floating wall shelf|Polished metal decor|Geometric patterned carpet }, { muted-toned armchairs|sleek glass coffee table|sophisticated ambiance|relaxation area|socializing space|warm-toned lighting|textured throw pillows }, { Expansive open-concept living space|modern Scandinavian design|crisp white walls|high-gloss hardwood floors|floor-to-ceiling windows with panoramic views|airy curtains|airy balcony access }, { natural light streaming in|minimalist floating shelves|statement area rug in geometric patterns|sleek L-shaped sofa in soft grey|accent chairs in contrasting jewel tones|vintage sideboard|mid-century modern chairs }, { marble coffee table with brass inlays|suspended Sputnik chandelier|minimalist fireplace with linear design|wall-mounted TV on a swivel bracket|contemporary art pieces with bold colors|luxury velvet curtains|edgy wall sculptures }, { indoor plants adding a touch of greenery|sleek dining set with glass tabletop|pendant lights above kitchen island|stainless steel appliances|subway tile backsplash|modern bar cart|industrial-style pendant lights }, { breakfast bar with bar stools|open kitchen layout|cozy reading nook with plush armchair|built-in bookshelves|soft ambient lighting|comfortable floor lamps|vintage bookends }, { elegant yet inviting atmosphere|high-quality upholstery|polished brass fixtures|luxurious silk cushions|glossy ceramic vases|stylish throw blankets|sleek wooden side tables }



学习环境【realistic_vision】

{serene study atmosphere|minimalist design|natural light flooding|comfortable ergonomic chairs|sleek wooden desks}, {modern art accents|vibrant color palette|inspirational quotes on walls|spacious layout|creative freedom}, {ergonomic lighting setup|ambient noise reduction|greenery in corners|digital canvas display|interactive learning tools}, {flexible seating options|collaborative work areas|whiteboard for brainstorming|calming color scheme|acoustic panels}, {multimedia presentation area|interactive digital screens|comfortable bean bags|ambient music option|aromatherapy diffusers}, {sustainable materials used|energy-efficient appliances|eco-friendly decorations|natural ventilation system|biophilic design elements}, {personalized study nooks|adjustable standing desks|soft ambient lighting|inspirational artwork|motivational posters}, {soundproofed private pods|high-speed internet access|ergonomic keyboard setup|adjustable task lighting|noise-cancelling headphones}, {color-coded study zones|tactile learning materials|interactive whiteboards|comfortable lounge areas|digital library access}, {ergonomic footrests|adjustable monitor stands|ambient temperature control|calming nature sounds|focus-enhancing scents}, {brainstorming huddle areas|writable wall surfaces|flexible furniture layout|high-tech projectors|creative brainstorming tools}, {inspirational speaker corners|motivational video loops|comfortable reading nooks|adjustable lighting schemes|digital note-taking apps}, {group project stations|collaborative design tables|interactive feedback screens|comfortable swivel chairs|brainstorming apps}, {ergonomic seating options|adjustable standing desks|soft ambient lighting|inspirational artwork|motivational posters}, {soothing color schemes|tactile learning materials|interactive whiteboards|comfortable lounge areas|digital library access}, {brainstorming huddle areas|writable wall surfaces|flexible furniture layout|high-tech projectors|creative brainstorming tools}, {inspirational speaker corners|motivational video loops|comfortable reading nooks|adjustable lighting schemes|digital note-taking apps}, {group project stations|collaborative design tables|interactive feedback screens|comfortable swivel chairs|brainstorming apps}, {ergonomic footrests|adjustable monitor stands|ambient temperature control|calming nature sounds|focus-enhancing scents}, {brain-friendly snack stations|hydration reminders|eco-friendly materials|sustainable energy sources|biophilic design elements}

桥梁设计

{close-up view|riveted steel beams|intricate welds|industrial gloves|safety goggles}, {detailed rebar pattern|concrete formwork|vibration plates|finishing trowels|cement mixers}, {focused cable stay|tensioning equipment|sling shot details|anchorage points|stay cables}, {up-close abutment|reinforced concrete texture|foundation bolts|earthmoving tracks|steel casings}, {intimate bridge deck|fresh concrete|pavement layers|road markings|traffic barriers}, {detailed expansion joint|thermal movement studies|weatherproof seals|durability tests|maintenance crews}, {close inspection platform|safety harnesses|high-angle rigging|binoculars|measuring devices}, {up-close painting process|anti-corrosion layers|spray paint cans|safety nets|industrial scaffolds}, {detailed formwork removal|rebar exposure|concrete curing|finishing touches|cement dust}, {focused traffic control|barrier installation|road markings|pavement cutters|traffic cones}, {intimate lighting installation|LED light fixtures|electrical conduits|light pole assembly|cable trays}, {detailed aesthetic features|architectural curves|decorative elements|historical plaques|cultural symbols}, {close-up bridge opening|ribbon cutting ceremony|construction team|achievement banners|public appreciation}, {detailed bridge approach|pavement laying|road markings|traffic lights|pavement texture}, {focused water flow|river currents|bridge piers|scour protection|water level markers}, {up-close maintenance|routine inspections|repair works|safety briefings|maintenance logs}, {detailed bridge lighting|LED lights|cable management|electrical connections|light fixture installation}, {close-up bridge walkway|pedestrian textures|bicycle lane markings|handrails|pavement details}, {detailed bridge signage|directional arrows|warning signs| informational plaques|reflective surfaces}, {focused bridge joint|structural connections|rivet details|bolt assemblies|load-bearing components}, {up-close bridge railing|safety features|handrail design|pavement edge|structural integrity}, {detailed bridge support|pier construction|foundation excavation|steel pile driving|support structure assembly}



基于学习环境的室内设计的环境，将提示词随机细化并转化成一段基于AI绘画sd1.5模型的英文提示词并写一段高质量提示词，以词组形式写成一段话。词组之间用|隔开，根据语义用{}分成20个小段，要求每个小段中至少有7个词组，不要分点，将每个小段用,连起来，{}不要删掉，

##### pony大模型【pony】

score_9(最高质量)



## 🍱WebUI常用附件文本



###### X/Y/Z plot脚本

STA,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0

NUM,000002,,000004,000006,000008,000010,000012,000014,000016,000018,000020,000022,000024,000026,000028,000030,000032,000034,000036,000038,000040,000042,000044,000046,000048,000050,000052,000054,000056,000058,000060,000062,000064,000066,000068,000070



## Sable Diffusion的主流GUI

1. webui-窗口式

webui是将Stable Diffusion的工作流程以简洁、可视化的方式展示在网页端的图形化用户操作界面

1. comfyui-节点式

comfyui是构建在Stable Diffusion之上的基于节点的图形化用户操作界面



comfyui的模型安装路径去插件的github界面去找



comfyuibox

stableswarmUI



## 🥯科研实训-基本标志物的随机数据集



#### 🍚任务一：

#### 		根据100张左右的原始标志物图片数据集生成2000张不同大小、数量、背景、模糊度的图片数据集用于yolo训练



#####  🍟目前想法

###### 不同大小

1. 通过lora训练，提示词调用【失败】

###### 不同视角

1. 通过lora训练，提示词调用【进行】

###### 模糊度

1. 通过lora训练，提示词调用【失败】

2. 通过后期处理【准备】

背景

1. 通过扩图实现



1.数据集收集，纯白背景，斜上方-8，正上方-8，

触发词，背景光影，视角



数据集的挑选

1.将黑白圆盘放在桌子上，围绕标志物以45度和视角为变量拍摄 16张图片作为训练集

2.ps抠图制作 纯白背景

3.将sd1.5大模型修改成其他真实场景的大模型



步骤

1.学会如何合理打标签



##### 🍾发现问题

1. 练物品那里，我来分享一下我经验吧，感觉这里UP主练的过拟合了，确实也是有原因的，填写tag的那个地方，应该写一个触发词，比如说小金人，然后不要对物品本身进行描述，但是可以要描述物品的分类和构图，比如说一个奖杯、静物nohuman，然后换的背景也有点问题，好让它能够符合光影，比如第一个正光的小金人，就可以直接白色背景，而第二个应该是右亮左暗的渐变的灰色基调背景，第一排最右边应该用暗红色基调背景以此类推，就PS里拖个渐变的事，背景可以全部用“纯色背景”这个tag来进行描述。另外，需要在tag里面加入物品的视角描述，最后再加几张图是UP主手捧奖杯的，让AI知道这玩意儿是个奖杯，最好用单独的文件夹，加上单独的repeat数，然后再进行后续调整。不过我是不建议使用Lora去做物品上身的，这玩意儿，我们小团队至少研究了半年多，网上也有不少的人在研究，曾经也在B站上火过不少视频，但现在基本都销声匿迹了，问题就出在lora自带的泛化性，要么就过拟合，完全上不了身，换不了模特，要么就细节上会出现些许丢失，而电商环境的话，他们是连文理都得要求一模一样，99.99%相似他们都是不能接受的。

我借鉴一下up主的想法总结了一些现在已知的训练物品[lora](https://search.bilibili.com/all?from_source=webcommentline_search&keyword=lora&seid=433046723051418825)思路希望有用：1.最好有三组照片，一组20张每张50训练

2. 最好各角度有光阴效果图一张。这个当一组照片用。还有一组用up主的想法抠图物品，还有最后一组是用杂物笼罩lora物品让ai自己学习。
   3.lora.sh似乎需要微调。本人不懂怎么调，只好招搬前进四up主的思路。
3. 以人物lora为例，多打标的话，出图就非常依赖提示词标签，多lora同时使用经常会因为提示词互相产生干扰，而且如果使用一个lora需要大量提示词的话，感觉并不是一个好的lora。
   好处是这样训练的模型，可以像抽积木一样删改细节，每个提示词对应细节保留的更好，比如纹身，拟合的很满意。
   少打标的话，在细节上就会有很多丢失，比如会出现纹身消失或者完全不拟合，这种lora因为没有给上标签，希望ai学习的地方没有学习，很多东西也固定了修改不了了，lora出炉后才能发现问题，我还没实践出解决办法。
   好处是但是出图整体感觉确实更好，几个提示词就可以出图了，和其他lora冲突的情况我遇到的更少，更容易调和。
   目前我出图对细节需求高，使用多打标签的lora，但是经常被很多lora互相共享提示词的行为苦不堪言。
   想问有没有给每个lora单独赋予提示词的插件。
   或者能对少标签的lora赋予细节的办法。


我也去c站上下载用过其他人分享的模型，有些仅给了一个触发词就有非常好的效果，有些没有识别到训练标签，但是仅加上lora就可以有非常好的效果，还有就是多触发词的，这种lora单独使用效果最好。



实验生成要求

1. 数量：15000张（包含）
2. 分辨率：1440*1080

3. 标志物出现数量：1，2-5，5-10，10以上





##### 🥕我的研究流程

1. 学习，初步使用WebUI进行Stable Diffusion的运用，比如文生图，图上图

2. 进行lora训练，学会打标签

3. 学习comfyui基础操作

4. 学习Controlnet基础流

5. 深入学习comfyui节点与插件

   

##### 节点管理器

1. 节点报错

刷新



##### 🥬数据集的尝试-解决生成图像不同视角【失败】

注意：训练集不要有任何的中文和空格

1. 第一次尝试

​	收集了14张以白色桌子为背景的纯标志物图片，以45度为差值和俯视和正视两视图为控制变量

​	结果：过拟合，基本只能生成以 白色为背景的图片

2. 第二次尝试

​	收集了16张通过ps抠图的图片，其余操作同上

​	结果：可以实现背景的简单替换，但生成稳定标志物的稳定性较差，也不能很好地实现视角的提示词

变换

3. 第三次尝试

​	在前面数据集的基础上再添加了8张平视视角的纯白背景标志物图片，同时将所有数据集进行模糊化处理再次生成了24张模糊的数据集，最后再添加4张具有现实场景的图片

​	结果：SD对模糊度的提示词控制力不够，导致产生的图片基本都有些模糊，无法经过提示词很好地控制，

​	反思：通过数据集来进行提示词的模糊处理不靠谱。lora只用来训练固定大小，但不同数量，不同视角的图片，而模糊处理、缩放、场景替换则通过comfyui搭建节点工作流来实现。



##### 🥥生成多视角图片

1. 通过lora训练生成新的视角【失败】
1. 通过Stable zero123节点【未进行】显存不够
1. 图片随机抽取【已成功】

​		首先拍摄50张左右干净背景、同等大小的标志物图片，然后通过语义分割生成等分辨率、纯色背景的图片，然后通过随机读取节点进行工作流的基础图片输入。



#####  🌭AI扩图-解决生成物品随机位置与大小

1. 使用inpainting大模型【未进行】
1. 编写自动化脚本进行大规模随机生成【未进行】
1. 利用扩展画布【已成功】

​		首先生成与标志物有明显色差的纯色背景，比如（0,255,0），然后通过扩展画布进行随机扩展，再将图片缩放成最符合大模型训练集的尺寸进入工作流



##### 🥕图像模糊-解决生成图像模糊度

1. 附加节点进行模糊处理【成功】

​		利用高斯模糊直接进行模糊处理



##### 🥪不同光效

1. 在comfyui里使用ic-light节点【成功】

​		通过数学表达式节点随机生成圆形的遮罩，同时羽化边缘，

​    	调节应用ICLight节点连接的K采样器节点的降噪系数，系数越低，光照越接近光影遮罩



###### 🍒随机数量

1. 通过遮罩复合节点生成生成【失败】
1. 通过正对图片组合【成功】

#####  🍩弯路叠加

1. 任何路径都不要有中文路径和空格，否则会生成一些紊乱的图片效果

2. 简单图片容易过拟合，不要老觉得是训练不够，图片混乱十有八九是过拟合了

3. 报错有可能是模型不匹配



### 🍹模型分析

1. ###### Florence-2

Florence-2 是微软于 2024 年 6 月发布的一个基础视觉语言模型。该模型极具吸引力，因为它尺寸很小 (0.2B 及 0.7B) 且在各种计算机视觉和视觉语言任务上表现出色。

Florence 开箱即用支持多种类型的任务，包括: 看图说话、目标检测、OCR 等等。虽然覆盖面很广，但仍有可能你的任务或领域不在此列，也有可能你希望针对自己的任务更好地控制模型输出。此时，你就需要微调了！

原文链接：https://blog.csdn.net/HuggingFace/article/details/140453082



### 🥥进度汇报



9月25日

初步确定科研实训课题



9月29日

初步使用了B站秋叶的WebUI整合包，稍微上手了AI绘画的基本流程，同时根据B站Up主nely同学的lora教程训练了一个原神角色凝光的人物lora，认识了lora训练的基本流程。



10月15日

手机拍摄标志物在干净的背景中，进行lora训练，基本都过拟合，生成不了背景，但勉强实现了不同视角的生成。



11月13日

研究进展

我学习了Stable Diffusion的另一个操作界面comfyui，这是通过节点搭建AI绘画工作流的工具，通过这个界面已经实现了从一张图片生成不同大小、不同背景、不同模糊度的图片。



我通过comfyui搭建了一个工作流，也就是一个基于节点的stable diffusion的操作界面，与webui的定位是一样的，但使用方式不一样

我可以生成不同大小，不同清晰度，不同背景的图片

关于不同光效，也有对应的iclight模型的comfyui工作流可以实现，但我暂时没有调通

关于数量，我也有大概的思路，比如进行图片融合再调整尺寸

关于视角，我觉得对于一个物体不同视角的图片大概有100张基本可以囊括所有视角了，将拍摄的图片进行PS抠图，这一步也可以通过confyui的节点来实现，只是拍摄的图片最好是纯色背景，然后放进工作流中执行，可以实现添加背景

使用comfyui可以实现api调用，就是可以实现图形化界面，但这需要后端的知识。这样应该可以实现批量的图片生成。

lora无法训练不同模糊度，不同数量，不同大小的图片，训练出的图片大多是固定大小，固定模糊度，不同视角的图片，

对于训练不同视角的图片，由于基本标志物的细节要严格与实物一致，所以训练的lora基本上都要过拟合，这样又缺乏泛化性，上次会议说过泛化性，但后面我在训练时发现，过拟合也基本只能生成与图片数据集出现过的视角的图片，不会有新的视角，

这些是我参考网上视频还有部分业内人员的评论得出的结果

发现问题

同时我发现lora并不能很好地生成新的视角，因为我们要保留全部标志物特征，因此我们训练lora基本上都要过拟合，因此泛化性很差，我认为我们可以拍大约50张图片作为基础图片也能接受吧，因为50张图片呢男男女女已经基本可以包括一个物品的所有视角了。



11月20日

研究进展

我通过comfyui搭建了一个工作流，现在可以实现批量并随机生成不同大小、不同数量、不同模糊度、不同背景、不同视角的灰度度，就是说拍了24张不同视角的标志物图片丢进这个工作流，就可以生成随机的图片集了。基本是这些，这样我觉得其实已经差不多可以生成模型训练需要的图片数据集了，剩下的可能是一些微调或优化了。这个工作流调用了很多在github上开源的插件和huggingface的模型。对图像的分辨率有没有要求。

下一步计划

初步学习模型量化与知识蒸馏





### comfyui节点报错

1. 尝试更新节点
2. 未下载模型
3. 图片尺寸不符
4. 模型不匹配



### 🍏批量生成图片

###### 节点工具：无

###### 实现流程：comfyui界面左上角下三角选项中设置批次数量



### 🍎不同视角图片获取

###### 节点工具：无

###### 实现流程：相机拍摄50张不同视角的图片



### 🍏图片随机或有序读取

###### 插件：【was-node-suite-comfyui】

###### 节点工具：【加载批次图像】

###### 实现流程：设置模式为【single_image、incremental_image、random】-> 设置绝对路径

###### 烘焙过程：

1. 通过【图像批量处理】节点实现随机读取，可以实现单个标志物的图像生成
2. 添加for循环实现随机选取并正交拼接，实现图片的单个或多个标志物随机选取，，但有可能只选到背景，没有标志物，特别是在一个标志物选择范围内，有二分之一的几率无标志物生成，浪费算力资源
3. 添加switch节点，无法解决问题，switch与for循环节点之间 可能有调用冲突
4. 将switch节点换成if节点，解决了生成一个标志物范围时大概率无标志物生成的问题，但生成多个标志物范围时还有小概率生成无标志物图片
5. 利用for循环索引进行if判断，从而保证至少有一个标志物生成

### 🍏提示词随机生成

###### 插件：【comfyui-dynamicprompts】

###### 节点工具：【动态提示词】、【BrushNet加载器】

###### 实现流程：通过模型处理可实现背景替换

###### 烘焙过程：

### 🍏拍摄图片预处理

插件：【】

###### 节点工具：【SAM模型加载器】、【G-Dino模型加载器】、【G-DinoSAM语义分割】

###### 实现流程：通过模型处理后可得到去除背景的遮罩与图片，把拍摄图片添加绿幕（0,255,0）



### 🍏图片不同大小

###### 插件：【essentials】、【Custom-Scripts】、【LayerStyle】

###### 节点工具：【数学表达式】、【拓展画布】

###### 实现流程：通过随机函数并通过数学关系输入有限制的随机数将图像替换成等比例不同大小的图片



### 🍏图片背景

###### 插件：【BrushNet】、【LayerStyle】

###### 节点工具：【BrushNet】、【BrushNet加载器】、【LaMa】

###### 实现流程：通过模型处理可实现符合语义的背景替换



### 🍏图片光效

###### 插件：【IC-Light】

###### 节点工具：【加载ICLight模型】、【应用ICLight条件】

###### 实现流程：通过模型与遮罩实现光影替换，并可以进一步添加图像细节



### 🍏导出多个图像坐标



调用A=1的次数->图片中标志物的个数

将向左拓展作为x坐标，向上拓展作为y坐标，尺度缩放

将缩放后尺寸与缩放前尺寸作为缩放比例因子，进行比例降化



1. 原缩放坐标/sqrt(输入照片数)
2. 原缩放坐标/sqrt(输入照片数)，x轴+256
3. 原缩放坐标/sqrt(输入照片数)，y轴+256
4. 原缩放坐标/sqrt(输入照片数)，x轴+256，y轴+256





扩展图像

进行AI绘画

