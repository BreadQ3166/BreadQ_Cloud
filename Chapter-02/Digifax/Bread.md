# 前言

> 🍊Hello，各位好，我是面包！
>
> 这篇文档集合了



## 🍞利用Chatgpt理清建模思路



1. 接下来你将作为我的数学建模指导老师为我提供比赛思路，我将逐步把赛题背景和问题发送给你

2. 以下是赛题背景和赛题说明，不是问题：

3. 实验附件数据：

4. 请根据赛题背景，帮我分析问题1，提供数学建模思路：

5. 请根据你的思路建立具体的用数学语言描述的模型，要求尽可能的详细

6. 请再给出模型对应的Matlab代码
7. 请再给出模型对应的Python代码





## 2024 年（第五届）“大湾区杯”粤港澳金融数学建模竞赛题目  A题



用中文结合上述表格数据对此代码中的建模与分析进行详细地描述，并附加必要的公式与符号说明，将代码中的数据与表格中的数据结合分析 ，把上述回答结合表格各分量因素，并映射到各变量中，进行详细描述



GDP预测

条件均值模型-arch模型-grach模型



### 量化指标

1. 历史：年份
2. 人口：人口数量、人口增长率
3. 科技：科技投入
4. 产业：产业总值
5. 经济状况：



主成分分析

多元线性回归



粤港澳大湾区

[香港特别行政区](https://baike.baidu.com/item/香港特别行政区/24510970?fromModule=lemma_inlink)、[澳门特别行政区](https://baike.baidu.com/item/澳门特别行政区/50041229?fromModule=lemma_inlink)和[广东省](https://baike.baidu.com/item/广东省/132473?fromModule=lemma_inlink)[广州市](https://baike.baidu.com/item/广州市/21808?fromModule=lemma_inlink)、[深圳市](https://baike.baidu.com/item/深圳市/11044365?fromModule=lemma_inlink)、[珠海市](https://baike.baidu.com/item/珠海市/2094242?fromModule=lemma_inlink)、[佛山市](https://baike.baidu.com/item/佛山市/436251?fromModule=lemma_inlink)、[惠州市](https://baike.baidu.com/item/惠州市/2626655?fromModule=lemma_inlink)、[东莞市](https://baike.baidu.com/item/东莞市/219243?fromModule=lemma_inlink)、[中山市](https://baike.baidu.com/item/中山市/214338?fromModule=lemma_inlink)、[江门市](https://baike.baidu.com/item/江门市/782676?fromModule=lemma_inlink)、[肇庆市](https://baike.baidu.com/item/肇庆市/2461572?fromModule=lemma_inlink)











[1-14　粤港澳大湾区主要经济指标(2022年) - 广东统计年鉴(2023)](http://tjnj.gdstats.gov.cn:8080/tjnj/2023/directory/01/html/01-14-0.htm)

[数据发布 广东省人民政府门户网站](https://www.gd.gov.cn/zwgk/sjfb/index.html)







建模思路



1. 赛题类比法：将公交车的调度问题用于飞机场的优化调度问题，长江与黄河
2. 文献资料搜集法，查找论文



3. 从小到大扩散法



### 2023 年（第四届）“大湾区杯”粤港澳金融数学建模竞赛题目  A题 跨境 ETF 套利策略设计

### 

#### 使用模型

1. LCAPM（Liquid ity-augmented Capital Asset Pricing Model）模型

2.  GARCH 模型

#### 相关验证

1. 非流动性指标ILLIQ

2. 每日市场收益𝑟𝑡M

3. ETF基金权重

4. 预期收益率

5. 残差
6. Augmented Dickey-Fuller（ADF）检验

7. “相关系数—协整”法选股

8. 自相关性分析

9. ARCH-LM效应检验

10. Pearson相关系数

11. 构造OLS回归方程

12. 平稳性检验
13. 置信区间
14. 布林带残差波动择时策略
15. 中轨线
16. 流动性风险与波动性风险指标



##### 数据清洗

 3𝝈原则

###### 什么是三西格玛准则

3σ(西格玛)准则又称为拉依达准则，它是先假设一组检测数据只含有随机误差，对其进行计算处理得到标准偏差，按一定概率确定一个区间，认为凡超过这个区间的误差，就不属于随机误差而是粗大误差，含有该误差的数据应予以剔除。

###### 3σ准则的数据处理

在正态分布中
σ代表标准差,μ代表均值，x=μ即为图像的对称轴
3σ原则为
数值分布在（μ-σ,μ+σ)中的概率为0.6826
数值分布在（μ-2σ,μ+2σ)中的概率为0.9544
数值分布在（μ-3σ,μ+3σ)中的概率为0.9974
可以认为，Y 的取值几乎全部集中在（μ-3σ,μ+3σ)]区间内，超出这个范围的可能性仅占不到0.3%。

   	3σ准则是建立在正态分布的等精度重复测量基础上而造成奇异数据的干扰或噪声难以满足正态分布.如果一组测量数据中某个测量值的残余误差的绝对值 νi＞3σ,则该测量值为坏值,应剔除.通常把等于 ±3σ的误差作为极限误差,对于正态分布的随机误差,落在 ±3σ以外的概率只有 0.27%,它在有限次测量中发生的可能性很小,故存在3σ准则.3σ准则是最常用也是最简单的粗大误差判别准则,它一般应用于测量次数充分多( n ≥30)或当 n＞10做粗略判别时的情况.
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/Feeryman_Lee/article/details/103350385
