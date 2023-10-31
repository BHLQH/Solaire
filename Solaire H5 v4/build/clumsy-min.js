var game = {
    data: {
        score: 0,
        steps: 0,
        start: !1,
        newHiScore: !1,
        muted: !1
    },
    resources: [{
        name: "bg",
        type: "image",
        src: "data/img/bg.png"
    }, {
        name: "clumsy",
        type: "image",
        src: "data/img/clumsy.png"
    }, {
        name: "pipe",
        type: "image",
        src: "data/img/pipe.png"
    }, {
        name: "logo",
        type: "image",
        src: "data/img/logo.png"
    }, {
        name: "ground",
        type: "image",
        src: "data/img/ground.png"
    }, {
        name: "gameover",
        type: "image",
        src: "data/img/gameover.png"
    }, {
        name: "gameoverbg",
        type: "image",
        src: "data/img/gameoverbg.png"
    }, {
        name: "hit",
        type: "image",
        src: "data/img/hit.png"
    }, {
        name: "getready",
        type: "image",
        src: "data/img/getready.png"
    }, {
        name: "new",
        type: "image",
        src: "data/img/new.png"
    }, {
        name: "share",
        type: "image",
        src: "data/img/share.png"
        },
        //{
        //name: "tweet",
        //type: "image",
        //src: "data/img/tweet.png"
        //},
        {
        name: "theme",
        type: "audio",
        src: "data/bgm/"
    }, {
        name: "hit",
        type: "audio",
        src: "data/sfx/"
    }, {
        name: "lose",
        type: "audio",
        src: "data/sfx/"
    }, {
        name: "wing",
        type: "audio",
        src: "data/sfx/"
    }],
    onload: function () {
                return me.video.init(900, 600, {
/*        return me.video.init(1600, 900, {*/

            wrapper: "screen",
            scale: "auto",
            scaleMethod: "fit"
        }) ? (me.audio.init("mp3,ogg"),
            void me.loader.preload(game.resources, this.loaded.bind(this))) : void alert("Your browser does not support HTML5 canvas.")
    },
//    loaded: function () {
//        me.state.set(me.state.MENU, new game.TitleScreen),
//            me.state.set(me.state.PLAY, new game.PlayScreen),
//            me.state.set(me.state.GAME_OVER, new game.GameOverScreen),
//            me.input.bindKey(me.input.KEY.SPACE, "fly", !0),
//            me.input.bindKey(me.input.KEY.M, "mute", !0),
//            me.input.bindPointer(me.input.KEY.SPACE),
//            me.pool.register("clumsy", game.BirdEntity),
//            me.pool.register("pipe", game.PipeEntity, !0),
//            me.pool.register("hit", game.HitEntity, !0),
//            me.pool.register("ground", game.Ground, !0),
//            me.state.change(me.state.MENU)
//    }
        loaded: function () { // 定义一个名为loaded的方法，这个方法是一个函数，会在资源加载完成后执行
            me.state.set(me.state.MENU, new game.TitleScreen), // 调用melonJS框架中state模块中set方法，设置游戏的菜单状态（MENU）对应的屏幕对象为一个新创建的game.TitleScreen对象，这个对象是一个自定义的类，用来显示游戏的标题屏幕
                me.state.set(me.state.PLAY, new game.PlayScreen), // 调用melonJS框架中state模块中set方法，设置游戏的播放状态（PLAY）对应的屏幕对象为一个新创建的game.PlayScreen对象，这个对象是一个自定义的类，用来显示游戏的主要画面
                me.state.set(me.state.GAME_OVER, new game.GameOverScreen), // 调用melonJS框架中state模块中set方法，设置游戏的结束状态（GAME_OVER）对应的屏幕对象为一个新创建的game.GameOverScreen对象，这个对象是一个自定义的类，用来显示游戏的结束画面
                me.input.bindKey(me.input.KEY.SPACE, "fly", !0), // 调用melonJS框架中input模块中bindKey方法，绑定空格键（KEY.SPACE）和"fly"动作，并设置第三个参数为!0，即true，表示在按下和松开时都触发动作
                me.input.bindKey(me.input.KEY.M, "mute", !0), // 调用melonJS框架中input模块中bindKey方法，绑定M键（KEY.M）和"mute"动作，并设置第三个参数为!0，即true，表示在按下和松开时都触发动作
                me.input.bindPointer(me.input.KEY.SPACE), // 调用melonJS框架中input模块中bindPointer方法，绑定鼠标或触摸输入和空格键（KEY.SPACE），表示在点击或触摸时也触发空格键对应的动作
                me.pool.register("clumsy", game.BirdEntity), // 调用melonJS框架中pool模块中register方法，注册一个名为"clumsy"的实体类为game.BirdEntity类，这个类是一个自定义的类，用来表示游戏中的小鸟角色
                me.pool.register("pipe", game.PipeEntity, !0), // 调用melonJS框架中pool模块中register方法，注册一个名为"pipe"的实体类为game.PipeEntity类，并设置第三个参数为!0，即true，表示这个实体类可以被重复使用。这个类是一个自定义的类，用来表示游戏中的管道障碍物
                me.pool.register("hit", game.HitEntity, !0), // 调用melonJS框架中pool模块中register方法，注册一个名为"hit"的实体类为game.HitEntity类，并设置第三个参数为!0，即true，表示这个实体类可以被重复使用。这个类是一个自定义的类，用来表示游戏中的碰撞检测区域
                me.pool.register("ground", game.Ground, !0), // 调用melonJS框架中pool模块中register方法，注册一个名为"ground"的实体类为game.Ground类，并设置第三个参数为!0，即true，表示这个实体类可以被重复使用。这个类是一个自定义的类，用来表示游戏中的地面元素
                me.state.change(me.state.MENU) // 调用melonJS框架中state模块中change方法，改变游戏当前状态为菜单状态（MENU），即显示标题屏幕
        } // 结束loaded方法

};
game.BirdEntity = me.Entity.extend({
//声明一个变量game.BirdEntity，并赋值为一个继承自me.Entity类的新类的，这个新类用花括号{}包围，里面可以包含多个属性和方法。
    init: function (a, b) {
        var c = {};
        c.image = "clumsy",
//给对象c添加一个名为image的属性(在melonJS中已定义)，这个属性的值是"clumsy"，表示实例使用名为"clumsy"的图片资源作为渲染对象。
        /*c.width = 85,*/
            c.width = 50,
  //对象c添加一个名为width的属性的，这个属性的值是85，表示实例的宽度为85像素。
        /*  c.height = 60,*/
            c.height =50,
            this._super(me.Entity, "init", [a, b, c]),
//用来调用父类me.Entity的init方法的，这个方法会初始化实例的基本属性和行为。这里使用了_super方法，表示调用父类中同名的方法。这个方法接受三个参数：
//me.Entity, 这个参数表示父类本身。
//“init”, 这个参数表示要调用父类中的哪个方法，这里是"init"。
//[a, b, c], 这个参数是一个数组，表示要传递给父类方法的参数列表，这里是a, b, c三个参数。
            this.alwaysUpdate = !0,
//给实例添加一个名为alwaysUpdate的属性的，这个属性的值是!0，即true，
// 表示实例是否总是更新状态，即使不在视野范围内也更新
            this.body.gravity = .2,
 //添加一个名为body.gravity的属性的，这个属性的值是.2，表示实例受到的重力加速度为0.2像素 / 帧
            this.maxAngleRotation = Number.prototype.degToRad(-30),
//表示实例能够旋转到最大角度为 - 30度（逆时针方向），并转换为弧度制
            this.maxAngleRotationDown = Number.prototype.degToRad(35),
            //实例能够旋转到最大角度为35度（顺时针方向），并转换为弧度制。
            this.renderable.addAnimation("flying", [0, 1, 2]),//在此处定义了flying!!!!!
            //给渲染对象添加一个名为"flying"的动画属性，这个属性使用第0帧、第1帧和第2帧进行切换，形成一个飞行的效果。
             this.renderable.addAnimation("idle", [0]),
        //会给渲染对象添加一个动画效果。“idle”, 这个参数表示动画效果的名称,[0], 这个参数是一个数组,这里只有第0帧
            this.renderable.setCurrentAnimation("flying"),
            this.body.removeShapeAt(0),
            //移除实例的碰撞形状（shape）,接受一个参数： 0, 这个参数表示要移除的碰撞形状的索引（index），这里是0，表示移除第一个碰撞形状。
           
            this.body.addShape(new me.Ellipse(5, 5, 71, 51)),
        //    添加一个新的碰撞形状（shape）。这个方法接受一个参数：
        //new me.Ellipse(5, 5, 71, 51), 这个参数是一个新创建的me.Ellipse对象，表示一个椭圆形的碰撞形状。这个对象接受四个参数：
        //5, 5, 这两个参数分别表示椭圆形的中心点相对于实例左上角的x坐标和y坐标，这里都是5像素。
        //71, 51, 这两个参数分别表示椭圆形的水平半径和垂直半径，这里分别是71像素和51像素。
            this.flyTween = new me.Tween(this.pos),
            //给实例添加一个名为flyTween的属性的，这个属性的值是一个新创建的me.Tween对象，表示一个缓动（tween）效果
            //位置属性（pos）
            this.flyTween.easing(me.Tween.Easing.Exponential.InOut),
            //缓动函数，先加速后减速。
            this.currentAngle = 0,
            //给实例添加一个名为currentAngle的属性的，这个属性的值是0，旋转角度为0弧度。
            this.angleTween = new me.Tween(this),
        //    创建的me.Tween对象，表示一个缓动（tween）效果。缓动效果是一种在一定时间内改变对象属性值的动画效果。这个对象接受一个参数：
        //this, 这个参数表示要改变的对象属性所属的对象，这里是实例本身
            this.angleTween.easing(me.Tween.Easing.Exponential.InOut),
            //和flyTween类似
            this.endTween = null,
            //添加一个名为endTween的属性，表示没有定义任何缓动效果
            this.collided = !1,
            //添加一个名为collided的属性的，这个属性的值是!1，即false，表示实例是否发生了碰撞。
            this.gravityForce = .2
        //添加一个名为gravityForce的属性，表示实例受到的重力力度为0.2像素/帧
    },
    update: function (a) {
        //定义一个名为update的方法的，这个方法是一个函数，会在每一帧（frame）更新实例的状态和行为。这个方法接受一个参数a，表示每一帧持续的时间（delta time）
        var b = this;
        //来声明一个变量b，并赋值为this对象的，这样可以在其他作用域（scope）中引用实例本身
        if (this.pos.x = 60,
            !game.data.start)
            //这两个条件之间用逗号（, ）分隔，表示先执行第一个条件，再执行第二个条件，并返回第二个条件的结果作为整个条件表达式 的结果。所以整个条件表达式表示游戏未开始，并且将实例的x坐标设为60像素。
            return this._super(me.Entity, "update", [a]); //一个调用父类me.Entity的update方法的结果，这个方法会更新实例的基本状态和行为
        if (this.renderable.currentTransform.identity(),
            me.input.isKeyPressed("fly"))
        //    me.input.isKeyPressed(“fly”), 这个条件是一个调用melonJS框架中input模块中isKeyPressed方法的结果，它会返回一个布尔值表示是否按下了指定的键或动作。这个方法接受一个参数：
        //“fly”, 这个参数表示要检测的键或动作的名称，这里是"fly"，表示空格键或鼠标点击或触摸屏幕。
      {
            me.audio.play("wing"),//播放声音
                this.gravityForce = .2;
            var c = this.pos.y;
            //声明一个变量c，并赋值为实例位置属性（pos）中y坐标的值，表示实例当前y坐标。
            this.angleTween.stop(),
                //调用实例angleTween属性中stop方法的语句，它会停止angleTween缓动效果
                this.flyTween.stop(),
                //停止flyTween缓动效果
                this.flyTween.to({
                    y: c - 72
                }, 50),
            //    调用实例flyTween属性中to方法的语句，它会设置flyTween缓动效果的目标属性值和持续时间。这个方法接受两个参数：
            //{ y: c - 72 }, 这个参数是一个对象，表示要改变的属性和值，这里是y属性，表示实例位置属性（pos）中y坐标的值，要改变为c - 72，即当前y坐标减去72像素。
            //50, 这个参数是一个数字，表示缓动效果的持续时间，单位是毫秒（ms），这里是50毫秒。
                this.flyTween.start(),
                //开始缓动
                this.angleTween.to({
                    currentAngle: b.maxAngleRotation
                }, 50).onComplete(function (a) {
                    b.renderable.currentTransform.rotate(b.maxAngleRotation)
                }),
                this.angleTween.start()//大概就是改变角度和持续时间
        } else
            this.gravityForce += .2,
                this.pos.y += me.timer.tick * this.gravityForce,
                this.currentAngle += Number.prototype.degToRad(3),//大概是重力和角度
                this.currentAngle >= this.maxAngleRotationDown && (this.renderable.currentTransform.identity(),
                    this.currentAngle = this.maxAngleRotationDown);
        //表示实例当前旋转角度是否大于等于最大角度。
        this.renderable.currentTransform.rotate(this.currentAngle),
            me.Rect.prototype.updateBounds.apply(this);
        //this.currentAngle, 这个参数表示要旋转的角度，这里是实例当前旋转角度的值。
        var d = -80;//表示一个临界值
        return this.pos.y <= d || this.collided ? (game.data.start = !1,
            me.audio.play("lose"),//
            this.endAnimation(),
            !1) : (me.collision.check(this),
                !0)
    },
    onCollision: function (a) {
        // 定义一个名为onCollision的方法，这个方法是一个函数，会在实例与其他实体发生碰撞时执行
        var b = a.b;
         // 声明一个变量b，并赋值为a.b，表示碰撞对象中的另一个实体
        ("pipe" === b.type || "ground" === b.type) && (me.device.vibrate(500),
             // 如果另一个实体的类型（type）属性是"pipe"或"ground"，表示碰撞调用me.device.vibrate方法，使设备振动500毫秒
            this.collided = !0),
            "hit" === b.type && (me.game.world.removeChildNow(b),
            game.data.steps++,
             // 如果另一个实体的类型（type）属性是"hit"，表示碰撞到了金币
             // 调用me.game.world.removeChildNow方法，移除另一个实体
             // 给game.data.steps属性加1，并赋值给自身，表示游戏的步数增加1 game.data.steps++,
                me.audio.play("hit"))//播放名为"hit"的音频资源
    },
    endAnimation: function () {
        //实例结束动画时执行 
        me.game.viewport.fadeOut("#fff", 100);
        var a = this.pos.y;
        this.endTween = new me.Tween(this.pos),
            this.endTween.easing(me.Tween.Easing.Exponential.InOut),
            this.flyTween.stop(),
            this.renderable.currentTransform.identity(),
            this.renderable.currentTransform.rotate(Number.prototype.degToRad(90));
        var b = me.game.viewport.height - this.renderable.width / 2 - 96;
        this.endTween.to({
            y: a
        }, 1e3).to({
            y: b
        }, 1e3).onComplete(function () {
            me.state.change(me.state.GAME_OVER)
        }),
            this.endTween.start()
    }
}),
    game.PipeEntity = me.Entity.extend({
        //继承自me.Entity和me.Renderable类的，分别用来表示游戏中的管道障碍物和管道生成器
        init: function (a, b) {
            var c = {};
            c.image = this.image = me.loader.getImage("pipe"),
                //c添加一个名为image的属性，并赋值为一个调用me.loader.getImage方法的结果
                c.width = 148,
                c.height = 1664,
                c.framewidth = 148,
                c.frameheight = 1664,//实列高度
                this._super(me.Entity, "init", [a, b, c]),
                this.alwaysUpdate = !0,
                 // 给实例添加一个名为alwaysUpdate的属性，并赋值为!0，即true，表示实例是否总是更新状态，即使不在视野范围内也更新
                this.body.gravity = 0,
                this.body.vel.set(-5, 0),
                // 调用实例body属性中vel属性中set方法，设置实例的速度向量
                this.type = "pipe"
        },
        update: function (a) {
             // 定义一个名为update的方法，这个方法是一个函数，会在每一帧（frame）更新实例的状态和行为。这个方法接受一个参数a，表示每一帧持续的时间（delta time）
            return game.data.start ? (this.pos.add(this.body.vel),
                 // 如果game.data.start属性为假，表示游戏未开始
                this.pos.x < -this.image.width && me.game.world.removeChild(this),
                me.Rect.prototype.updateBounds.apply(this),
                this._super(me.Entity, "update", [a]), !0) : this._super(me.Entity, "update", [a])

        }
    }),
    game.PipeGenerator = me.Renderable.extend({
        init: function () {
            this._super(me.Renderable, "init", [0, me.game.viewport.width, me.game.viewport.height, 92]),

                this.alwaysUpdate = !0,
                this.generate = 0,
                this.pipeFrequency = 92,
                 // 给实例添加一个名为pipeFrequency的属性，并赋值为92，表示实例生成管道的频率，每隔92帧生成一次
                this.pipeHoleSize = 1240,
                // 给实例添加一个名为pipeHoleSize的属性，并赋值为1240，表示实例生成管道的空隙大小，单位是像素
                this.posX = me.game.viewport.width
        },
        update: function (a) {
            if (this.generate++ % this.pipeFrequency == 0)
             // 声明一个变量b，并赋值为一个调用Number类原型（prototype）中random方法的结果，这个方法会返回指定范围内的一个随机数。这里指定范围为me.video.renderer.getHeight()

                  {
                var b = Number.prototype.random(me.video.renderer.getHeight() - 100, 200)
 // 第一个参数是me.video.renderer.getHeight() - 100，表示随机数的最小值，这里是渲染器（renderer）高度减去100像素 me.video.renderer.getHeight() - 100,
                    , c = b - me.game.viewport.height - this.pipeHoleSize
                    // 声明一个变量c，并赋值为b - me.game.viewport.height - this.pipeHoleSize，表示上方管道的y坐标
                    //  第三个参数是b，表示要获取或创建对象的y坐标，这里是下方管道的y坐标 b
                    , d = new me.pool.pull("pipe", this.posX, b)
                    // 声明一个变量d，并赋值为一个调用me.pool模块中pull方法的结果，这个方法会从对象池（pool）中获取或创建一个指定类型和参数的对象，第一个参数是"pipe"，表示要获取或创建的对象类型，第二个参数是this.posX，表示要获取或创建对象的x坐标
                     // 第三个参数是c，表示要获取或创建对象的y坐标，这里是上方管道的y坐标
                    , e = new me.pool.pull("pipe", this.posX, c)
                     // 声明一个变量e，并赋值为另一个调用me.pool模块中pull方法的结果
                    , f = b - 100
           //     f = c-50
                    // 声明一个变量f，并赋值为b - 100，表示金币的y坐标
                    , g = new me.pool.pull("hit", this.posX, f);
                // 第一个参数是"hit"，表示要获取或创建的对象类型，创建对象的x坐标，这里是管道生成器posX属性的值,第三个参数是f，表示要获取或创建对象的y坐标，这里是金币的y坐标
                d.renderable.currentTransform.scaleY(-1),
                     // 给-1作为缩放比例传递给scaleY方法，表示将渲染对象沿着y轴反转，即上下颠倒
                    me.game.world.addChild(d, 10),
                    // 第一个参数是d，表示要添加的对象"pipe"
        // 第二个参数是10，表示要添加对象的z轴索引（z-index），表示在游戏世界中的显示层级。数字越大，层级越高
                    me.game.world.addChild(e, 10),
                    me.game.world.addChild(g, 11)
                // 调用me.game.world.addChild方法，将金币实例g添加到游戏世界中，并指定其z轴层级为11
            }
            this._super(me.Entity, "update", [a])
        }
    }),
    game.HitEntity = me.Entity.extend(
// 定义一个名为game.HitEntity的类，这个类是继承自me.Entity类的，用来表示游戏中的金币
        {
        init: function (a, b) {
            var c = {};
            c.image = this.image = me.loader.getImage("hit"),
                c.width = 148,
                c.height = 60,
                c.framewidth = 148,
                c.frameheight = 60,
                this._super(me.Entity, "init", [a, b, c]),
                this.alwaysUpdate = !0,
                this.body.gravity = 0,
                this.updateTime = !1,
                this.renderable.alpha = 0,
                this.body.accel.set(-5, 0),
                this.body.removeShapeAt(0),
                this.body.addShape(new me.Rect(0, 0, c.width - 30, c.height - 30)),
                // 第一个参数是0，表示矩形形状相对于实体位置（pos）中x坐标的偏移量（offset）
                // 第二个参数是0，表示矩形形状相对于实体位置（pos）中y坐标的偏移量（offset） 
                // 第三个参数是c.width - 30，表示矩形
                this.type = "hit"
        },
        update: function (a) {//大概是出界就移除
            return this.pos.add(this.body.accel),
                this.pos.x < -this.image.width && me.game.world.removeChild(this),
                me.Rect.prototype.updateBounds.apply(this),
                this._super(me.Entity, "update", [a]),
                !0
        }
    }),
    game.Ground = me.Entity.extend({//大概是地面的图形和移动速度
        init: function (a, b) {
            //参数a和b，分别表示实例的初始x坐标和y坐标
            var c = {};
            c.image = me.loader.getImage("ground"),
                c.width = 900,
                c.height = 96,
                this._super(me.Entity, "init", [a, b, c]),
                this.alwaysUpdate = !0,
                this.body.gravity = 0,
                this.body.vel.set(-4, 0),
                this.type = "ground"
        },
        update: function (a) {
            return this.pos.add(this.body.vel),
                this.pos.x < -this.renderable.width && (this.pos.x = me.video.renderer.getWidth() - 10),
                me.Rect.prototype.updateBounds.apply(this),
                this._super(me.Entity, "update", [a])
        }
    }),
    game.HUD = game.HUD || {},
    // 定义一个名为game.HUD的对象，如果已经存在则保持不变，否则赋值为一个空对象。
    game.HUD.Container = me.Container.extend({
        //这个对象用来存储游戏中的头部显示（HUD）相关的内容
        init: function () {
            this._super(me.Container, "init"),
                this.isPersistent = !0,
                this.collidable = !1,
                // 给实例添加一个名为z的属性，并赋值为1 / 0，即无穷大（Infinity），表示实例在游戏世界中的z轴索引（z-index），表示在游戏世界中的显示层级。数字越大，层级越
                this.z = 1 / 0,
                this.name = "HUD",
                this.addChild(new game.HUD.ScoreItem(5, 5))
            // 给game.HUD对象添加一个名为ScoreItem的属性，并赋值为一个继承自me.Renderable类的类，用来表示游戏中的分数显示（Score Item）
        }
    }),
    game.HUD.ScoreItem = me.Renderable.extend({
        init: function (a, b) {
            this._super(me.Renderable, "init", [a, b, 10, 10]),
                this.stepsFont = new me.Font("gamefont", 80, "#FFF", "center"),
                // 给实例添加一个名为stepsFont的属性，并赋值为一个新创建的me.Font对象，表示实例使用的字体。me.Font对象是一种用来绘制文本的对象，它接受四个参数
                // 第一个参数是"gamefont"，表示字体名称 
                // 第二个参数是80，表示字体大小为80像素 
                // 第三个参数是"#000"，表示字体颜色为黑色 
                // 第四个参数是"center"，表示字体对齐方式为居中
                this.floating = !0
        },
        draw: function (a) {
            game.data.start && me.state.isCurrent(me.state.PLAY) && this.stepsFont.draw(a, game.data.steps, me.game.viewport.width / 2, 10)
        }
    });
