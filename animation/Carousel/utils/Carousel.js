
;+function (global) {
    var Carousel = function (element,options) {
        var _this = this;
        this.options=options||{};
        this.Carousel =element ;
        this.CarouselContent = document.getElementsByClassName('item');
        this.active = document.getElementsByClassName('active')[0] || '';
        var nextControl = document.getElementById('next');
        var prevControl = document.getElementById('prev');
        nextControl.onclick = function () {
            _this.next();
        };
        prevControl.onclick = function () {
            _this.prev();
        };
        this.Carousel.onmouseenter = function () {
            _this.stop = false;
        };
        this.Carousel.onmouseleave = function () {
            _this.timeout(function () {
                _this.stop = true;

                _this.interval();
            }, 3000)
        };
        this.start = function () {
            this.stop = true;
            this.defaultAnimation();
        };
        this.defaultAnimation = function () {
            var clientHei = _this.active.clientHeight;
            this.Carousel.style.height = clientHei + 'px';
            if (this.stop) {
                this.interval();
            }
        };
        this.getNextEle = function () {
            var next = _this.active.nextElementSibling;
            if (!next) {
                next = _this.CarouselContent[0];
            }
            return next;
        };
        this.interval = function () {
            var next = _this.getNextEle();
            if (this.stop) {
                this.leftMove(next, function () {
                    _this.interval();
                });
            }
        };
        this.leftMove = function (next, callback) {
            addClass(next, 'next ');
            _this.timeout(function () {
                addClass(next, 'active');
                addClass(_this.active, 'prev');
                removeClass(_this.active, 'active');
                setTimeout(function () {
                    removeClass(next, 'next');
                    removeClass(_this.active, 'prev');
                    _this.active = next;
                    next = null;
                    if (callback) {
                        callback();
                    }
                },600)
            }, 800);
        };
        this.rightMove = function (next, callback) {
            addClass(next, 'prev');
            _this.timeout(function () {
                addClass(next, 'active');
                addClass(_this.active, 'next');
                removeClass(_this.active, 'active');
                _this.timeout(function () {
                    removeClass(next, 'prev');
                    removeClass(_this.active, 'next');
                    _this.active = next;
                    next = null;
                    if (callback) {
                        callback();
                    }
                }, 3000)
            }, 2000);
        };
        this.timeout = function (callback, time) {
            setTimeout(function () {
                callback();
            }, time || 600)
        };


    };

    Carousel.prototype.prev = function () {
        this.stop = false;
        var next = this.getNextEle();
        this.leftMove(next)
    };
    Carousel.prototype.next = function () {
        this.stop = false;
        var next = this.getNextEle();
        this.rightMove(next)
    };
    'Carousel' in global && global.Carousel = Carousel;
}(window);
function addClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
        removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls) {
    var obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
    x = 0;
    for (x in obj_class_lst) {
        if (obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
            return true;
        }
    }
    return false;
}