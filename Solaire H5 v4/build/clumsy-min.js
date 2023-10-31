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
        loaded: function () { // ����һ����Ϊloaded�ķ��������������һ��������������Դ������ɺ�ִ��
            me.state.set(me.state.MENU, new game.TitleScreen), // ����melonJS�����stateģ����set������������Ϸ�Ĳ˵�״̬��MENU����Ӧ����Ļ����Ϊһ���´�����game.TitleScreen�������������һ���Զ�����࣬������ʾ��Ϸ�ı�����Ļ
                me.state.set(me.state.PLAY, new game.PlayScreen), // ����melonJS�����stateģ����set������������Ϸ�Ĳ���״̬��PLAY����Ӧ����Ļ����Ϊһ���´�����game.PlayScreen�������������һ���Զ�����࣬������ʾ��Ϸ����Ҫ����
                me.state.set(me.state.GAME_OVER, new game.GameOverScreen), // ����melonJS�����stateģ����set������������Ϸ�Ľ���״̬��GAME_OVER����Ӧ����Ļ����Ϊһ���´�����game.GameOverScreen�������������һ���Զ�����࣬������ʾ��Ϸ�Ľ�������
                me.input.bindKey(me.input.KEY.SPACE, "fly", !0), // ����melonJS�����inputģ����bindKey�������󶨿ո����KEY.SPACE����"fly"�����������õ���������Ϊ!0����true����ʾ�ڰ��º��ɿ�ʱ����������
                me.input.bindKey(me.input.KEY.M, "mute", !0), // ����melonJS�����inputģ����bindKey��������M����KEY.M����"mute"�����������õ���������Ϊ!0����true����ʾ�ڰ��º��ɿ�ʱ����������
                me.input.bindPointer(me.input.KEY.SPACE), // ����melonJS�����inputģ����bindPointer������������������Ϳո����KEY.SPACE������ʾ�ڵ������ʱҲ�����ո����Ӧ�Ķ���
                me.pool.register("clumsy", game.BirdEntity), // ����melonJS�����poolģ����register������ע��һ����Ϊ"clumsy"��ʵ����Ϊgame.BirdEntity�࣬�������һ���Զ�����࣬������ʾ��Ϸ�е�С���ɫ
                me.pool.register("pipe", game.PipeEntity, !0), // ����melonJS�����poolģ����register������ע��һ����Ϊ"pipe"��ʵ����Ϊgame.PipeEntity�࣬�����õ���������Ϊ!0����true����ʾ���ʵ������Ա��ظ�ʹ�á��������һ���Զ�����࣬������ʾ��Ϸ�еĹܵ��ϰ���
                me.pool.register("hit", game.HitEntity, !0), // ����melonJS�����poolģ����register������ע��һ����Ϊ"hit"��ʵ����Ϊgame.HitEntity�࣬�����õ���������Ϊ!0����true����ʾ���ʵ������Ա��ظ�ʹ�á��������һ���Զ�����࣬������ʾ��Ϸ�е���ײ�������
                me.pool.register("ground", game.Ground, !0), // ����melonJS�����poolģ����register������ע��һ����Ϊ"ground"��ʵ����Ϊgame.Ground�࣬�����õ���������Ϊ!0����true����ʾ���ʵ������Ա��ظ�ʹ�á��������һ���Զ�����࣬������ʾ��Ϸ�еĵ���Ԫ��
                me.state.change(me.state.MENU) // ����melonJS�����stateģ����change�������ı���Ϸ��ǰ״̬Ϊ�˵�״̬��MENU��������ʾ������Ļ
        } // ����loaded����

};
game.BirdEntity = me.Entity.extend({
//����һ������game.BirdEntity������ֵΪһ���̳���me.Entity�������ģ���������û�����{}��Χ��������԰���������Ժͷ�����
    init: function (a, b) {
        var c = {};
        c.image = "clumsy",
//������c���һ����Ϊimage������(��melonJS���Ѷ���)��������Ե�ֵ��"clumsy"����ʾʵ��ʹ����Ϊ"clumsy"��ͼƬ��Դ��Ϊ��Ⱦ����
        /*c.width = 85,*/
            c.width = 50,
  //����c���һ����Ϊwidth�����Եģ�������Ե�ֵ��85����ʾʵ���Ŀ��Ϊ85���ء�
        /*  c.height = 60,*/
            c.height =50,
            this._super(me.Entity, "init", [a, b, c]),
//�������ø���me.Entity��init�����ģ�����������ʼ��ʵ���Ļ������Ժ���Ϊ������ʹ����_super��������ʾ���ø�����ͬ���ķ��������������������������
//me.Entity, ���������ʾ���౾��
//��init��, ���������ʾҪ���ø����е��ĸ�������������"init"��
//[a, b, c], ���������һ�����飬��ʾҪ���ݸ����෽���Ĳ����б�������a, b, c����������
            this.alwaysUpdate = !0,
//��ʵ�����һ����ΪalwaysUpdate�����Եģ�������Ե�ֵ��!0����true��
// ��ʾʵ���Ƿ����Ǹ���״̬����ʹ������Ұ��Χ��Ҳ����
            this.body.gravity = .2,
 //���һ����Ϊbody.gravity�����Եģ�������Ե�ֵ��.2����ʾʵ���ܵ����������ٶ�Ϊ0.2���� / ֡
            this.maxAngleRotation = Number.prototype.degToRad(-30),
//��ʾʵ���ܹ���ת�����Ƕ�Ϊ - 30�ȣ���ʱ�뷽�򣩣���ת��Ϊ������
            this.maxAngleRotationDown = Number.prototype.degToRad(35),
            //ʵ���ܹ���ת�����Ƕ�Ϊ35�ȣ�˳ʱ�뷽�򣩣���ת��Ϊ�����ơ�
            this.renderable.addAnimation("flying", [0, 1, 2]),//�ڴ˴�������flying!!!!!
            //����Ⱦ�������һ����Ϊ"flying"�Ķ������ԣ��������ʹ�õ�0֡����1֡�͵�2֡�����л����γ�һ�����е�Ч����
             this.renderable.addAnimation("idle", [0]),
        //�����Ⱦ�������һ������Ч������idle��, ���������ʾ����Ч��������,[0], ���������һ������,����ֻ�е�0֡
            this.renderable.setCurrentAnimation("flying"),
            this.body.removeShapeAt(0),
            //�Ƴ�ʵ������ײ��״��shape��,����һ�������� 0, ���������ʾҪ�Ƴ�����ײ��״��������index����������0����ʾ�Ƴ���һ����ײ��״��
           
            this.body.addShape(new me.Ellipse(5, 5, 71, 51)),
        //    ���һ���µ���ײ��״��shape���������������һ��������
        //new me.Ellipse(5, 5, 71, 51), ���������һ���´�����me.Ellipse���󣬱�ʾһ����Բ�ε���ײ��״�������������ĸ�������
        //5, 5, �����������ֱ��ʾ��Բ�ε����ĵ������ʵ�����Ͻǵ�x�����y���꣬���ﶼ��5���ء�
        //71, 51, �����������ֱ��ʾ��Բ�ε�ˮƽ�뾶�ʹ�ֱ�뾶������ֱ���71���غ�51���ء�
            this.flyTween = new me.Tween(this.pos),
            //��ʵ�����һ����ΪflyTween�����Եģ�������Ե�ֵ��һ���´�����me.Tween���󣬱�ʾһ��������tween��Ч��
            //λ�����ԣ�pos��
            this.flyTween.easing(me.Tween.Easing.Exponential.InOut),
            //�����������ȼ��ٺ���١�
            this.currentAngle = 0,
            //��ʵ�����һ����ΪcurrentAngle�����Եģ�������Ե�ֵ��0����ת�Ƕ�Ϊ0���ȡ�
            this.angleTween = new me.Tween(this),
        //    ������me.Tween���󣬱�ʾһ��������tween��Ч��������Ч����һ����һ��ʱ���ڸı��������ֵ�Ķ���Ч��������������һ��������
        //this, ���������ʾҪ�ı�Ķ������������Ķ���������ʵ������
            this.angleTween.easing(me.Tween.Easing.Exponential.InOut),
            //��flyTween����
            this.endTween = null,
            //���һ����ΪendTween�����ԣ���ʾû�ж����κλ���Ч��
            this.collided = !1,
            //���һ����Ϊcollided�����Եģ�������Ե�ֵ��!1����false����ʾʵ���Ƿ�������ײ��
            this.gravityForce = .2
        //���һ����ΪgravityForce�����ԣ���ʾʵ���ܵ�����������Ϊ0.2����/֡
    },
    update: function (a) {
        //����һ����Ϊupdate�ķ����ģ����������һ������������ÿһ֡��frame������ʵ����״̬����Ϊ�������������һ������a����ʾÿһ֡������ʱ�䣨delta time��
        var b = this;
        //������һ������b������ֵΪthis����ģ���������������������scope��������ʵ������
        if (this.pos.x = 60,
            !game.data.start)
            //����������֮���ö��ţ�, ���ָ�����ʾ��ִ�е�һ����������ִ�еڶ��������������صڶ��������Ľ����Ϊ�����������ʽ �Ľ�������������������ʽ��ʾ��Ϸδ��ʼ�����ҽ�ʵ����x������Ϊ60���ء�
            return this._super(me.Entity, "update", [a]); //һ�����ø���me.Entity��update�����Ľ����������������ʵ���Ļ���״̬����Ϊ
        if (this.renderable.currentTransform.identity(),
            me.input.isKeyPressed("fly"))
        //    me.input.isKeyPressed(��fly��), ���������һ������melonJS�����inputģ����isKeyPressed�����Ľ�������᷵��һ������ֵ��ʾ�Ƿ�����ָ���ļ������������������һ��������
        //��fly��, ���������ʾҪ���ļ����������ƣ�������"fly"����ʾ�ո���������������Ļ��
      {
            me.audio.play("wing"),//��������
                this.gravityForce = .2;
            var c = this.pos.y;
            //����һ������c������ֵΪʵ��λ�����ԣ�pos����y�����ֵ����ʾʵ����ǰy���ꡣ
            this.angleTween.stop(),
                //����ʵ��angleTween������stop��������䣬����ֹͣangleTween����Ч��
                this.flyTween.stop(),
                //ֹͣflyTween����Ч��
                this.flyTween.to({
                    y: c - 72
                }, 50),
            //    ����ʵ��flyTween������to��������䣬��������flyTween����Ч����Ŀ������ֵ�ͳ���ʱ�䡣���������������������
            //{ y: c - 72 }, ���������һ�����󣬱�ʾҪ�ı�����Ժ�ֵ��������y���ԣ���ʾʵ��λ�����ԣ�pos����y�����ֵ��Ҫ�ı�Ϊc - 72������ǰy�����ȥ72���ء�
            //50, ���������һ�����֣���ʾ����Ч���ĳ���ʱ�䣬��λ�Ǻ��루ms����������50���롣
                this.flyTween.start(),
                //��ʼ����
                this.angleTween.to({
                    currentAngle: b.maxAngleRotation
                }, 50).onComplete(function (a) {
                    b.renderable.currentTransform.rotate(b.maxAngleRotation)
                }),
                this.angleTween.start()//��ž��Ǹı�ǶȺͳ���ʱ��
        } else
            this.gravityForce += .2,
                this.pos.y += me.timer.tick * this.gravityForce,
                this.currentAngle += Number.prototype.degToRad(3),//����������ͽǶ�
                this.currentAngle >= this.maxAngleRotationDown && (this.renderable.currentTransform.identity(),
                    this.currentAngle = this.maxAngleRotationDown);
        //��ʾʵ����ǰ��ת�Ƕ��Ƿ���ڵ������Ƕȡ�
        this.renderable.currentTransform.rotate(this.currentAngle),
            me.Rect.prototype.updateBounds.apply(this);
        //this.currentAngle, ���������ʾҪ��ת�ĽǶȣ�������ʵ����ǰ��ת�Ƕȵ�ֵ��
        var d = -80;//��ʾһ���ٽ�ֵ
        return this.pos.y <= d || this.collided ? (game.data.start = !1,
            me.audio.play("lose"),//
            this.endAnimation(),
            !1) : (me.collision.check(this),
                !0)
    },
    onCollision: function (a) {
        // ����һ����ΪonCollision�ķ��������������һ������������ʵ��������ʵ�巢����ײʱִ��
        var b = a.b;
         // ����һ������b������ֵΪa.b����ʾ��ײ�����е���һ��ʵ��
        ("pipe" === b.type || "ground" === b.type) && (me.device.vibrate(500),
             // �����һ��ʵ������ͣ�type��������"pipe"��"ground"����ʾ��ײ����me.device.vibrate������ʹ�豸��500����
            this.collided = !0),
            "hit" === b.type && (me.game.world.removeChildNow(b),
            game.data.steps++,
             // �����һ��ʵ������ͣ�type��������"hit"����ʾ��ײ���˽��
             // ����me.game.world.removeChildNow�������Ƴ���һ��ʵ��
             // ��game.data.steps���Լ�1������ֵ��������ʾ��Ϸ�Ĳ�������1 game.data.steps++,
                me.audio.play("hit"))//������Ϊ"hit"����Ƶ��Դ
    },
    endAnimation: function () {
        //ʵ����������ʱִ�� 
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
        //�̳���me.Entity��me.Renderable��ģ��ֱ�������ʾ��Ϸ�еĹܵ��ϰ���͹ܵ�������
        init: function (a, b) {
            var c = {};
            c.image = this.image = me.loader.getImage("pipe"),
                //c���һ����Ϊimage�����ԣ�����ֵΪһ������me.loader.getImage�����Ľ��
                c.width = 148,
                c.height = 1664,
                c.framewidth = 148,
                c.frameheight = 1664,//ʵ�и߶�
                this._super(me.Entity, "init", [a, b, c]),
                this.alwaysUpdate = !0,
                 // ��ʵ�����һ����ΪalwaysUpdate�����ԣ�����ֵΪ!0����true����ʾʵ���Ƿ����Ǹ���״̬����ʹ������Ұ��Χ��Ҳ����
                this.body.gravity = 0,
                this.body.vel.set(-5, 0),
                // ����ʵ��body������vel������set����������ʵ�����ٶ�����
                this.type = "pipe"
        },
        update: function (a) {
             // ����һ����Ϊupdate�ķ��������������һ������������ÿһ֡��frame������ʵ����״̬����Ϊ�������������һ������a����ʾÿһ֡������ʱ�䣨delta time��
            return game.data.start ? (this.pos.add(this.body.vel),
                 // ���game.data.start����Ϊ�٣���ʾ��Ϸδ��ʼ
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
                 // ��ʵ�����һ����ΪpipeFrequency�����ԣ�����ֵΪ92����ʾʵ�����ɹܵ���Ƶ�ʣ�ÿ��92֡����һ��
                this.pipeHoleSize = 1240,
                // ��ʵ�����һ����ΪpipeHoleSize�����ԣ�����ֵΪ1240����ʾʵ�����ɹܵ��Ŀ�϶��С����λ������
                this.posX = me.game.viewport.width
        },
        update: function (a) {
            if (this.generate++ % this.pipeFrequency == 0)
             // ����һ������b������ֵΪһ������Number��ԭ�ͣ�prototype����random�����Ľ������������᷵��ָ����Χ�ڵ�һ�������������ָ����ΧΪme.video.renderer.getHeight()

                  {
                var b = Number.prototype.random(me.video.renderer.getHeight() - 100, 200)
 // ��һ��������me.video.renderer.getHeight() - 100����ʾ���������Сֵ����������Ⱦ����renderer���߶ȼ�ȥ100���� me.video.renderer.getHeight() - 100,
                    , c = b - me.game.viewport.height - this.pipeHoleSize
                    // ����һ������c������ֵΪb - me.game.viewport.height - this.pipeHoleSize����ʾ�Ϸ��ܵ���y����
                    //  ������������b����ʾҪ��ȡ�򴴽������y���꣬�������·��ܵ���y���� b
                    , d = new me.pool.pull("pipe", this.posX, b)
                    // ����һ������d������ֵΪһ������me.poolģ����pull�����Ľ�������������Ӷ���أ�pool���л�ȡ�򴴽�һ��ָ�����ͺͲ����Ķ��󣬵�һ��������"pipe"����ʾҪ��ȡ�򴴽��Ķ������ͣ��ڶ���������this.posX����ʾҪ��ȡ�򴴽������x����
                     // ������������c����ʾҪ��ȡ�򴴽������y���꣬�������Ϸ��ܵ���y����
                    , e = new me.pool.pull("pipe", this.posX, c)
                     // ����һ������e������ֵΪ��һ������me.poolģ����pull�����Ľ��
                    , f = b - 100
           //     f = c-50
                    // ����һ������f������ֵΪb - 100����ʾ��ҵ�y����
                    , g = new me.pool.pull("hit", this.posX, f);
                // ��һ��������"hit"����ʾҪ��ȡ�򴴽��Ķ������ͣ����������x���꣬�����ǹܵ�������posX���Ե�ֵ,������������f����ʾҪ��ȡ�򴴽������y���꣬�����ǽ�ҵ�y����
                d.renderable.currentTransform.scaleY(-1),
                     // ��-1��Ϊ���ű������ݸ�scaleY��������ʾ����Ⱦ��������y�ᷴת�������µߵ�
                    me.game.world.addChild(d, 10),
                    // ��һ��������d����ʾҪ��ӵĶ���"pipe"
        // �ڶ���������10����ʾҪ��Ӷ����z��������z-index������ʾ����Ϸ�����е���ʾ�㼶������Խ�󣬲㼶Խ��
                    me.game.world.addChild(e, 10),
                    me.game.world.addChild(g, 11)
                // ����me.game.world.addChild�����������ʵ��g��ӵ���Ϸ�����У���ָ����z��㼶Ϊ11
            }
            this._super(me.Entity, "update", [a])
        }
    }),
    game.HitEntity = me.Entity.extend(
// ����һ����Ϊgame.HitEntity���࣬������Ǽ̳���me.Entity��ģ�������ʾ��Ϸ�еĽ��
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
                // ��һ��������0����ʾ������״�����ʵ��λ�ã�pos����x�����ƫ������offset��
                // �ڶ���������0����ʾ������״�����ʵ��λ�ã�pos����y�����ƫ������offset�� 
                // ������������c.width - 30����ʾ����
                this.type = "hit"
        },
        update: function (a) {//����ǳ�����Ƴ�
            return this.pos.add(this.body.accel),
                this.pos.x < -this.image.width && me.game.world.removeChild(this),
                me.Rect.prototype.updateBounds.apply(this),
                this._super(me.Entity, "update", [a]),
                !0
        }
    }),
    game.Ground = me.Entity.extend({//����ǵ����ͼ�κ��ƶ��ٶ�
        init: function (a, b) {
            //����a��b���ֱ��ʾʵ���ĳ�ʼx�����y����
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
    // ����һ����Ϊgame.HUD�Ķ�������Ѿ������򱣳ֲ��䣬����ֵΪһ���ն���
    game.HUD.Container = me.Container.extend({
        //������������洢��Ϸ�е�ͷ����ʾ��HUD����ص�����
        init: function () {
            this._super(me.Container, "init"),
                this.isPersistent = !0,
                this.collidable = !1,
                // ��ʵ�����һ����Ϊz�����ԣ�����ֵΪ1 / 0���������Infinity������ʾʵ������Ϸ�����е�z��������z-index������ʾ����Ϸ�����е���ʾ�㼶������Խ�󣬲㼶Խ
                this.z = 1 / 0,
                this.name = "HUD",
                this.addChild(new game.HUD.ScoreItem(5, 5))
            // ��game.HUD�������һ����ΪScoreItem�����ԣ�����ֵΪһ���̳���me.Renderable����࣬������ʾ��Ϸ�еķ�����ʾ��Score Item��
        }
    }),
    game.HUD.ScoreItem = me.Renderable.extend({
        init: function (a, b) {
            this._super(me.Renderable, "init", [a, b, 10, 10]),
                this.stepsFont = new me.Font("gamefont", 80, "#FFF", "center"),
                // ��ʵ�����һ����ΪstepsFont�����ԣ�����ֵΪһ���´�����me.Font���󣬱�ʾʵ��ʹ�õ����塣me.Font������һ�����������ı��Ķ����������ĸ�����
                // ��һ��������"gamefont"����ʾ�������� 
                // �ڶ���������80����ʾ�����СΪ80���� 
                // ������������"#000"����ʾ������ɫΪ��ɫ 
                // ���ĸ�������"center"����ʾ������뷽ʽΪ����
                this.floating = !0
        },
        draw: function (a) {
            game.data.start && me.state.isCurrent(me.state.PLAY) && this.stepsFont.draw(a, game.data.steps, me.game.viewport.width / 2, 10)
        }
    });
var BackgroundLayer = me.ImageLayer.extend({
    //������
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
        //����game.data.muted���Ե�ֵ��������ر���Ƶ
        return me.input.isKeyPressed("mute") && (game.data.muted = !game.data.muted,
            game.data.muted ? me.audio.disable() : me.audio.enable()),
            !0
    }
});
game.TitleScreen = me.ScreenObject.extend({ //���⻭��
    init: function () {
        this._super(me.ScreenObject, "init"),
            this.font = null,
            this.ground1 = null,
            this.ground2 = null,
            this.logo = null
    },
    onResetEvent: function () {
       //һ������������ÿ�ν�����⻭��ʱִ�С��������������һЩ����󶨣��¼����ģ����һЩ�Ӷ�����Ϸ�����У��米���㣬���棬logo��
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
        //���뿪���⻭��ʱִ�С����������ȡ��һЩ�����
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
                me.game.world.addChild(this.hit, 10),//��

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
//        // ����һ������h������ֵΪһ������me.poolģ����pull�����Ľ�������������Ӷ���أ�pool���л�ȡ�򴴽�һ��ָ�����ͺͲ����Ķ������������������������
//        var h = me.pool.pull("hit", me.game.viewport.width / 2, me.game.viewport.height / 2 - 100),
//        // ��һ��������"hit"����ʾҪ��ȡ�򴴽��Ķ������ͣ�������game.HitEntity��
//        // �ڶ���������me.game.viewport.width / 2����ʾҪ��ȡ�򴴽������x���꣬�������ӿڣ�viewport����ȳ���2����������ʾ
//        // ������������me.game.viewport.height / 2 - 100����ʾҪ��ȡ�򴴽������y���꣬�������ӿڣ�viewport���߶ȳ���2��ȥ100���أ�����΢ƫ����ʾ
//        // ����me.game.world.addChild��������h������ӵ���Ϸ�����С����������������������
//        me.game.world.addChild(h, 10),
//// ��һ��������h����ʾҪ��ӵĶ���
//// �ڶ���������10����ʾҪ��Ӷ����z��������z-index������ʾ����Ϸ�����е���ʾ�㼶������Խ�󣬲㼶Խ��

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
