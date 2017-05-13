window.onload = function() {
	for(var i = 0; i < 12; i++) {
		$("footer .top").append("<a href='#'>关于名鞋库</a><span>|</span>");
	}

	//---------------------登陆-----------------------------
	function randoms() {
		var p = $("form .authCode p")[0];
		var random_number = "" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
		p.innerHTML = random_number; //把四位数验证码放入页面
		return p.innerHTML;
	}
	randoms(); //当页面刷新的时候切换验证码；

	var a = $("form .authCode a")[0];
	a.onclick = function() { //点击切换验证码
		randoms()
	}

	var btn = $("form .btn input")[0];
	btn.onclick = function() {
		var oIn1 = $("form .userName input")[0];
		var oIn2 = $("form .password input")[0];
		var oIn3 = $("form .authCode input")[0];
		var num = $("form .authCode p")[0].innerHTML;
		var auc = oIn3.value;
		var txt = oIn1.value;
		var pas = oIn2.value;
		//console.log(auc,num);
		if(auc == num) {
			if(txt != "" && pas != "") {
				ajax("post", "http://datainfo.duapp.com/shopdata/userinfo.php", "status=login&userID=" + txt + "&password=" + pas, function(data) {
					if(data == 0) {
						alert("用户名不存在");
					} else {
						if(data == 2) {
							alert("用户名密码不符");
						} else {
							alert("登陆成功");

						}
					}

				});
			}
		}else{
			alert("请重新输入验证码");
		}

	}

}