var BackgroundLayer = me.ImageLayer.extend({
    //背景层
    init: function (a, b, c) {
        var d = {};
        d.name = a,
            d.width = 900,
            d.height = 600,
            d.image = a,
            d.z = b,
            d.ratio = 1,
            this._super(me.ImageLayer, "init", [0, 0, d])
    },
    update: function () {
        //根据game.data.muted属性的值来开启或关闭音频
        return me.input.isKeyPressed("mute") && (game.data.muted = !game.data.muted,
            game.data.muted ? me.audio.disable() : me.audio.enable()),
            !0
    }
});
game.TitleScreen = me.ScreenObject.extend({ //标题画面
    init: function () {
        this._super(me.ScreenObject, "init"),
            this.font = null,
            this.ground1 = null,
            this.ground2 = null,
            this.logo = null
    },
    onResetEvent: function () {
       //一个函数，会在每次进入标题画面时执行。这个方法会设置一些输入绑定，事件订阅，添加一些子对象到游戏世界中，如背景层，地面，logo等
        me.audio.stop("theme"),
            game.data.newHiScore = !1,
            me.game.world.addChild(new BackgroundLayer("bg", 1)),
            me.input.bindKey(me.input.KEY.ENTER, "enter", !0),
            me.input.bindKey(me.input.KEY.SPACE, "enter", !0),
            me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER),
            this.handler = me.event.subscribe(me.event.KEYDOWN, function (a, b, c) {
                "enter" === a && me.state.change(me.state.PLAY)
            }),
            this.logo = new me.Sprite(me.game.viewport.width / 2, me.game.viewport.height / 2 - 20, {
                image: "logo"
            }),
            me.game.world.addChild(this.logo, 10);
        me.pool.pull("me.Tween", this.logo.pos).to({
            y: me.game.viewport.height / 2 - 100
        }, 1e3).easing(me.Tween.Easing.Exponential.InOut).start();
        this.ground1 = me.pool.pull("ground", 0, me.video.renderer.getHeight() - 96),
            this.ground2 = me.pool.pull("ground", me.video.renderer.getWidth(), me.video.renderer.getHeight() - 96),
            me.game.world.addChild(this.ground1, 11),
            me.game.world.addChild(this.ground2, 11),
            me.game.world.addChild(new (me.Renderable.extend({
                init: function () {
                    this._super(me.Renderable, "init", [0, 0, 100, 100]),
                        this.text = me.device.touch ? "Tap to start" : 'PRESS SPACE OR CLICK LEFT MOUSE BUTTON TO START \n											PRESS "M" TO MUTE SOUND',
                        this.font = new me.Font("gamefont", 20, "#fff")
                },
                draw: function (a) {
                    var b = this.font.measureText(a, this.text)
                        , c = me.game.viewport.width / 2 - b.width / 2
                        , d = me.game.viewport.height / 2 + 50;
                    this.font.draw(a, this.text, c, d)
                }
            })), 12)
    },
    onDestroyEvent: function () {
        //次离开标题画面时执行。这个方法会取消一些输入绑定
        me.event.unsubscribe(this.handler),
            me.input.unbindKey(me.input.KEY.ENTER),
            me.input.unbindKey(me.input.KEY.SPACE),
            me.input.unbindPointer(me.input.pointer.LEFT),
            this.ground1 = null,
            this.ground2 = null,
            me.game.world.removeChild(this.logo),
            this.logo = null
    }
}),
    game.PlayScreen = me.ScreenObject.extend({
        init: function () {
            me.audio.play("theme", !0);
            var a = -1 !== me.device.ua.indexOf("Firefox") ? .3 : .5;
            me.audio.setVolume(a),
                this._super(me.ScreenObject, "init")
        },
        onResetEvent: function () {
            me.game.reset(),
                me.audio.stop("theme"),
                game.data.muted || me.audio.play("theme", !0),
                me.input.bindKey(me.input.KEY.SPACE, "fly", !0),
                game.data.score = 0,
                game.data.steps = 0,
                game.data.start = !1,
                game.data.newHiscore = !1,
                me.game.world.addChild(new BackgroundLayer("bg", 1)),
                this.ground1 = me.pool.pull("ground", 0, me.game.viewport.height - 96),
                this.ground2 = me.pool.pull("ground", me.game.viewport.width, me.game.viewport.height - 96),
                me.game.world.addChild(this.ground1, 11),
                me.game.world.addChild(this.ground2, 11),
                this.HUD = new game.HUD.Container,
                me.game.world.addChild(this.HUD, 11),

               this.hit= me.pool.pull("hit", me.game.viewport.width / 2, me.game.viewport.height / 2 - 100),
                me.game.world.addChild(this.hit, 10),//添

                this.bird = me.pool.pull("clumsy", 60, me.game.viewport.height / 2 - 100),
                me.game.world.addChild(this.bird, 10),
                me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.SPACE),
                this.getReady = new me.Sprite(me.game.viewport.width / 2, me.game.viewport.height / 2, {
                    image: "getready"
                }),
                me.game.world.addChild(this.getReady, 11);
            var a = this;
            new me.Tween(this.getReady).to({
                alpha: 0
            }, 2e3).easing(me.Tween.Easing.Linear.None).onComplete(function () {
                game.data.start = !0,
                    me.game.world.addChild(new game.PipeGenerator, 0),
                    me.game.world.removeChild(a.getReady)
            }).start()
        },
//        // 声明一个变量h，并赋值为一个调用me.pool模块中pull方法的结果，这个方法会从对象池（pool）中获取或创建一个指定类型和参数的对象。这个方法接受三个参数：
//        var h = me.pool.pull("hit", me.game.viewport.width / 2, me.game.viewport.height / 2 - 100),
//        // 第一个参数是"hit"，表示要获取或创建的对象类型，这里是game.HitEntity类
//        // 第二个参数是me.game.viewport.width / 2，表示要获取或创建对象的x坐标，这里是视口（viewport）宽度除以2，即居中显示
//        // 第三个参数是me.game.viewport.height / 2 - 100，表示要获取或创建对象的y坐标，这里是视口（viewport）高度除以2减去100像素，即稍微偏上显示
//        // 调用me.game.world.addChild方法，将h对象添加到游戏世界中。这个方法接受两个参数：
//        me.game.world.addChild(h, 10),
//// 第一个参数是h，表示要添加的对象
//// 第二个参数是10，表示要添加对象的z轴索引（z-index），表示在游戏世界中的显示层级。数字越大，层级越高

        onDestroyEvent: function () {
            me.audio.stopTrack("theme"),
                this.HUD = null,
                this.bird = null,
                this.ground1 = null,
                this.ground2 = null,
                me.input.unbindKey(me.input.KEY.SPACE),
                me.input.unbindPointer(me.input.pointer.LEFT)
        }
    }),
    game.GameOverScreen = me.ScreenObject.extend({
        init: function () {
            this.savedData = null,
                this.handler = null
        },
        onResetEvent: function () {
            this.savedData = {
                score: game.data.score,
                steps: game.data.steps
            },
                me.save.add(this.savedData),
                me.save.topSteps || me.save.add({
                    topSteps: game.data.steps
                }),
                game.data.steps > me.save.topSteps && (me.save.topSteps = game.data.steps,
                    game.data.newHiScore = !0),
                me.input.bindKey(me.input.KEY.ENTER, "enter", !0),
                me.input.bindKey(me.input.KEY.SPACE, "enter", !1),
                me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER),
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (a, b, c) {
                    "enter" === a && me.state.change(me.state.MENU)
                }),
                me.game.world.addChild(new me.Sprite(me.game.viewport.width / 2, me.game.viewport.height / 2 - 100, {
                    image: "gameover"
                }), 12);
            var a = new me.Sprite(me.game.viewport.width / 2, me.game.viewport.height / 2, {
                image: "gameoverbg"
            });
            if (me.game.world.addChild(a, 10),
                me.game.world.addChild(new BackgroundLayer("bg", 1)),
                this.ground1 = me.pool.pull("ground", 0, me.game.viewport.height - 96),
                this.ground2 = me.pool.pull("ground", me.game.viewport.width, me.video.renderer.getHeight() - 96),
                me.game.world.addChild(this.ground1, 11),
                me.game.world.addChild(this.ground2, 11),
                game.data.newHiScore) {
                var b = new me.Sprite(a.width / 2, a.height / 2, {
                    image: "new"
                });
                me.game.world.addChild(b, 12)
            }
            this.dialog = new (me.Renderable.extend({
                init: function () {
                    this._super(me.Renderable, "init", [0, 0, me.game.viewport.width / 2, me.game.viewport.height / 2]),
                        this.font = new me.Font("gamefont", 40, "black", "left"),
                        this.steps = "Steps: " + game.data.steps.toString(),
                        this.topSteps = "Higher Step: " + me.save.topSteps.toString()
                },
                draw: function (a) {
                    var b = this.font.measureText(a, this.steps);
                    this.font.measureText(a, this.topSteps),
                        this.font.measureText(a, this.score);
                    this.font.draw(a, this.steps, me.game.viewport.width / 2 - b.width / 2 - 60, me.game.viewport.height / 2),
                        this.font.draw(a, this.topSteps, me.game.viewport.width / 2 - b.width / 2 - 60, me.game.viewport.height / 2 + 50)
                }
            })),
                me.game.world.addChild(this.dialog, 12)
        },
        onDestroyEvent: function () {
            me.event.unsubscribe(this.handler),
                me.input.unbindKey(me.input.KEY.ENTER),
                me.input.unbindKey(me.input.KEY.SPACE),
                me.input.unbindPointer(me.input.pointer.LEFT),
                this.ground1 = null,
                this.ground2 = null,
                this.font = null,
                me.audio.stop("theme")
        }
    });
