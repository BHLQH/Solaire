//game.BirdEntity = me.Entity.extend({
//    init: function(x, y) {
//        var settings = {};
//        settings.image = 'clumsy';
//        settings.width = 85;
//        settings.height = 60;

//        this._super(me.Entity, 'init', [x, y, settings]);
//        this.alwaysUpdate = true;
//        this.body.gravity = 0.2;
//        this.maxAngleRotation = Number.prototype.degToRad(-30);
//        this.maxAngleRotationDown = Number.prototype.degToRad(35);
//        this.renderable.addAnimation("flying", [0, 1, 2]);
//        this.renderable.addAnimation("idle", [0]);
//        this.renderable.setCurrentAnimation("flying");
//        //this.renderable.anchorPoint = new me.Vector2d(0.1, 0.5);
//        this.body.removeShapeAt(0);
//        this.body.addShape(new me.Ellipse(5, 5, 71, 51));

//        // a tween object for the flying physic effect
//        this.flyTween = new me.Tween(this.pos);
//        this.flyTween.easing(me.Tween.Easing.Exponential.InOut);

//        this.currentAngle = 0;
//        this.angleTween = new me.Tween(this);
//        this.angleTween.easing(me.Tween.Easing.Exponential.InOut);

//        // end animation tween
//        this.endTween = null;

//        // collision shape
//        this.collided = false;

//        this.gravityForce = 0.2;
//    },

//    update: function(dt) {
//        var that = this;
//        this.pos.x = 60;
//        if (!game.data.start) {
//            return this._super(me.Entity, 'update', [dt]);
//        }
//        this.renderable.currentTransform.identity();
//        if (me.input.isKeyPressed('fly')) {
//            me.audio.play('wing');
//            this.gravityForce = 0.2;
//            var currentPos = this.pos.y;

//            this.angleTween.stop();
//            this.flyTween.stop();


//            this.flyTween.to({y: currentPos - 72}, 50);
//            this.flyTween.start();

//            this.angleTween.to({currentAngle: that.maxAngleRotation}, 50).onComplete(function(angle) {
//                that.renderable.currentTransform.rotate(that.maxAngleRotation);
//            })
//            this.angleTween.start();

//        } else {
//            this.gravityForce += 0.2;
//            this.pos.y += me.timer.tick * this.gravityForce;
//            this.currentAngle += Number.prototype.degToRad(3);
//            if (this.currentAngle >= this.maxAngleRotationDown) {
//                this.renderable.currentTransform.identity();
//                this.currentAngle = this.maxAngleRotationDown;
//            }
//        }
//        this.renderable.currentTransform.rotate(this.currentAngle);
//        me.Rect.prototype.updateBounds.apply(this);

//        var hitSky = -80; // bird height + 20px
//        if (this.pos.y <= hitSky || this.collided) {
//            game.data.start = false;
//            me.audio.play("lose");
//            this.endAnimation();
//            return false;
//        }
//        me.collision.check(this);
//        return true;
//    },

//    onCollision: function(response) {
//        var obj = response.b;
//        if (obj.type === 'pipe' || obj.type === 'ground') {
//            me.device.vibrate(500);
//            this.collided = true;
//        }
//        // remove the hit box
//        if (obj.type === 'hit') {
//            me.game.world.removeChildNow(obj);
//            game.data.steps++;
//            me.audio.play('hit');
//        }
//    },

//    endAnimation: function() {
//        me.game.viewport.fadeOut("#fff", 100);
//        var currentPos = this.pos.y;
//        this.endTween = new me.Tween(this.pos);
//        this.endTween.easing(me.Tween.Easing.Exponential.InOut);

//        this.flyTween.stop();
//        this.renderable.currentTransform.identity();
//        this.renderable.currentTransform.rotate(Number.prototype.degToRad(90));
//        var finalPos = me.game.viewport.height - this.renderable.width/2 - 96;
//        this.endTween
//            .to({y: currentPos}, 1000)
//            .to({y: finalPos}, 1000)
//            .onComplete(function() {
//                me.state.change(me.state.GAME_OVER);
//            });
//        this.endTween.start();
//    }

//});


