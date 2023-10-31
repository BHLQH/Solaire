//var game = {
//    data: {
//        score : 0,
//        steps: 0,
//        start: false,
//        newHiScore: false,
//        muted: false
//    },

//    resources: [
//            // images
//        {name: "bg", type:"image", src: "data/img/bg.png"},
//        {name: "clumsy", type:"image", src: "data/img/clumsy.png"},
//        {name: "pipe", type:"image", src: "data/img/pipe.png"},
//        {name: "logo", type:"image", src: "data/img/logo.png"},
//        {name: "ground", type:"image", src: "data/img/ground.png"},
//        {name: "gameover", type:"image", src: "data/img/gameover.png"},
//        {name: "gameoverbg", type:"image", src: "data/img/gameoverbg.png"},
//        {name: "hit", type:"image", src: "data/img/hit.png"},
//        {name: "getready", type:"image", src: "data/img/getready.png"},
//        {name: "new", type:"image", src: "data/img/new.png"},
//        {name: "share", type:"image", src: "data/img/share.png"},
//        {name: "tweet", type:"image", src: "data/img/tweet.png"},
//        // sounds
//        {name: "theme", type: "audio", src: "data/bgm/"},
//        {name: "hit", type: "audio", src: "data/sfx/"},
//        {name: "lose", type: "audio", src: "data/sfx/"},
//        {name: "wing", type: "audio", src: "data/sfx/"},

//    ],

//    "onload": function() {
//        if (!me.video.init(900, 600, {
//            wrapper: "screen",
//            scale : "auto",
//            scaleMethod: "fit"
//        })) {
//            alert("Your browser does not support HTML5 canvas.");
//            return;
//        }
//        me.audio.init("mp3,ogg");
//        me.loader.preload(game.resources, this.loaded.bind(this));
//    },

//    "loaded": function() {
//        me.state.set(me.state.MENU, new game.TitleScreen());
//        me.state.set(me.state.PLAY, new game.PlayScreen());
//        me.state.set(me.state.GAME_OVER, new game.GameOverScreen());

//        me.input.bindKey(me.input.KEY.SPACE, "fly", true);
//        me.input.bindKey(me.input.KEY.M, "mute", true);
//        me.input.bindPointer(me.input.KEY.SPACE);

//        me.pool.register("clumsy", game.BirdEntity);
//        me.pool.register("pipe", game.PipeEntity, true);
//        me.pool.register("hit", game.HitEntity, true);
//        me.pool.register("ground", game.Ground, true);

//        me.state.change(me.state.MENU);
//    }
//};
// JavaScript source code
//import me from "melonjs"; //����Ҫ���ļ��е���melonjsģ�飬��Ϊ��HTML�ļ���ʹ��script��ǩ������melonjs��Դ�ļ�
/*"use strict"; *//*ָʾ�����������������ʹ���ϸ�ģʽ������һЩǱ�ڵĴ���*/
// ����ʵ����
import { BirdEntity, PipeEntity, HitEntity, Ground } from "./js/entities/entities.js";


