window.onload = function() {

		var oImg = $("#main .main-b .left .box .box_in img");
		var oI = $("#main .main-b .left .box1 i")
		// 	console.log(oImg,oI)
		for(var i = 0; i < oI.length; i++) {
			oI[i].index = i;
			oI[i].onmouseenter = function() {
				for(var j = 0; j < oI.length; j++) {
					oI[j].style.borderColor = "";
					oImg[j].style.display = "none";
				}
				this.style.borderColor = "#ff6600";
				oImg[this.index].style.display = "block";
			}
			oI[i].onmouseleave = function() {
				this.style.borderColor = "";
				oImg[this.index].style.display = "none";
				oImg[0].style.display = "block";
			}
		}

		for(var i = 0; i < oI.length; i++) {
			oI[i].index = i;
			oI[i].onclick = function() {
				for(var j = 0; j < oI.length; j++) {
					oI[j].className = "";
					oImg[j].style.display = "none";
				}
				this.className = "te";
				oImg[this.index].style.display = "block";
			}

		}

		//===================放大镜=========================

		var aP = $("#main .main-b .left .box p")[0];
		var lBox = $("#main .main-b .left .box")[0];
		var out = $("#main .main-b .left .box .box_out")[0];
		var out_img = $("#main .main-b .left .box .box_out img")[0];
			
		lBox.onmouseover = function() {
			aP.style.display="block";
			out.style.display="block";
			lBox.onmousemove = function(e) {
				var evt = e || window.event;

				var x = evt.pageX - lBox.offsetLeft;
				var y = evt.pageY - lBox.offsetTop;

				aP.style.left = x-aP.offsetWidth/2 + "px";
				aP.style.top = y- aP.offsetHeight/2+ "px";
				
				out_img.style.left = -(x-aP.offsetWidth/2) + "px";
				out_img.style.top = -(y- aP.offsetHeight/2)+ "px";
				
//				console.log(x-aP.offsetWidth/2 + "px",y- aP.offsetHeight/2+ "px");
//				console.log(out_img.style.left,out_img.style.top)
				if(aP.offsetLeft >= 330) {
					aP.style.left = 330 + "px";
					
				}
				if(aP.offsetLeft <= 0) {
					aP.style.left = 0 + "px";	
				}
				if(aP.offsetTop >= 330) {
					aP.style.top = 330 + "px";	
				}
				if(aP.offsetTop <= 0) {
					aP.style.top = 0 + "px";	
				}
			}
			lBox.onmouseout=function(){
				aP.style.display="none";
				out.style.display="none";
			}
		}

			//------------------------size---------------------------

			var oEm1 = $("#main .main-b .right .center2 .size em")[0];
			var oEm2 = $("#main .main-b .right .center2 .size em")[1];
			var oP = $("#main .main-b .right .center2 .size p")[0];

			//console.log(oEm1,oEm2,oP);

			oEm1.onclick = function() {
				if(oP.innerHTML > 1) {
					oP.innerHTML -= 1;
				}
			}
			oEm2.onclick = function() {
				oP.innerHTML = parseInt(oP.innerHTML) + 1;
			}

			//-----------------二微码---------------------

			var ewm1 = document.getElementsByClassName("ewm1")[0];
			var ewm2 = document.getElementsByClassName("ewm2")[0];
			ewm1.onmouseenter = function() {
				ewm2.style.display = "block";
			}

			ewm1.onmouseleave = function() {
				ewm2.style.display = "none";
			}

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