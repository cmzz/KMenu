KMenu
=====

快捷菜单。长按鼠标将在鼠标周围弹出一个圆环状的精美快捷菜单，效果及菜单元素数量可自定义。

### 使用方法:
1. 引入jQuery库文件
2. 引入jQuery.KMenu.js

### Example
        $(function(){
            $("body").KMenu({
                'btnbg': '#B9BFC1',
    		    'btnhoverbg':'#E95C33',
    		    'data':[
        			{
        				"icon": "images/apple-48.png",
        				"link": "http://apple.com",
        				"title": "Apple"
        			},
        			{
        				"icon": "images/blogger-48.png",
        				"link": "http://blogger.com",
        				"title": "Blogger"
        			},
        			{
        				"icon": "images/bootstrap-48.png",
        				"link": "http://bootstrap.com",
        				"title": "Bootstrap"
        			},
        			{
        				"icon": "images/drupal-48.png",
        				"link": "http://drupal.com",
        				"title": "Drupal"
        			},
        			{
        				"icon": "images/flickr-48.png",
        				"link": "http://flickr.com",
        				"title": "Flickr"
        			},
        			{
        				"icon": "images/google-48.png",
        				"link": "http://google.com",
        				"title": "Google"
        			}
    		    ]
    	    });			
        })

### 参数设定
    可以在实例化时传入下面的参数：
    nums		按钮数量
    type		显示形状
    time		触发时间
    atime		动画速度
    radius		环形半径
    width		元素的宽高
    btnbg		按钮的背景色
    btnhoverbg	hover时的背景色
    data 		按钮数据 json格式的2维数组