//game.PipeEntity = me.Entity.extend({
//    init: function(x, y) {
//        var settings = {};
//        settings.image = this.image = me.loader.getImage('pipe');
//        settings.width = 148;
//        settings.height= 1664;
//        settings.framewidth = 148;
//        settings.frameheight = 1664;

//        this._super(me.Entity, 'init', [x, y, settings]);
//        this.alwaysUpdate = true;
//        this.body.gravity = 0;
//        this.body.vel.set(-5, 0);
//        this.type = 'pipe';
//    },

//    update: function(dt) {
//        // mechanics
//        if (!game.data.start) {
//            return this._super(me.Entity, 'update', [dt]);
//        }
//        this.pos.add(this.body.vel);
//        if (this.pos.x < -this.image.width) {
//            me.game.world.removeChild(this);
//        }
//        me.Rect.prototype.updateBounds.apply(this);
//        this._super(me.Entity, 'update', [dt]);
//        return true;
//    },

//});

//game.PipeGenerator = me.Renderable.extend({
//    init: function() {
//        this._super(me.Renderable, 'init', [0, me.game.viewport.width, me.game.viewport.height, 92]);
//        this.alwaysUpdate = true;
//        this.generate = 0;
//        this.pipeFrequency = 92;
//        this.pipeHoleSize = 1240;
//        this.posX = me.game.viewport.width;
//    },

//    update: function(dt) {
//        if (this.generate++ % this.pipeFrequency == 0) {
//            var posY = Number.prototype.random(
//                    me.video.renderer.getHeight() - 100,
//                    200
//            );
//            var posY2 = posY - me.game.viewport.height - this.pipeHoleSize;
//            var pipe1 = new me.pool.pull('pipe', this.posX, posY);
//            var pipe2 = new me.pool.pull('pipe', this.posX, posY2);
//            var hitPos = posY - 100;
//            var hit = new me.pool.pull("hit", this.posX, hitPos);
//            pipe1.renderable.currentTransform.scaleY(-1);
//            me.game.world.addChild(pipe1, 10);
//            me.game.world.addChild(pipe2, 10);
//            me.game.world.addChild(hit, 11);
//        }
//        this._super(me.Entity, "update", [dt]);
//    },

//});

//game.HitEntity = me.Entity.extend({
//    init: function(x, y) {
//        var settings = {};
//        settings.image = this.image = me.loader.getImage('hit');
//        settings.width = 148;
//        settings.height= 60;
//        settings.framewidth = 148;
//        settings.frameheight = 60;

//        this._super(me.Entity, 'init', [x, y, settings]);
//        this.alwaysUpdate = true;
//        this.body.gravity = 0;
//        this.updateTime = false;
//        this.renderable.alpha = 0;
//        this.body.accel.set(-5, 0);
//        this.body.removeShapeAt(0);
//        this.body.addShape(new me.Rect(0, 0, settings.width - 30, settings.height - 30));
//        this.type = 'hit';
//    },

//    update: function(dt) {
//        // mechanics
//        this.pos.add(this.body.accel);
//        if (this.pos.x < -this.image.width) {
//            me.game.world.removeChild(this);
//        }
//        me.Rect.prototype.updateBounds.apply(this);
//        this._super(me.Entity, "update", [dt]);
//        return true;
//    },

//});

//game.Ground = me.Entity.extend({
//    init: function(x, y) {
//        var settings = {};
//        settings.image = me.loader.getImage('ground');
//        settings.width = 900;
//        settings.height= 96;
//        this._super(me.Entity, 'init', [x, y, settings]);
//        this.alwaysUpdate = true;
//        this.body.gravity = 0;
//        this.body.vel.set(-4, 0);
//        this.type = 'ground';
//    },

//    update: function(dt) {
//        // mechanics
//        this.pos.add(this.body.vel);
//        if (this.pos.x < -this.renderable.width) {
//            this.pos.x = me.video.renderer.getWidth() - 10;
//        }
//        me.Rect.prototype.updateBounds.apply(this);
//        return this._super(me.Entity, 'update', [dt]);
//    },

