/**
 * Created by caleb on 2015/10/9.
 */

var mainobj=document.getElementById("main"); //获取游戏界面的div
var myplane; //声明飞机对象
var leftbtn=false; //判断是否左移方向键
var rightbtn=false; //判断是否右移方向键
var topbtn=false; //判断是否上移方向键
var buttombtn=false; //判断是否下移方向键
var shutbtn = false; //判断是否点击发射子弹键（大写字母A）
var bulletlist=new Array(); //存储子弹的数组列表

/**==========================================**/
var smellplanelist = new Array(); //存储敌人小飞机的数组列表
var killnum = 0; //歼灭敌军个数
var score = 0; //总分计算策略, 杀死一个小飞机得分为: score = 1个小飞机 * 5;
/**==========================================**/
var ctrlplanestop; //停止飞机移动的计数器
var bulletflystop; //停止子弹飞行的计算器
var bulletspeedstop; //停止子弹发射的计数器
var mysmellplanestop; //停止敌人小飞机创建的计数器
var smellmovestop; //停止敌人小飞机移动的计数器
var smellplanedeathstop; //停止敌人小飞机被击中后的计数器

/**
 * 定义飞机对象
 * @param imgsrc 飞机图片
 * @param x 初始化飞机的x坐标
 * @param y 初始化飞机的y坐标
 * @param blood 飞机生命值
 * @param speed 飞机速度
 */
function createPlayerPlane(imgsrc, x, y, blood, speed) {
    this.planeNode = document.createElement("img");
    this.imageSrc = imgsrc;
    this.blood = blood;
    this.x = x;
    this.y = y;
    this.movespeed = speed;
    this.level = 1; //飞机等级
    this.boom = 10; //飞机炸弹数量
    this.leftmove = function() { //设置飞机左移动
        if (this.planeNode.style.left == "-80px") { //如果飞机图片往左移动刚好离开游戏界面
            this.planeNode.style.left = "440px"; //则飞机图片从游戏界面右边进入
        } else {
            this.planeNode.style.left = parseInt(this.planeNode.style.left) - this.movespeed + "px";
        }
    };
    this.rightmove = function() { //设置飞机右移动
        if (this.planeNode.style.left == "440px") {
            this.planeNode.style.left = "-80px";
        } else {
            this.planeNode.style.left = parseInt(this.planeNode.style.left) + this.movespeed + "px";
        }
    };
    this.topmove=function(){ //设置飞机上移动
        if(this.planeNode.style.top=="0px"){ //向上移动不能超出游戏上方界面
            this.planeNode.style.top=="0px";
        }else{
            this.planeNode.style.top=parseInt(this.planeNode.style.top)-this.movespeed+"px";
        }
    };
    this.buttommove=function(){ //设置飞机下移动
        if(this.planeNode.style.top=="600px"){ //向下移动不能超出游戏下方界面
            this.planeNode.style.top=="600px"
        }else{
            this.planeNode.style.top=parseInt(this.planeNode.style.top)+this.movespeed+"px";
        }
    };
    this.shot = function() { //设置子弹发射的状态(上弹夹)
        if (this.level == 1) {
            var bullet1 = new createbullet("plane1/EnemyFire_01.png",parseInt(this.planeNode.style.left)+35,parseInt(this.planeNode.style.top)+8,2);
            bulletlist.push(bullet1);
            var bullet2 = new createbullet("plane1/EnemyFire_01.png",parseInt(this.planeNode.style.left)-5,parseInt(this.planeNode.style.top)+8,2);
            bulletlist.push(bullet2);
        }
    };
    this.create = function() { //初始化飞机相关CSS样式值
        this.planeNode.src = this.imageSrc;
        this.planeNode.style.position = "absolute";
        this.planeNode.style.left = this.x + "px";
        this.planeNode.style.top = this.y + "px";
        this.planeNode.style.zIndex="6";
        mainobj.appendChild(this.planeNode); //向游戏界面添加元素（飞机图片）
    };
    this.create();
}

/**
 * 定义子弹对象
 * @param bulletsrc
 * @param x
 * @param y
 * @param speed
 */
function createbullet(bulletsrc, x, y, speed) {
    this.bulletsrc = bulletsrc;
    this.x = x;
    this.y = y;
    this.bulletnode = document.createElement("img");
    this.btstate = true; //子弹状态
    this.speed = speed;
    this.move = function() { //设置子弹移动
        this.bulletnode.style.top = parseInt(this.bulletnode.style.top) - this.speed + "px";
    };
    this.create = function() {
        this.bulletnode.src=this.bulletsrc;
        this.bulletnode.style.position="absolute";
        this.bulletnode.style.left=this.x+"px";
        this.bulletnode.style.top=this.y+"px";
        mainobj.appendChild(this.bulletnode);
    };
    this.create();
}

/**
 * 敌人小飞机
 * @param smellplanesrc
 * @param x
 * @param y
 * @param speed
 */
function createsmellplane(smellplanesrc, x, y, speed) {
    this.smellplaneNode = document.createElement("img");
    this.smellplanesrc = smellplanesrc;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.isdead = false;
    this.deadtime = 10;
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