# 前言

> 🍊Hello，各位好，我是面包！
>
> 这篇文档集合了面包的双轮平衡车项目的开发经历。
>
> PID控制算法应该算是应用非常广泛的算法了。不管是智能车控制还是机械臂控制，乃至飞行棋控制都离不开PID。有一个很形象的例子，比如“如何控制一个“热得快”，让一锅水的温度保持在50℃？”。

## 🍞开发经历

平衡车的速度环PID代码

```c
/**************************************************************************
Function: Speed PI control
Input   : encoder_left：Left wheel encoder reading；encoder_right：Right wheel encoder reading
Output  : Speed control PWM
函数功能：速度控制PWM		
入口参数：encoder_left：左轮编码器读数；encoder_right：右轮编码器读数
返回  值：速度控制PWM
**************************************************************************/
int Velocity(int encoder_left,int encoder_right)
{  
	float Velocity_Kp=160,Velocity_Ki=0.8;				//速度环PI参数
    static float velocity,Encoder_Least,Encoder_bias;
	static float Encoder_Integral;
   	//=============速度PI控制器=======================//	
    Encoder_Least =0-(encoder_left+encoder_right);
    //获取最新速度偏差==测量速度（左右编码器之和）-目标速度（此处为零） 
    Encoder_bias *= 0.8;		                                    		//一阶低通滤波器       
    Encoder_bias += Encoder_Least*0.2;	                            		//一阶低通滤波器 						//相当于上次偏差的0.8 + 本次偏差的0.2，减缓速度差值，减少对直立的干扰  
    Encoder_Integral +=Encoder_bias;                                  		//积分出位移 积分时间：10ms
    if(Encoder_Integral>10000)  	Encoder_Integral=10000;            	 	//积分限幅
    if(Encoder_Integral<-10000)	  Encoder_Integral=-10000;            		//积分限幅	
    velocity=-Encoder_bias*Velocity_Kp-Encoder_Integral*Velocity_Ki;        //速度控制	
    if(Turn_Off(Angle_Balance)==1||Flag_Stop==1)   Encoder_Integral=0;      //电机关闭后清除积分
    return velocity;
}
```

