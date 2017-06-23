# BeatPlane
基于Unity3d写的一个射击游戏(Unity 5.5.0f3)

# 概述
自学编写，里面的所有素材都是自己绘制的，难看也凑活着看吧，这个游戏没有声音（才不是因为懒得去找音效）

# 遇到的坑
作为初学中的一员，经常会遇到令人费解的地方

首先是玩家的移动
一开始我是用`Input.inputString`来获取用户输入的，然后发现玩家同一时间只能向一个方向前进，而且响应速度慢（第一次按键后会卡顿一下）
查了文档后看到有这个解释*Returns the keyboard input entered this frame. (Read Only)*，所以是类似于文字输入一样的，获得的值是输入的文本，同一时间只有一个输入
之后网上查了一下，发现大家用的都是`Input.GetKey()`，文档中对此的解释是*Returns true while the user holds down the key identified by name. Think auto fire.*
好吧- -顿时明白了，此函数只要按键按下就会有返回，所以能同时得到多个输入

其次是武器的发射
如果不做处理，武器就会嗖嗖嗖，每一帧都发射一次，所以武器应该有个冷却时间，我这里在设置了一个值attackFPS放在外面，用来设置每秒钟射出多少发子弹，然后内部的实现是
<pre><code>
        //发射武器
        if(Input.GetKey(KeyCode.Z)||Input.GetKey(KeyCode.L)){
        	if(!isColding){
        		isColding = true;
        		Instantiate(weaponBullet,new Vector3(transform.position.x + transform.localScale.x * 0.5,transform.position.y - 0.1,-1.0),transform.rotation);
        	}
        }

        //武器冷却
        if(isColding){
        	attackColdTime += Time.deltaTime;
        }
        if(attackColdTime > 1.0/attackFPS){
        		isColding = false;
        		attackColdTime = 0.0;
       	}
</code></pre>
这里有个小坑，冷却时间需要独立计时，不然的话玩家频繁点击发射可以刷新冷却时间

然后是有关RigidBody 2D刚体的坑
在网上查到的都是RigidBody，因为之前Unity在这块是不区分2d和3d的，分开后RigidBody2D组件里面有个simulate选项，需要勾选后才能触发碰撞检测，默认是勾选的
响应的方法名字和对象都有变化，后面需要跟上2D，例如`OnTriggerEnter(collider:Collider)`就需要变成`OnTriggerEnter2D(collider:Collider2D)`

然后关于游戏暂停
使用Time.timeScale = 0，正常是为1，2倍速则可以设置为2
注意的是使用这个并不会影响到Update和LateUpdate的调用，仅仅会影响到FixUpdate的调用
这个实际上是把deltaTime设置为0，所以物体如果使用的deltatime控制行为，那么这个都可以影响到
如果不想受到暂停影响，可以使用Time.realtimeSinceStartup，新版本可以使用ignoreTimeScale?RealTime.deltaTime:Time.deltaTime;

还有关于玩家不能移动到视野看不到的地方做法
我是通过判断玩家位置和尺寸有没有超越视野边框做的，这里视野的范围可以通过camera对象的orthographicSize属性拿到高度，通过与camera的aspect值相乘就得到宽度
至于玩家的尺寸，则通过Renderer的bounds的得出，这里也可以通过collider来获得玩家的尺寸，collider是自己设置的碰撞检测边缘，相比Renderer可能会真实些，不过会存在穿模的问题

还有其他其他坑就不在赘述了，最后吐槽一下在Mac下用MonoDevelop写JavaScript真是蛋疼，没有代码补全，还有很多类名不会变色，有没有敲对，只有等你跑起来才知道

# 预览图
![image](https://github.com/spxvszero/BeatPlane/blob/master/ScreenShot/1.png)

![image](https://github.com/spxvszero/BeatPlane/blob/master/ScreenShot/2.png)