//});
// JavaScript source code
game.BirdEntity = me.Entity.extend({//实体类
    init: function (x, y) {
        var settings = {};
        settings.image = 'clumsy';
        //settings.width = 85;
        //settings.height = 60;
        settings.width = 50;
        settings.height = 50;

        /* this._super(me.Entity, 'init', [x, y, settings]);*/
        this._super = this._super || Object.getPrototypeOf(BirdEntity.prototype);/*获取父类的原型，否则会报错。*/
        super.init(x, y, settings);//MJS2
        this.alwaysUpdate = true;
        this.body.gravity = 0.2;
        this.maxAngleRotation = Number.prototype.degToRad(-30);
        this.maxAngleRotationDown = Number.prototype.degToRad(35);
        this.renderable.addAnimation("flying", [0, 1, 2]);
        this.renderable.addAnimation("idle", [0]);
        this.renderable.setCurrentAnimation("flying");
        //this.renderable.anchorPoint = new me.Vector2d(0.1, 0.5);
        this.body.removeShapeAt(0);
        this.body.addShape(new me.Ellipse(5, 5, 71, 51));

        // a tween object for the flying physic effect
        this.flyTween = new me.Tween(this.pos);
        this.flyTween.easing(me.Tween.Easing.Exponential.InOut);

        this.currentAngle = 0;
        this.angleTween = new me.Tween(this);
        this.angleTween.easing(me.Tween.Easing.Exponential.InOut);

        // end animation tween
        this.endTween = null;

        // collision shape
        this.collided = false;

        this.gravityForce = 0.2;
    },

    update: function (dt) {
        var that = this;
        this.pos.x = 60;
        if (!game.data.start) {
            return this._super(me.Entity, 'update', [dt]);
        }
        this.renderable.currentTransform.identity();
        if (me.input.isKeyPressed('fly')) {
            me.audio.play('wing');
            this.gravityForce = 0.2;
            var currentPos = this.pos.y;

            this.angleTween.stop();
            this.flyTween.stop();


            this.flyTween.to({ y: currentPos - 72 }, 50);
            this.flyTween.start();

            this.angleTween.to({ currentAngle: that.maxAngleRotation }, 50).onComplete(function (angle) {
                that.renderable.currentTransform.rotate(that.maxAngleRotation);
            })
            this.angleTween.start();

        } else {
            this.gravityForce += 0.2;
            this.pos.y += me.timer.tick * this.gravityForce;
            this.currentAngle += Number.prototype.degToRad(3);
            if (this.currentAngle >= this.maxAngleRotationDown) {
                this.renderable.currentTransform.identity();
                this.currentAngle = this.maxAngleRotationDown;
            }
        }
        this.renderable.currentTransform.rotate(this.currentAngle);
        /* me.Rect.prototype.updateBounds.apply(this);*/

        this.body.updateBounds(); //更新主角的边界
        var hitSky = -80; // bird height + 20px
        if (this.pos.y <= hitSky || this.collided) {
            game.data.start = false;
            me.audio.play("lose");
            this.endAnimation();
            return false;
        }
        me.collision.check(this);
        return true;
    },

    onCollision: function (response) {
        var obj = response.b;
        if (obj.type === 'pipe' || obj.type === 'ground') {
            me.device.vibrate(500);
            this.collided = true;
        }
        // remove the hit box
        if (obj.type === 'hit') {
            /*me.game.world.removeChildNow(obj);*/
            me.game.world.removeChild(obj); //移除碰撞实体
            game.data.steps++;
            me.audio.play('hit');
        }
    },

    endAnimation: function () {
        me.game.viewport.fadeOut("#fff", 100);
        var currentPos = this.pos.y;
        this.endTween = new me.Tween(this.pos);
        this.endTween.easing(me.Tween.Easing.Exponential.InOut);

        this.flyTween.stop();
        this.renderable.currentTransform.identity();
        this.renderable.currentTransform.rotate(Number.prototype.degToRad(90));
        var finalPos = me.game.viewport.height - this.renderable.width / 2 - 96;
        this.endTween
            .to({ y: currentPos }, 1000)
            .to({ y: finalPos }, 1000)
            .onComplete(function () {
                /*   me.state.change(me.state.GAME_OVER);*/
                me.state.set(me.state.GAMEOVER, new GameOverScreen());
                //设置游戏结束状态，并且传入一个GameOverScreen对象作为参数
                me.state.change(me.state.GAMEOVER);
            });
        this.endTween.start();
    }

});


