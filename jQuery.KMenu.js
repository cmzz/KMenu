/*
KMenu v1.0.0
Author: wuzhuo 	http://wuzhuo.net  
Git: https://github.com/cmzz/KMenu

Copyright 2013 wuzhuo
Emaim: me19@qq.com
*/

(function($){
	$.fn.KMenu = function(options) {
		var options = $.extend($.fn.KMenu.defaults, options);
		var set,winW,winH,pointX,pointY,w,top,left,r;
		this.each(function () {
			$(this).mousedown(function(e) {			
				set = setTimeout(createMenu, options.time);
				winW = $(window).width();
				winH = $(document).height();
				pointX = e.originalEvent.x || e.originalEvent.layerX || 0;
				pointY = e.originalEvent.y || e.originalEvent.layerY || 0;
				winScroll = $(document).scrollTop()
				pointY = pointY + winScroll;
				w = options.width;
				r = parseInt(options.radius);
			});
			$("body").mouseup(function(){
				clearTimeout(set);
			});
			$(document).scroll(function(){
				clearDiv();
			});
 
			//创建快捷菜单
			createMenu = function createMenu(){
				$(".KMenu,.KMenuBox").remove();
				top = pointY - w / 2;
				left = pointX - w / 2;

				var points = getPoints(); //坐标点
				var data = options.data;
				//根据坐标点创建元素
				$("body").append('<div class="KMenuBox" style="position:absolute;top:0;left:0;background:#fff;width:100%;height:'+winH+'px;z-index:999;"></div>');
				var h = '<div class="KMenu">';
				for (var i = 0; i < parseInt(options.nums); i++) {
					btn = data[i];					
					h += '<div class="KMenu_list" style="position:absolute;opacity:0;z-index:9999;left:'
					  + left + 'px; top:' + top + 'px; padding:2px; background:#fff;border:2px solid #898D90;-moz-border-radius: 999px;-webkit-border-radius: 999px;border-radius:999px;"><div style="width:'+ w +'px; height:'+ w +'px; background:'+ options.btnbg +'; -moz-border-radius: 999px;-webkit-border-radius: 999px;border-radius:999px;">'
					  + '<a href="javascript:;" data-url="'+ btn.link +'"><img width="'+ w +'" src="'+ btn.icon +'" title="'+ btn.title +'" /></a>'
					  + '</div></div>';
				}
				h += '</div>';
				$("body").append(h);
				$(".KMenu_list").each(function(n, elem) {
					var d = points[n];
					var ptop = d[0] - w/2;
					var pleft = d[1] - w/2;					
					$(elem).animate({opacity: 100,left: pleft,top: ptop},100);

				});
				$(".KMenu_list").hover(function(){
					$(this).find("div").css("background",options.btnhoverbg);
				},function(){
					$(this).find("div").css("background",options.btnbg);
				});
				$(".KMenu_list").click(function(event) {
					var url = $(this).find("a").attr("data-url");					
					$(this).animate({borderColor:'#B9BFC1',opacity: 60},
						200, function() {							
							location.href=url;
					});
				});
				$(".KMenuBox").css("opacity","0").click(function() {
					clearDiv();
				});
			}
			//清除菜单
			function clearDiv() {
				$(".KMenu_list").each(function(n, elem) {							
					$(elem).animate({opacity: 0,left:left,top: top},options.atime,function(){
						$(".KMenu,.KMenuBox").remove();
					});
				});			
			};
			//计算顶点
			function getPoints(){
				var points = new Array(),
					p = new Array();
				var n = parseInt(options.nums);				
				var a = (2*3.14159265)/n;
				var x0 = pointX;
				var y0 = pointY;
				var x1 = x0 + r;
				var y1 = y0;
				var b = Math.atan((y1 - y0) / (x1 - x0));				
				for (var i = 0; i < n; i++) {
					points[i] = new Array();
					points[i][0] = parseInt(r * Math.sin(a * i + b) + y0); //y
					points[i][1] = parseInt(r * Math.cos(a * i + b) + x0); //x
				}
				return points;
			}
		})
	}

	//默认设置
	$.fn.KMenu.defaults = {
		'nums': 6, 			//按钮数量
		'type': 'circle', 	//显示形状
		'time': 300, 		//触发时间
		'atime': 100,		//动画速度
		'radius': 40,		//环形半径
		'width': 30,		//元素的宽高
		'btnbg': '#ccc',	//按钮的背景色
		'btnhoverbg':'#444444', //hover时的背景色
		'data': []			//按钮数据 json格式的2维数组
	};
})(jQuery)

