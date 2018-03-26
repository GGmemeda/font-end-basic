/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-10-9
 * Time: 下午3:54
 * To change this template use File | Settings | File Templates.
 */

var mainobj=document.getElementById("main"); //获取游戏界面的div
var myplane; //声明飞机对象
var leftbtn=false; //判断是否左移方向键
var rightbtn=false; //判断是否右移方向键
var topbtn=false; //判断是否上移方向键
var buttombtn=false; //判断是否下移方向键
var shutbtn = false; //判断子弹是否移动（飞行）
var bulletlist = new Array(); //存储子弹的数组列表(弹夹)

/*==========================================================*/
var smellplanelist = new Array(); //存储小飞机的数组列表
var killnum = 0; //歼灭敌军个数
var score = 0; //总分计算策略, 杀死一个小飞机得分为: score = 1个小飞机 * 5;
/*==========================================================*/
var ctrlplanetop;
var bulletspeedstop;
var bulletflystop;
var mysmellplanestop;
var smellmovestop;
var smellplanedeathstop;

/**
 * 定义飞机对象
 * @param imgsrc
 * @param x
 * @param y
 * @param blood
 * @param speed
 */
function createPlayerPlane(imgsrc, x, y, blood, speed) {
    this.x = x;
    this.y = y;
    this.blood = blood;
    this.movespeed = speed;
    this.imageSrc = imgsrc; //飞机图片的地址
    this.level = 1; //飞机等级
    this.planeNode = document.createElement("img"); //飞机的图片对象
    this.boom = 10; //飞机炸弹数量
    /**
     * 完成飞机的移动效果
     * 1. 往游戏界面的四个方向移动
     * 2. 键盘上的哪个键作为方向键
     * 3. 定义飞机移动的方法
     */
    this.leftmove = function() { //往左移动就需要计算坐标的位置
        if (this.planeNode.style.left == "-80px") {
            this.planeNode.style.left = "440px";
        } else {
            this.planeNode.style.left = parseInt(this.planeNode.style.left) - this.movespeed + "px";
        }
    }
    this.rightmove = function() { //设置飞机右移动
        if (this.planeNode.style.left == "440px") {
            this.planeNode.style.left = "-80px";
        } else {
            this.planeNode.style.left = parseInt(this.planeNode.style.left) + this.movespeed + "px";
        }
    };
    this.topmove=function(){ //设置飞机上移动
        if(this.planeNode.style.top=="0px"){ //向上移动不能超出游戏上方界面
            this.planeNode.style.top ="0px";
        }else{
            this.planeNode.style.top=parseInt(this.planeNode.style.top)-this.movespeed+"px";
        }
    };
    this.buttommove=function(){ //设置飞机下移动
        if(this.planeNode.style.top=="600px"){ //向下移动不能超出游戏下方界面
            this.planeNode.style.top ="600px"
        }else{
            this.planeNode.style.top=parseInt(this.planeNode.style.top)+this.movespeed+"px";
        }
    };

    this.shot = function() { //定义发射子弹的方法(上弹夹)
        var bullet1 = new createbullet("plane1/EnemyFire_01.png", parseInt(this.planeNode.style.left)+35, parseInt(this.planeNode.style.top)+8, 2);
        var bullet2 = new createbullet("plane1/EnemyFire_01.png", parseInt(this.planeNode.style.left)-5, parseInt(this.planeNode.style.top)+8, 2);
        bulletlist.push(bullet1);
        bulletlist.push(bullet2);
    };

    /**
     * 定义飞机的样式参数
     */
    this.create = function() {
        this.planeNode.src = this.imageSrc;
        this.planeNode.style.position = "absolute";
        this.planeNode.style.left = this.x + "px";
        this.planeNode.style.top = this.y + "px";
        this.planeNode.style.zIndex="6";
        mainobj.appendChild(this.planeNode);
    }
    this.create(); //创建飞机的DOM对象
}

/**
 * 定义子弹的对象
 * @param bulletsrc
 * @param x
 * @param y
 * @param speed
 */
function createbullet(bulletsrc, x, y, speed) {
    this.bulletsrc = bulletsrc; //定义子弹的图片属性
    this.x = x; //定义子弹飞行的x轴坐标
    this.y = y; //定义子弹飞行的y轴坐标
    this.bulletnode = document.createElement("img"); //创建子弹的DOM对象（img的DOM对象）
    this.btstate = true; //子弹状态, true代表没有击中敌人小飞机的状态, false代表击中敌人小飞机的状态
    this.speed = speed; //子弹的飞行速度
    this.create = function() {
        this.bulletnode.src=this.bulletsrc;
        this.bulletnode.style.position="absolute";
        this.bulletnode.style.left=this.x+"px";
        this.bulletnode.style.top=this.y+"px";
        mainobj.appendChild(this.bulletnode);
    };
    this.move = function() {
        this.bulletnode.style.top = parseInt(this.bulletnode.style.top) - this.speed + "px";
    };
    this.create(); //在创建子弹的对象的时候就把子弹显示到游戏界面上
}

/**
 * 敌人小飞机对象
 * @param smellplanesrc
 * @param x
 * @param y
 * @param speed
 */
function createsmellplane(smellplanesrc, x, y, speed) {
    this.smellplanesrc = smellplanesrc; //小飞机图片地址
    this.x = x; //小飞机的移动x轴
    this.y = y; //小飞机的移动y轴
    this.speed = speed; //小飞机移动的速度
    this.smellplaneNode = document.createElement("img"); //小飞机的img DOM对象
    this.isdead = false; // 小飞机没有被子弹击中的状态 （还活着）
    this.deadtime = 10; // 控制小飞机被击中产生的爆炸效果消失时间
    this.move = function() {
        this.smellplaneNode.style.top = parseInt(this.smellplaneNode.style.top) + this.speed + "px";
    };
    this.create = function() {
        this.smellplaneNode.src = this.smellplanesrc;
        this.smellplaneNode.style.position = "absolute";
        this.smellplaneNode.style.left = this.x + "px";
        this.smellplaneNode.style.top = this.y + "px";
        mainobj.appendChild(this.smellplaneNode);
    };
    this.create();
}
