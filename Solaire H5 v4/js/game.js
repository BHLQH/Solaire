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
//import me from "melonjs"; //不需要在文件中导入melonjs模块，因为在HTML文件中使用script标签来引入melonjs的源文件
/*"use strict"; *//*指示符，用来告诉浏览器使用严格模式，避免一些潜在的错误*/
// 导入实体类
import { BirdEntity, PipeEntity, HitEntity, Ground } from "./js/entities/entities.js";


// 定义一个 game 对象，用来存放游戏相关的数据和方法
var game = {
    // 定义一个 onload 方法，用来在游戏加载完成后执行一些初始化操作
    data: {
        score: 0,
        steps: 0,
        start: false,
        newHiScore: false,
        muted: false
    },
    resources: [
        // images
        { name: "bg", type: "image", src: "data/img/bg.png" }, // 背景图片
        { name: "clumsy", type: "image", src: "data/img/clumsy.png" }, // 主角图片
        { name: "pipe", type: "image", src: "data/img/pipe.png" }, // 管道图片
        { name: "logo", type: "image", src: "data/img/logo.png" }, // logo图片
        { name: "ground", type: "image", src: "data/img/ground.png" }, // 地面图片
        { name: "gameover", type: "image", src: "data/img/gameover.png" }, // 游戏结束图片
        { name: "gameoverbg", type: "image", src: "data/img/gameoverbg.png" }, // 游戏结束背景图片
        { name: "hit", type: "image", src: "data/img/hit.png" }, // 碰撞图片
        { name: "getready", type: "image", src: "data/img/getready.png" }, // 准备开始图片
        { name: "new", type: "image", src: "data/img/new.png" }, // 新纪录图片
        { name: "share", type: "image", src: "data/img/share.png" }, // 分享图片
        { name: "tweet", type: "image", src: "data/img/tweet.png" }, // 推特图片
        // sounds
        { name: "theme", type: "audio", src: "data/bgm/" }, // 主题音乐
        { name: "hit", type: "audio", src: "data/sfx/" }, // 碰撞音效
        { name: "lose", type: "audio", src: "data/sfx/" }, // 失败音效
        { name: "wing", type: "audio", src: "data/sfx/" }, // 飞翔音效

    ],

    //"onload": function () {
    //    if (!me.video.init(900, 600, {
    //        wrapper: "screen",
    //        scale: "auto",
    //        scaleMethod: "fit"
    //    })) {
    //        alert("Your browser does not support HTML5 canvas."); // 如果浏览器不支持HTML5画布，弹出警告框
    //        return;
    //    }
    //    me.audio.init("mp3,ogg"); // 初始化音频格式
    //    me.loader.preload(game.resources, this.loaded.bind(this)); // 预加载游戏资源，并在加载完成后调用loaded函数
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
            alert("Your browser does not support HTML5 canvas."); // 如果浏览器不支持HTML5画布，弹出警告框
            return;
        }
        me.audio.init("mp3,ogg"); // 初始化音频格式
        me.loader.preload(game.resources, this.loaded.bind(this)); // 预加载游戏资源，并在加载完成后调用loaded函数
    },

    //"loaded": function () {
    //    me.state.set(me.state.MENU, new game.TitleScreen()); // 设置菜单状态为标题画面
    //    me.state.set(me.state.PLAY, new game.PlayScreen()); // 设置游戏状态为游戏画面
    //    me.state.set(me.state.GAME_OVER, new game.GameOverScreen()); // 设置游戏结束状态为结束画面

    //    me.input.bindKey(me.input.KEY.SPACE, "fly", true); // 绑定空格键为飞翔动作，并启用连续触发模式
    //    me.input.bindKey(me.input.KEY.M, "mute", true); // 绑定M键为静音动作，并启用连续触发模式
    //    me.input.bindPointer(me.input.KEY.SPACE); // 绑定鼠标或触摸屏为飞翔动作

    //    me.pool.register("clumsy", game.BirdEntity); // 注册主角实体
    //    me.pool.register("pipe", game.PipeEntity, true); // 注册管道实体，并启用对象池模式
    //    me.pool.register("hit", game.HitEntity, true); // 注册碰撞实体，并启用对象池模式
    //    me.pool.register("ground", game.Ground, true); // 注册地面实体，并启用对象池模式

    //    me.state.change(me.state.MENU); // 切换到菜单状态
    //}

    "loaded": function () {
        // 设置菜单状态为标题画面
        me.state.set(me.state.MENU, new game.TitleScreen());
        // 设置游戏状态为游戏画面
        me.state.set(me.state.PLAY, new game.PlayScreen());
        // 设置游戏结束状态为结束画面
        me.state.set(me.state.GAME_OVER, new game.GameOverScreen());
        // 绑定空格键为飞翔动作，并启用连续触发模式
        me.input.bindKeyAction(me.input.KEY.SPACEBAR, "fly", true);
        // 绑定M键为静音动作，并启用连续触发模式
        me.input.bindKeyAction(me.input.KEY.M, "mute", true);
        // 绑定鼠标或触摸屏为飞翔动作
        me.input.bindPointerAction(me.input.KEY.SPACEBAR, "fly");
        // 注册主角实体
        me.pool.register("clumsy", game.BirdEntity);
        // 注册管道实体，并启用对象池模式
        me.pool.register("pipe", game.PipeEntity, true);
        // 注册碰撞实体，并启用对象池模式
        me.pool.register("hit", game.HitEntity, true);
        // 注册地面实体，并启用对象池模式
        me.pool.register("ground", game.Ground, true);

        // 切换到菜单状态
        me.state.change(me.state.MENU);
    }

};

// 导出 game 对象，以便其他文件可以使用它
export default game;