// ����һ�� game �������������Ϸ��ص����ݺͷ���
var game = {
    // ����һ�� onload ��������������Ϸ������ɺ�ִ��һЩ��ʼ������
    data: {
        score: 0,
        steps: 0,
        start: false,
        newHiScore: false,
        muted: false
    },
    resources: [
        // images
        { name: "bg", type: "image", src: "data/img/bg.png" }, // ����ͼƬ
        { name: "clumsy", type: "image", src: "data/img/clumsy.png" }, // ����ͼƬ
        { name: "pipe", type: "image", src: "data/img/pipe.png" }, // �ܵ�ͼƬ
        { name: "logo", type: "image", src: "data/img/logo.png" }, // logoͼƬ
        { name: "ground", type: "image", src: "data/img/ground.png" }, // ����ͼƬ
        { name: "gameover", type: "image", src: "data/img/gameover.png" }, // ��Ϸ����ͼƬ
        { name: "gameoverbg", type: "image", src: "data/img/gameoverbg.png" }, // ��Ϸ��������ͼƬ
        { name: "hit", type: "image", src: "data/img/hit.png" }, // ��ײͼƬ
        { name: "getready", type: "image", src: "data/img/getready.png" }, // ׼����ʼͼƬ
        { name: "new", type: "image", src: "data/img/new.png" }, // �¼�¼ͼƬ
        { name: "share", type: "image", src: "data/img/share.png" }, // ����ͼƬ
        { name: "tweet", type: "image", src: "data/img/tweet.png" }, // ����ͼƬ
        // sounds
        { name: "theme", type: "audio", src: "data/bgm/" }, // ��������
        { name: "hit", type: "audio", src: "data/sfx/" }, // ��ײ��Ч
        { name: "lose", type: "audio", src: "data/sfx/" }, // ʧ����Ч
        { name: "wing", type: "audio", src: "data/sfx/" }, // ������Ч

    ],

    //"onload": function () {
    //    if (!me.video.init(900, 600, {
    //        wrapper: "screen",
    //        scale: "auto",
    //        scaleMethod: "fit"
    //    })) {
    //        alert("Your browser does not support HTML5 canvas."); // ����������֧��HTML5���������������
    //        return;
    //    }
    //    me.audio.init("mp3,ogg"); // ��ʼ����Ƶ��ʽ
    //    me.loader.preload(game.resources, this.loaded.bind(this)); // Ԥ������Ϸ��Դ�����ڼ�����ɺ����loaded����
    //},
    "onload": function () {
        if (!me.video.init({
            container: "screen",
            renderer: me.video.AUTO,
            width: 900,
            height: 600,
            //width:1600,
            //height: 900,
            scale: "auto",
            scaleMethod: "fit"
        })) {
            alert("Your browser does not support HTML5 canvas."); // ����������֧��HTML5���������������
            return;
        }
        me.audio.init("mp3,ogg"); // ��ʼ����Ƶ��ʽ
        me.loader.preload(game.resources, this.loaded.bind(this)); // Ԥ������Ϸ��Դ�����ڼ�����ɺ����loaded����
    },

    //"loaded": function () {
    //    me.state.set(me.state.MENU, new game.TitleScreen()); // ���ò˵�״̬Ϊ���⻭��
    //    me.state.set(me.state.PLAY, new game.PlayScreen()); // ������Ϸ״̬Ϊ��Ϸ����
    //    me.state.set(me.state.GAME_OVER, new game.GameOverScreen()); // ������Ϸ����״̬Ϊ��������

    //    me.input.bindKey(me.input.KEY.SPACE, "fly", true); // �󶨿ո��Ϊ���趯������������������ģʽ
    //    me.input.bindKey(me.input.KEY.M, "mute", true); // ��M��Ϊ������������������������ģʽ
    //    me.input.bindPointer(me.input.KEY.SPACE); // ����������Ϊ���趯��

    //    me.pool.register("clumsy", game.BirdEntity); // ע������ʵ��
    //    me.pool.register("pipe", game.PipeEntity, true); // ע��ܵ�ʵ�壬�����ö����ģʽ
    //    me.pool.register("hit", game.HitEntity, true); // ע����ײʵ�壬�����ö����ģʽ
    //    me.pool.register("ground", game.Ground, true); // ע�����ʵ�壬�����ö����ģʽ

    //    me.state.change(me.state.MENU); // �л����˵�״̬
    //}

    "loaded": function () {
        // ���ò˵�״̬Ϊ���⻭��
        me.state.set(me.state.MENU, new game.TitleScreen());
        // ������Ϸ״̬Ϊ��Ϸ����
        me.state.set(me.state.PLAY, new game.PlayScreen());
        // ������Ϸ����״̬Ϊ��������
        me.state.set(me.state.GAME_OVER, new game.GameOverScreen());
        // �󶨿ո��Ϊ���趯������������������ģʽ
        me.input.bindKeyAction(me.input.KEY.SPACEBAR, "fly", true);
        // ��M��Ϊ������������������������ģʽ
        me.input.bindKeyAction(me.input.KEY.M, "mute", true);
        // ����������Ϊ���趯��
        me.input.bindPointerAction(me.input.KEY.SPACEBAR, "fly");
        // ע������ʵ��
        me.pool.register("clumsy", game.BirdEntity);
        // ע��ܵ�ʵ�壬�����ö����ģʽ
        me.pool.register("pipe", game.PipeEntity, true);
        // ע����ײʵ�壬�����ö����ģʽ
        me.pool.register("hit", game.HitEntity, true);
        // ע�����ʵ�壬�����ö����ģʽ
        me.pool.register("ground", game.Ground, true);

        // �л����˵�״̬
        me.state.change(me.state.MENU);
    }

};

// ���� game �����Ա������ļ�����ʹ����
export default game;