game.PipeEntity = me.Entity.extend({
    init: function (x, y) {
        var settings = {};
        settings.image = this.image = me.loader.getImage('pipe');//一个图片资源的名称作为参数，然后返回一个图片对象,资源名称在game.js文件中定义,resources数组中每个资源都有一个name属性和一个src属性，name属性表示资源的名称，src属性表示资源的路径
        settings.width = 148;
        settings.height = 1664;
        settings.framewidth = 148;
        settings.frameheight = 1664;

        this._super(me.Entity, 'init', [x, y, settings]);
        this.alwaysUpdate = true;
        this.body.gravity = 0;
        this.body.vel.set(-5, 0);
        this.type = 'pipe';
    },

    update: function (dt) {
        // mechanics
        if (!game.data.start) {
            return this._super(me.Entity, 'update', [dt]);
        }
        this.pos.add(this.body.vel);
        if (this.pos.x < -this.image.width) {
            me.game.world.removeChild(this);
        }
        me.Rect.prototype.updateBounds.apply(this);
        this._super(me.Entity, 'update', [dt]);
        return true;
    },

});

game.PipeGenerator = me.Renderable.extend({//继承自me.Renderable类
    init: function () {
        this._super(me.Renderable, 'init', [0, me.game.viewport.width, me.game.viewport.height, 92]);
        this.alwaysUpdate = true;
        this.generate = 0;
        this.pipeFrequency = 92;
        this.pipeHoleSize = 1240;
        this.posX = me.game.viewport.width;
    },

    update: function (dt) {
        if (this.generate++ % this.pipeFrequency == 0) {
            var posY = Number.prototype.random(
                me.video.renderer.getHeight() - 100,
                200
            );
            var posY2 = posY - me.game.viewport.height - this.pipeHoleSize;
            var pipe1 = new me.pool.pull('pipe', this.posX, posY);
            var pipe2 = new me.pool.pull('pipe', this.posX, posY2);
            var hitPos = posY - 100;
            var hit = new me.pool.pull("hit", this.posX, hitPos);
            pipe1.renderable.currentTransform.scaleY(-1);
            me.game.world.addChild(pipe1, 10);
            me.game.world.addChild(pipe2, 10);
 /*             me.game.world.addChild(hit, 11);*/
            me.game.world.addChild(hit, 15);
        }
        this._super(me.Entity, "update", [dt]);
    },

});

game.HitEntity = me.Entity.extend({
    //初始化金币实体的属性和方法
    init: function (x, y) {
        var settings = {};
        settings.image = this.image = me.loader.getImage('hit');
        settings.width = 148;
        settings.height = 60;
        settings.framewidth = 148;
        settings.frameheight = 60;

        this._super(me.Entity, 'init', [x, y, settings]);
        this.alwaysUpdate = true;
        this.body.gravity = 0;
        ///*   this.updateTime = false;*/pdateTime属性设置为false，这意味着不会更新时间戳，在某些情况下可能会导致渲染问题
        this.updateTime = true;
        this.renderable.alpha = 0;//renderable.alpha属性设置为0，这意味着是完全透明的
        this.body.accel.set(-5, 0);
        this.body.removeShapeAt(0);
        this.body.addShape(new me.Rect(0, 0, settings.width - 30, settings.height - 30));
        this.type = 'hit';
    },

    update: function (dt) {
        // mechanics
        this.pos.add(this.body.accel);
        if (this.pos.x < -this.image.width) {
            me.game.world.removeChild(this);
        }
        me.Rect.prototype.updateBounds.apply(this);
        this._super(me.Entity, "update", [dt]);
        return true;
    },

});

game.Ground = me.Entity.extend({
    init: function (x, y) {
        var settings = {};
        settings.image = me.loader.getImage('ground');
        settings.width = 900;
        settings.height = 96;
        this._super(me.Entity, 'init', [x, y, settings]);
        this.alwaysUpdate = true;
        this.body.gravity = 0;
        this.body.vel.set(-4, 0);
        this.type = 'ground';
    },

    update: function (dt) {
        // mechanics
        this.pos.add(this.body.vel);
        if (this.pos.x < -this.renderable.width) {
            this.pos.x = me.video.renderer.getWidth() - 10;
        }
        me.Rect.prototype.updateBounds.apply(this);
        return this._super(me.Entity, 'update', [dt]);
    },

});

