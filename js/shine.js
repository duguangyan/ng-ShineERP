//login.html
	//背景图片适配
	$(".login-warp i:nth-child(1)").height($(window).height());
	//点击登陆、注册切换样式
	$(".login-content>div a").click(function(){
		$(this).addClass("login-a-active").siblings().removeClass("login-a-active");
	});

	//右边栏点击修改资料点击事件
	$(".index-main-right-a").click(function(){
		if($(this).attr("data")=="1"){
			$(".index-main-right-hide").show();
			$(".index-main-right-table span").each(function(){
				$(this).html($("<input type='text'value='"+$(this).text()+"'>"));
			})
			//input框blur事件
			shineFn.indexBlurFocus($(".sec"));
			shineFn.indexBlurFocus($(".name"));
			shineFn.indexBlurFocus($(".number"));
			shineFn.telProving();
			shineFn.emailProving();
			shineFn.pswrProving();
			$(this).text("保存").attr("data","0");
		}else{
			var filterEml = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
			    filterTel = /^1[34578]\d{9}$/;
			if($(".sec").next().children("input").val()==""||$(".name").next().children("input").val()==""||$(".number").next().children("input").val()==""||$(".psw").next().children().val()!=$(".pswr").next().children().val()||$(".psw").next().children().val()==""||!(filterTel.test($(".tel").next().find("input").val()))||!(filterEml.test($(".eml").next().find("input").val()))){
				layer.msg("输入的内容有错误，请检查！!",{time:1000});
				return false;
			}
			$(".index-main-right-hide").hide();
			$(".index-main-right-table span").each(function(){
				$(this).html($(this).children().val());
			})
			$(this).text("修改资料").attr("data","1");
			
		}
	});
	//函数集合
	var shineFn = {
		//验证手机号码
		telProving : function(){
			$(".tel").next().find("input").blur(function(){
				if(!(/^1[34578]\d{9}$/.test($(this).val()))){ 
			        layer.msg("手机号码有误，请重填",{time:1000});
			        $(this).css({"color":"red","border-color":"red"});
			        return false; 
			    }else{
			    	$(this).css({"color":"green","border-color":"green"});
			    }
			});
		},
		//验证邮箱
		emailProving: function() {
			$(".eml").next().find("input").blur(function(){
				var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				var em = $(".eml").next().find("input").val();
				if(filter.test(em)) {
					$(this).css({"color":"green","border-color":"green"});
				} else {
					layer.msg("邮箱格式错误",{time:1000});
					$(this).css({"color":"red","border-color":"red"});
					return false;
				}
			})
		},
		//验证两次密码是否正确
		pswrProving:function(){
			$(".pswr").next().find("input").blur(function(){
				if($(".psw").next().children().val()!=$(".pswr").next().children().val()||$(".psw").next().children().val()==""){
					layer.msg("两次输入的密码不一致",{time:1000});
					$(".psw").next().find("input").css("color","#666666");
					$(this).css({"color":"red","border-color":"red"});
				}else{
					$(".psw").next().find("input").css("color","green");
					$(this).css({"color":"green","border-color":"green"});
				}
			});
			$(".psw").next().find("input").blur(function(){
				if($(".psw").next().children().val()!=$(".pswr").next().children().val()||$(".psw").next().children().val()==""){
					$(this).css("color","#666666")
					$(".pswr").next().find("input").css({"color":"red","border-color":"red"});
				}else{
					$(".psw").next().find("input").css("color","green");
					$(this).css({"color":"green","border-color":"green"});
					$(".pswr").next().find("input").css({"color":"green","border-color":"green"});
				}
			})
		},
		//blur focus
		indexBlurFocus:function(obj){
			obj.next().children("input").blur(function(){
				if($(this).val()!=""){
					$(this).css({"color":"green","border-color":"green"});
				}else{
					layer.msg("此处不能为空！",{time:1000});
					$(this).css({"color":"red","border-color":"red"});
				}
				
			});
			obj.next().children("input").focus(function(){
				$(this).css("color","#666666");
			})
		},
		
	}
	
	//左侧栏点击事件
	$(document).on("click",".index-main-leftLi div",function(){
		$(this).find("em").html("-").parents(".index-main-leftLi").siblings().find("em").html("+");
	});	
	//头部右侧点击跳转首页
	$(document).on("click",".index-header-right ul li:nth-child(2)",function(){
		window.location.href="user-information.html#/user-information";
	});
	////logo点击跳转首页
	$(document).on("click",".index-header-left",function(){
		window.location.href="user-information.html#/user-information";
	});
	
