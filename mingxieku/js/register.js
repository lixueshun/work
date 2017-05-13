window.onload = function() {
	for(var i = 0; i < 12; i++) {
		$("footer .top").append("<a href='#'>关于名鞋库</a><span>|</span>");
	}

	//---------------------注册-----------------------------
	function randoms() {
		var p = $("form .authCode p")[0];
		var random_number = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
		p.innerHTML = random_number; //把四位数验证码放入页面
		
	}
	randoms(); //当页面刷新的时候切换验证码；
	var a=$("form .authCode a")[0];
	a.onclick = function() { //点击切换验证码
		randoms()
	}
	var btn = $("form .btn input")[0];
	btn.onclick = function() {
		var oIn1 = $("form .userName input")[0];
		var oIn2 = $("form .password input")[0];
		var oIn3 = $("form .authCode input")[0];
		var oIn4 = $("form .ispassword input")[0];
		var num = $("form .authCode p")[0].innerHTML;
		var auc = oIn3.value;
		var txt = oIn1.value;
		var pas = oIn2.value;
		var is_pas=oIn4.value;
		console.log(auc,num);
		if(auc == num) {
			if(txt != "" && pas != ""&&pas==is_pas) {
					//console.log(txt,pas);
					var z1 = /^([a-z]|[A-Z])+/g;
					var z2 = /[0-9]+/g;
					if(z1.test(txt) && z2.test(pas)) {
						ajax("post", "http://datainfo.duapp.com/shopdata/userinfo.php", "status=register&userID=" + oIn1.value + "&password=" + oIn2.value, function(data) {
							if(data == 0) {
								alert("用户名重名");
							} else {
								if(data == 1) {
									alert("注册成功");
								} else {
									alert("数据库报错");
								}
							}
						});
					} else {
						if(!z1.test(txt) && z2.test(pas)) {
							alert("用户名必须为字母");
						} else {
							alert("密码必须为数字");
						}
					}
					txt = "";
					pas = "";
				}
		}else{
			alert("请重新输入验证码");
		}

	}

}