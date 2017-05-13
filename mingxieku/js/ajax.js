function ajax(method, url, data, successFunc){ //successFunc处理数据的函数

			/*
				get 和 post请求的区分
				1、open
				2、post进行编码
				3、send
			*/

			//1、声明ajax对象
			var xhr = null;
			try{
				xhr = new XMLHttpRequest();
			}catch(error){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}

			//2、方法和数据传输不同
			if(method == "get" && data){
				url += "?" + data;
			}

			xhr.open(method, url, true);

			//3、如果是post请求
			if(method == "get"){
				xhr.send();
			}else{
				xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');//声明发送的数据类型
				xhr.send(data);
			}

			//4、返回数据的部分
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						// alert(xhr.responseText);
						//【注】当我们下载到数据以后，我们在这里处理数据的需求是各种各样的
						//【注】我们可以把处理数据的代码全部写在这里，由于处理数据的代码不一定，我们可以将这段代码当做参数传入
						//【3】	
						successFunc(xhr.responseText);


						//return xhr.responseText;  错误的，没有办法获取到返回的数据
					}
				}
			}
		}