//	$(".index-main-left .index-main-leftLi ul li").click(function(){
//		$(this).parents(".index-main-leftLi").find("a").css("color","#666666").siblings().find("a").css("color","#666666");
//		$(this).removeClass("index-main-left-activeLi").css("color","#666666");
//		$(this).addClass("index-main-left-activeLi").siblings().css("color","#FFFFFF");
//	});
	$(document).on("click",".index-main-left-num1 h3",function(){
		$(this).parent().hide().siblings().show();
		$(".index-main-right-warp").css("margin-left","86px");
	});
	$(document).on("click",".index-main-left-num2 h3",function(){
		$(this).parent().hide().siblings().show();
		$(".index-main-right-warp").css("margin-left","220px");
	});
	//左侧小图标点击切换事件
	$(document).on("click",".index-main-left-num2 ul li",function(){
		$(this).find(".index-main-left-num2-tit1").addClass("index-main-left-num2-active").parents("li").siblings().find(".index-main-left-num2-tit1").removeClass("index-main-left-num2-active");
		$(this).find("i").css("background-position-y","-162px").parents("li").siblings().find("i").css("background-position-y","-126px");
	})
//user-remind.html
	//消息点击切换事件
	$(".user-remind ul li").click(function(){
		var index = $(this).index();
		$(this).addClass("user-remind-active").siblings().removeClass("user-remind-active");
		$(".user-remind ol").eq(index).show().siblings("ol").hide();
	});
	
//.checkBox 复选框
$(document).on("click",".checkBox",function(e){
	e.stopPropagation();
	if($(this).attr("data") == "1"){
		$(this).html(" ");
		$(this).attr("data","0");
	}else{
		var em = $("<em class='checkBox-checked'></em>");
		em.css({"display":"block", "width": "16px", "height": "16px", "background-image":" url(img/shine.png)","background-position":" 0 -226px" })
		$(this).append(em);
		$(this).attr("data","1");
	}
	
})

//finance-statements.html
$(".finance-statements-onchange a").click(function(){
	$(this).addClass("finance-statements-active").siblings().removeClass("finance-statements-active");
});

//文件上传按钮样式
function showPicture(imgFile){
// alert(window.URL.createObjectURL(imgFile.files[0]));
/*获取上传文件的路径*/
	document.getElementById("newImage").src = window.URL.createObjectURL(imgFile.files[0]);
}
$(document).on("change",".a-upload input[type='file']",function(){
    var filePath=$(this).val();
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
        $(".fileerrorTip").html("").hide();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
//      $(".showFileName").html("上传文件名："+fileName);
        showPicture(this);
    }else{
        $(".showFileName").html("");
        $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
        return false 
    }
})
$(document).on("click","#newImage",function(){
	if($(this).attr("src")==undefined){
		return false;
	}
	layer.open({
	  title: '图片预览'
	  ,area: ['440px', '360px']
	  ,content: '<img width="400px" height="200px" src="'+$(this).attr("src")+'">'
	});     
});
//matter-basic-list.html
//下拉动画
$(document).on("click",".matter-basic-list-seach",function(){
	$(this).find("ul").toggle();
});
$(document).on("click",".matter-basic-list-seach ul li a",function(){
	$(this).parents(".matter-basic-list-seach").find("p").text($(this).text());
});

