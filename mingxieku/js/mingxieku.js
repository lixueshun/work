window.onload = function() {
	/*var aTe1=document.getElementsByClassName("te1");
	var oUl=document.getElementsByClassName("ul");
	aTe1[0].onmouseover=function(){
		oUl[0].style.display="block";
	}
	aTe1[0].onmouseout=function(){
		oUl[0].style.display="none";
	}*/

	//-------------------侧边栏导航------------------------------

	/*$.ajax({
		url: "json/date_aside.json",
		type: "GET",
		success: function(res) {
			//console.log(res[0].left[0])
			for(var i=0;i<res[0].aside.length;i++){
				$("#aside ul").append( "<li style = background:url(" + res[0].aside[i].img + "no-repeat 10px);><a href='#'>"+ res[0].aside[i].a +"</a></li>");	
			}
			
		}
	})*/

	//-----------------二微码---------------------

	var ewm1 = document.getElementsByClassName("ewm1")[0];
	var ewm2 = document.getElementsByClassName("ewm2")[0];
	ewm1.onmouseenter = function() {
		ewm2.style.display = "block";
	}

	ewm1.onmouseleave = function() {
		ewm2.style.display = "none";
	}

	//----------------------banner---------------------------------------

	var banner_ul=$("#banner ul")[0];

	var timer = null;
	
	banner_ul.innerHTML += banner_ul.innerHTML;
	banner_ul.style.width = 2 * banner_ul.offsetWidth + "px";

	function t() {
		timer = setInterval(function() {
			if(banner_ul.offsetLeft <= -banner_ul.offsetWidth / 2) {
				banner_ul.style.left = 0;
			}
			startMove(banner_ul, {
				left: banner_ul.offsetLeft - 1600
			});
		
		}, 1500);
	}
	
	t();
	banner_ul.onmouseover = function() {
		clearInterval(timer);

	}
	banner_ul.onmouseout = function() {
		t();
	}

	//------------------------.main-t-1--------------------------------

	$.ajax({
		url: "json/date_background.json",
		type: "GET",
		success: function(res) {
			//console.log(res[0].left[0])
			for(var i = 0; i < res[0].left.length; i++) {
				$(".main-t-1 .ul1").append("<li ><a href='#' style='background:url(" + res[0].left[i].img + ") no-repeat center;'></a></li>");
			}

		}
	})
	//---------------------商品分类-------------------------------
	$.ajax({
		url: "json/date_background.json",
		type: "GET",
		success: function(res) {
			//console.log(res[0].left[0])
			for(var i = 0; i < res[1].left.length; i++) {
				$("#classify .margin ul").append("<li ><a href='#' style='background:url(" + res[1].left[i].img + ") no-repeat center;'></a></li>");
			}

		}
	})
	//---------------------商品分类2-------------------------------
	$.ajax({
		url: "json/date_background.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[2].classify.length; i++) {
				$("#classify .margin .ol1").append("<li><h4>" + res[2].classify[i].h3 + "</h4><img src=" + res[2].classify[i].img + " /></li>");
			}

		}
	})
	//---------------------商品分类ol2-------------------------------
	$.ajax({
		url: "json/date_background.json",
		type: "GET",
		success: function(res) {
			//console.log(res[3].ol2[0].a1);
			for(var i = 0; i < res[3].ol2.length; i++) {
				$("#classify .margin .ol2").append("<li><a href='#'>" + res[3].ol2[i].a1 + "<a><a href='#'>" + res[3].ol2[i].a2 + "<a><a href='#'>" + res[3].ol2[i].a3 + "<a><a href='#'>" + res[3].ol2[i].a4 + "<a><a href='#'>" + res[3].ol2[i].a5 + "<a><a href='#'>" + res[3].ol2[i].a6 + "<a></li>");
			}

		}
	})

	//-----------------------.main-t-2---------------------

	$.ajax({
		url: "json/date_p.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res.length; i++) {
				$(".main-t-2 ul").append("<li><a href='#'>" + res[i].p + "</a></li>");
			}
		}
	})

	//--------------------#main-b-l---------------------------------
	var main_b_l = document.getElementsByClassName("main-b-l")[0];
	var oSpan1 = main_b_l.getElementsByTagName("span");
	var oBox1 = main_b_l.getElementsByClassName("box1");
	for(var i = 0; i < oSpan1.length; i++) {
		oSpan1[i].index = i;
		oSpan1[i].onmouseover = function() {

			for(var j = 0; j < oSpan1.length; j++) {
				oBox1[j].style.display = "none";
				oSpan1[j].style.color = "#a1a1a3";
			}
			oBox1[this.index].style.display = "block";
			this.style.color = "#000";
			//console.log(this.index);
		}
	}
	//------------------------#main-b-c--------------------------------

	var main_b_c = document.getElementsByClassName("main-b-c")[0];
	var oSpan2 = main_b_c.getElementsByTagName("span");
	var oBox2 = main_b_c.getElementsByClassName("box1");
	for(var i = 0; i < oSpan2.length; i++) {
		oSpan2[i].index = i;
		oSpan2[i].onmouseover = function() {

			for(var j = 0; j < oSpan2.length; j++) {
				oBox2[j].style.display = "none";
				oSpan2[j].style.color = "#a1a1a3";
			}
			oBox2[this.index].style.display = "block";
			this.style.color = "#000";
			//console.log(this.index);
		}
	}

	//-------------------------data_img-----------------------
	$.ajax({
		url: "json/date_img.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res.length; i++) {
				$(".main-c").append("<li><a href='#'><img src=" + res[i].img + " /></a></li>");
			}
		}
	})

	//-----------------.main2-center1 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[0].left.length; i++) {
				$(".main2-center1 .left ul").append("<li><img src=" + res[0].left[i].img + " /><p>" + res[0].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center2 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[1].left.length; i++) {
				$(".main2-center2 .left ul").append("<li><img src=" + res[1].left[i].img + " /><p>" + res[1].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center3 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[2].left.length; i++) {
				$(".main2-center3 .left ul").append("<li><img src=" + res[3].left[i].img + " /><p>" + res[3].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center4 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[3].left.length; i++) {
				$(".main2-center4 .left ul").append("<li><img src=" + res[3].left[i].img + " /><p>" + res[3].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center5 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[4].left.length; i++) {
				$(".main2-center5 .left ul").append("<li><img src=" + res[4].left[i].img + " /><p>" + res[4].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center6 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[5].left.length; i++) {
				$(".main2-center6 .left ul").append("<li><img src=" + res[5].left[i].img + " /><p>" + res[5].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center7 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[6].left.length; i++) {
				$(".main2-center7 .left ul").append("<li><img src=" + res[6].left[i].img + " /><p>" + res[6].left[i].p + "</p></li>");

			}

		}
	})
	//-----------------.main2-center8 .left ul----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[7].left.length; i++) {
				$(".main2-center8 .left ul").append("<li><img src=" + res[7].left[i].img + " /><p>" + res[7].left[i].p + "</p></li>");

			}

		}
	})

	//-------------------.main2-center1 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[8].left_bottom.length; i++) {
				$(".main2-center1 .left i").append("<a href='#'>" + res[8].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center2 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[9].left_bottom.length; i++) {
				$(".main2-center2 .left i").append("<a href='#'>" + res[9].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center3 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[10].left_bottom.length; i++) {
				$(".main2-center3 .left i").append("<a href='#'>" + res[10].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center4 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[11].left_bottom.length; i++) {
				$(".main2-center4 .left i").append("<a href='#'>" + res[11].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center5 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[12].left_bottom.length; i++) {
				$(".main2-center5 .left i").append("<a href='#'>" + res[12].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center6 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[13].left_bottom.length; i++) {
				$(".main2-center6 .left i").append("<a href='#'>" + res[13].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center7 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[14].left_bottom.length; i++) {
				$(".main2-center7 .left i").append("<a href='#'>" + res[14].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})
	//-------------------.main2-center8 .left i-----------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {

			for(var i = 0; i < res[15].left_bottom.length; i++) {
				$(".main2-center8 .left i").append("<a href='#'>" + res[15].left_bottom[i].a + "</a>");
				//console.log("a")
			}
		}
	})

	//-----------------------.main2-center1 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[16].center.length; i++) {
				$(".main2-center1 .center").append("<img src=" + res[16].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center2 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[17].center.length; i++) {
				$(".main2-center2 .center").append("<img src=" + res[17].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center3 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[18].center.length; i++) {
				$(".main2-center3 .center").append("<img src=" + res[18].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center4 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[19].center.length; i++) {
				$(".main2-center4 .center").append("<img src=" + res[19].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center5 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[20].center.length; i++) {
				$(".main2-center5 .center").append("<img src=" + res[20].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center6 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[21].center.length; i++) {
				$(".main2-center6 .center").append("<img src=" + res[21].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center7 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[22].center.length; i++) {
				$(".main2-center7 .center").append("<img src=" + res[22].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//-----------------------.main2-center8 .center------------------------
	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[23].center.length; i++) {
				$(".main2-center8 .center").append("<img src=" + res[23].center[i].img + " />");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center1 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[24].right.length; i++) {
				$(".main2-center1 .right ul").append("<li><div><h3>" + res[24].right[i].title + "</h3><span>" + res[24].right[i].price + "</span><img src=" + res[24].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center2 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[25].right.length; i++) {
				$(".main2-center2 .right ul").append("<li><div><h3>" + res[25].right[i].title + "</h3><span>" + res[25].right[i].price + "</span><img src=" + res[25].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center3 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[26].right.length; i++) {
				$(".main2-center3 .right ul").append("<li><div><h3>" + res[26].right[i].title + "</h3><span>" + res[26].right[i].price + "</span><img src=" + res[26].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center4 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[27].right.length; i++) {
				$(".main2-center4 .right ul").append("<li><div><h3>" + res[27].right[i].title + "</h3><span>" + res[27].right[i].price + "</span><img src=" + res[27].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center5 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[28].right.length; i++) {
				$(".main2-center5 .right ul").append("<li><div><h3>" + res[28].right[i].title + "</h3><span>" + res[28].right[i].price + "</span><img src=" + res[28].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center6 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[29].right.length; i++) {
				$(".main2-center6 .right ul").append("<li><div><h3>" + res[29].right[i].title + "</h3><span>" + res[29].right[i].price + "</span><img src=" + res[29].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center7 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[30].right.length; i++) {
				$(".main2-center7 .right ul").append("<li><div><h3>" + res[30].right[i].title + "</h3><span>" + res[30].right[i].price + "</span><img src=" + res[30].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})
	//---------------------.main2-center8 .right ul--------------------------------------

	$.ajax({
		url: "json/date_main2.json",
		type: "GET",
		success: function(res) {
			for(var i = 0; i < res[31].right.length; i++) {
				$(".main2-center8 .right ul").append("<li><div><h3>" + res[31].right[i].title + "</h3><span>" + res[31].right[i].price + "</span><img src=" + res[31].right[i].img + " /></div></li>");
				//console.log("a")
			}
		}
	})

	//===========================客服==============================

	for(var i = 0; i < 4; i++) {
		$("#service .margin ul").append("<li><div class='li-title'><h3>正品保障</h3><h4>专业精选 正品护航</h4></div><dl><dt><a href='#'>支付方式</a></dt><dd><a href='#'>在线支付</a></dd><dd><a href='#'>货到付款</a></dd><dd><a href='#'>发票说明</a></dd></dl></li>");
	}
	//==============================footer .top================================
	for(var i = 0; i < 12; i++) {
		$("footer .top").append("<a href='#'>关于名鞋库</a><span>|</span>");
	}
	//=================================footer .bottom ol===============================
	for(var i = 0; i < 10; i++) {
		$("footer .bottom .li1").append("<a href='#'>猪八戒网</a>");
	}

	for(var i = 0; i < 9; i++) {
		$("footer .bottom .li2").append("<a href='#'>厦门小鱼网</a>");
	}
	for(var i = 0; i < 5; i++) {
		$("footer .bottom .li3").append("<a href='#'>酒店预订</a>");
	}
	//--------------footer里的定时起------------------------
	function footer_timer() {
		var oL1 = $("footer .bottom ol")[0];
		var speed = -30;
		oL1.innerHTML += oL1.innerHTML;
		var timers = setInterval(function() {
			oL1.style.top = oL1.offsetTop + speed + "px";
			if(oL1.style.top >= "-90px") {
				oL1.style.top = 0;
			}
		}, 1000);
		oL1.onmouseenter = function() {
			clearInterval(timers);
		}
		oL1.onmouseleave = function() {
			footer_timer();
		}
	}
	footer_timer();

}