var app = angular.module("my_app", []);
        app.controller('my_controller', function($scope,$location) {
	  	var vm = $scope.vm = {};
	  	vm.dates = [{
	  			tit: '用户中心',
	  			title:'/user',
	  			conNum:10,
	  			con: [
	  				{ conTit: '我的提醒',title: 'user-remind', conUrl:'user-remind.html#' + '/user-remind',locationUrl: '/user-remind', conNum: 10 },
	  				{ conTit: '我的资料',title: 'user-information', conUrl:'user-information.html#' + '/user-information',locationUrl: '/user-information'},
	  			]
	  		},
	  		{
	  			tit: '客户管理',
	  			title:'/client',
	  			con: [
	  				{ conTit: '客户中心',title:'client-centrality',conUrl:'client-centrality.html#'+ '/client-centrality',locationUrl: '/client-centrality'},
	  				{ conTit: '交易客户',title:'client-deal',conUrl:'client-deal.html#'+ '/client-deal', locationUrl: '/client-deal'},
	  				{ conTit: '问题管理',title:'client-manage',conUrl:'client-manage.html#'+ '/client-manage', locationUrl: '/client-manage'},
	  			]
	  		},
	  		{
	  			tit: '订单管理',
	  			title:'/order',
	  			con: [
	  				{ conTit: '订单列表',title:'order-list',conUrl:'order-list.html#'+ '/order-list', locationUrl: '/order-list'},
	  				{ conTit: '订单审核',title:'order-auditing',conUrl:'order-auditing.html#'+ '/order-auditing', locationUrl: '/order-auditing'},
	  				{ conTit: '订单明细',title:'order-specifics',conUrl:'order-specifics.html#'+ '/order-specifics', locationUrl: '/order-specifics'},
	  				{ conTit: '合同清单',title:'order-agreement',conUrl:'order-agreement.html#'+ '/order-agreement', locationUrl: '/order-agreement' },
	  			]
	  		},
	  		{
	  			tit: '工程管理',
	  			title:'/work',
	  			con: [
	  				{ conTit: '工程勘测',title:'work-survey',conUrl:'work-survey.html#'+ '/work-survey', locationUrl: '/work-survey' },
	  				{ conTit: '工程审核',title:'work-look',conUrl:'work-look.html#'+ '/work-look', locationUrl: '/work-look' },
	  				{ conTit: '工程通知',title:'work-notify',conUrl:'work-notify.html#'+ '/work-notify', locationUrl: '/work-notify' },
	  				{ conTit: '工程调度',title:'work-manage',conUrl:'work-manage.html#'+ '/work-manage', locationUrl: '/work-manage' },
	  				{ conTit: '整改调度',title:'work-change',conUrl:'work-change.html#'+ '/work-manage', locationUrl: '/work-manage' },
	  				{ conTit: '工程进程',title:'work-schedule',conUrl:'work-schedule.html#'+ '/work-schedule', locationUrl: '/work-schedule' },
	  				{ conTit: '验收反馈',title:'work-acceptance',conUrl:'work-acceptance.html#'+ '/work-acceptance', locationUrl: '/work-acceptance' },
	  			]
	  		},
	  		{
	  			tit: '物料管理',
	  			title:'/matter',
	  			con: [
	  				{ conTit: '物料库存',title:'matter-stock',conUrl:'matter-stock.html#'+ '/matter-stock', locationUrl: '/matter-stock'},
	  				{ conTit: '基准物料',title:'matter-basic-list',conUrl:'matter-basic-list.html#'+ '/matter-basic-list', locationUrl: '/matter-basic-list'},
	  				{ conTit: '配送清单',title:'matter-list',conUrl:'matter-list.html#'+ '/matter-list', locationUrl: '/matter-list'},
	  				{ conTit: '物料报表',title:'matter-forms',conUrl:'matter-forms.html#'+ '/matter-forms', locationUrl: '/matter-forms'},
	  			]
	  		},
	  		{
	  			tit: '并网管理',
	  			title:'/network',
	  			con: [
	  				{ conTit: '并网统计',title:'network-manage',conUrl:'network-manage.html#'+ '/network-manage', locationUrl: '/network-manage' },
	  				{ conTit: '并网申请',title:'network-apply',conUrl:'network-apply.html#'+ '/network-apply', locationUrl: '/network-apply' },
	  				{ conTit: '并网审核',title:'network-auditing',conUrl:'network-auditing.html#'+ '/network-auditing', locationUrl: '/network-auditing' },
	  				{ conTit: '票据管理',title:'network-bill',conUrl:'network-bill.html#'+ '/network-bill', locationUrl: '/network-bill' },
	  			]
	  		},
	  		{
	  			tit: '财务管理',
	  			title:'/finance',
	  			con: [
	  				{ conTit: '财务报表',title:'finance-statements',conUrl:'finance-statements.html#'+ '/finance-statements', locationUrl: '/finance-statements' },
	  				{ conTit: '财务安装',title:'finance-ticket',conUrl:'finance-ticket.html#'+ '/finance-ticket', locationUrl: '/finance-ticket' },
	  			]
	  		},
	  		{
	  			tit: '系统中心',
	  			title:'/system',
	  			con: [
	  				{ conTit: '组织结构',title:'system-group',conUrl:'system-group.html#'+ '/system-group', locationUrl: '/system-group' },
	  				{ conTit: '角色管理',title:'system-role',conUrl:'system-role.html#'+ '/system-role', locationUrl: '/system-role' },
	  				{ conTit: '权限管理',title:'system-authority',conUrl:'system-authority.html#'+ '/system-authority', locationUrl: '/system-authority' },
	  				{ conTit: '员工管理',title:'system-staff',conUrl:'system-staff.html#'+ '/system-staff', locationUrl: '/system-staff' },
	  				{ conTit: '系统日志',title:'system-log',conUrl:'system-log.html#'+ '/system-log', locationUrl: '/system-log' },
	  				{ conTit: '信息模板',title:'system-info',conUrl:'system-info.html#'+ '/system-info', locationUrl: '/system-info' },
	  			]
	  		}
	  	];
	  	 // .selectedNavItem变量存储当前选择项，默认的选择项是"Home"。  
	    $scope.selectedNavItem = 'user-remind' ;
	    $scope.divNavIte       = '/user';
	    // 栏目click时触发的方法。  
	    $scope.itemClick = function(cTitle) {  
	      $scope.selectedNavItem = cTitle ;
	    }  
	    // 初始化。  
	    // 判断当前地址栏路径属于哪个导航栏目。  
	    var currentLocation = $location.path();  
	    
	    for (var i = 0, len = vm.dates.length; i < len; i++) {  
	      var navItem = vm.dates[i].con;
	      for (var j = 0, lenn = navItem.length; j < lenn; j++){
	      	var navItemm = navItem[j];
	      	//console.log(currentLocation+"----"+navItemm.locationUrl);
	      	if (currentLocation == navItemm.locationUrl) {  
		        $scope.selectedNavItem = navItemm.title;
		        $scope.divNavItem = $location.path().split("-")[0];
		      }  
	      }
	    }  	
  });
   app.directive('shineLeft', function() { 
	 return { 
	 restrict: 'E', 
	 template: `<div class="index-main-left">
				 <div class="index-main-left-num2" style="display: none;">
					<h3><span></span><span></span><span></span></h3>
					<ul>
						<li ng-repeat="d in vm.dates">
							<div class="index-main-left-num2-tit1" ng-class="{indexMainLeftNum2Active: divNavItem == d.title}"><i></i><span ng-show="{{d.conNum}}">{{d.conNum}}</span></div>
							<div class="index-main-left-num2-tit2">
								<a ng-repeat="c in d.con" ng-href="{{c.conUrl}}"><p>{{c.conTit}}</p></a>
							</div>
						</li>
					</ul>
				</div>
				<div class="index-main-left-num1">
					<h3><span></span><span></span><span></span></h3>
					<div class="index-main-leftLi" ng-class="{indexMainLeftActive: divNavItem == d.title}" ng-repeat="d in vm.dates">
						<div>
							<i></i>{{d.tit}}<em ng-init="divNavItem == d.title? o='-':o='+'">{{o}}</em>
						</div>
						<ul ng-class="{disBlock: divNavItem == d.title}">
							<li ng-repeat="c in d.con" ng-class="{indexMainLeftActiveLi: selectedNavItem == c.title}" ng-click="itemClick(c.title)">
								<a ng-href="{{c.conUrl}}">
									<p>{{c.conTit}}</p>
								</a>
								<span ng-show="{{c.conNum}}">{{c.conNum}}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>`,
	 replace: true 
	 }; 
	}); 
	app.directive('shineHeader', function() { 
	 return { 
	 restrict: 'E', 
	 template: `<div class="index-header">
				<div class="index-header-content">
					<div class="index-header-left"></div>
					<div class="index-header-right">
						<a href="javascript:void(0);"></a>
						<a href="javascript:void(0);">
							<ul>
								<li>administrator<i></i></li>
								<li><em></em>我的资料</li>
								<li>退出</li>
							</ul>
						</a>
						<a href="javascript:void(0);"> 你好!</a>
						<a href="javascript:void(0);"><em>10</em></a>
					</div>
				</div>
			</div>`,
	 replace: true 
	 }; 
	}); 
  $(document).on("click",".index-main-leftLi>div",function(){
  	 $(this).parent().addClass("indexMainLeftActive").siblings().removeClass("indexMainLeftActive").find("ul").hide();
  	 $(this).siblings("ul").show();
  })
  
//index.html
	//左边栏高度适配
	setTimeout(function(){
		$(".index-main-left").css("height",$(document).height()-54-15-2); //15：上边距   54：头部高度   2：上下边框1px
	},100)
	
