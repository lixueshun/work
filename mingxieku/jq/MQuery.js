function MQuery(vArg){
	//声明一个数组，将需要保留的元素的节点全部保留在数组中
	this.elements = [];

	//对参数的类型做判断
	switch(typeof vArg){
		case "function": //window.onload
			addEvent(window, "load", vArg)
			break;
		case "string": //元素选择器
			//我们还要对字符串参数进行分类
			switch(vArg.charAt(0)){
				//这里我们需要一个变量，将所有选择的元素保留下来
				case "#": //ID
					var obj = document.getElementById(vArg.substring(1));
					this.elements.push(obj);
					break;
				case ".": //className
					//byClassName 不兼容
					this.elements = getByClass(document, vArg.substring(1));
					break;
				default: //tagName
					var nodes = document.getElementsByTagName(vArg);
					this.elements = nodes;
					break;
			}
			break;
		case "object": //对象  this document window
			this.elements.push(vArg);
			break;
		default:
			break;
	}
}

//简化调用的函数名
function $(vArg){
	return new MQuery(vArg);
}


MQuery.prototype.click = function(func){
	//【注】我们要把这个函数添加给选中的所有元素
	for(var i = 0; i < this.elements.length; i++){
		//this.elements[i].onclick = func;
		addEvent(this.elements[i], "click", func);
	}
	return this;
}

MQuery.prototype.hover = function(fnOver, fnOut){
	//将选中的元素遍历，添加方法
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], "mouseover", fnOver);
		addEvent(this.elements[i], "mouseout", fnOut);
	}
	return this;
}
MQuery.prototype.hide = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "none";
	}
	return this;
}
MQuery.prototype.show = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "block";
	}
	return this;
}

MQuery.prototype.css = function(attr, value){
	//1、判断参数的格式
	if(arguments.length == 2){
		//赋值
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].style[attr] = value;
		}
	}else{
		//2、分为两种情况
		if(typeof attr == "string"){
			//取值
			return getStyle(this.elements[0], attr);
		}else{
			//设置多个样式
			for(var i = 0; i < this.elements.length; i++){
				for(var key in attr){
					this.elements[i].style[key] = attr[key];
				}
			}
		}
	}
	//没有返回值  返回值的部分需要MQuery对象
	return this;
}


MQuery.prototype.attr = function(attr, value){
	if(arguments.length == 2){
		//赋值
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i][attr] = value;
		}
	}else{
		if(typeof attr == "string"){
			//取值
			return this.elements[0][attr];
		}else{
			//多个赋值
			for(var i = 0; i < this.elements.length; i++){
				for(var key in attr){
					if(key == "class"){
						key = "className";
					}
					this.elements[i][key] = attr[key];
				}
			}
		}
	}
	return this;
}

MQuery.prototype.find = function(str){
	//用于记录符合条件的所有子节点
	var aResult = [];
	for(var i = 0; i < this.elements.length; i++){
		switch(str.charAt(0)){
			case ".": //class
			var aEle = getByClass(this.elements[i], str.substring(1));
			aResult = aResult.concat(aEle);
				break;
			default: //tagName
			var aEle = this.elements[i].getElementsByTagName(str);
			// aResult = aResult.concat(aEle);
			//伪数组不能调用数组的方法
			appendArr(aResult, aEle);
				break;
				//aResult装有所有符合条件的子元素的数组
		}
	}
	// return $(aResult);
	// var obj = new MQuery();
	var obj = $();
	obj.elements = aResult;
	return obj;
}
function getIndex(obj){
	//1、查找到所有的兄弟节点
	var aBrother = obj.parentNode.children;
	//alert(aBrother.length);
	for(var i = 0; i < aBrother.length; i++){
		if(aBrother[i] == obj){
			return i;
		}
	}
}

MQuery.prototype.index = function(){
	// this.elements[0]
	return getIndex(this.elements[0]);
}


function appendArr(arr1, arr2){
	for(var i = 0; i < arr2.length; i++){
		arr1.push(arr2[i]);
	}
}

MQuery.prototype.eq = function(n){
	//返回的不是一个MQuery的对象
	// return this.elements[n];
	return $(this.elements[n]);
}

MQuery.prototype.toggle = function(){

	//【注】在JS中arguments和this一样复杂
	var _arguments = arguments;


	//我们所传的函数在哪里  都在arguments里 而arguments是一个数组
	//var count = 0;
	for(var i = 0; i < this.elements.length; i++){
		addToggle(this.elements[i]);
	}
	function addToggle(obj){
		var count = 0;
		obj.onclick = function(){
			// alert(count++ % 4);
			//调用对应下标的函数
			_arguments[count++ % _arguments.length].call(obj);
		}
	}
	return this;
}

//当前有效的样式
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}

//通过class获取元素
//查找父元素oParent 下所有class为sCalss的元素
function getByClass(oParent, sClass){
	//获取该父元素节点内所有的子辈元素
	var aEle = oParent.getElementsByTagName("*");
	//记录符合条件的元素节点
	var aResult = []
	for(var i = 0; i < aEle.length; i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}


//【注】绑定事件的兼容性写法
function addEvent(obj, type, func){
	if(obj.addEventListener){
		obj.addEventListener(type, function(ev){
			var e = ev || window.event;
			var vArg = func.call(obj);
			//alert(vArg);
			//【注】如果判断返回值是false，那么我们就可以进行阻止事件冒泡和默认事件
			if(vArg == false){
				//阻止事件冒泡
				if(e.stopPropagation){
					e.stopPropagation();
				}else{
					e.cancelBubble = true;
				}
				//阻止默认事件
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue = false;
				}
			}
		}, false);
	}else if(obj.attachEvent){
		obj.attachEvent("on" + type, function(ev){
			var e = ev || window.event;
			var vArg = func.call(obj);
			//alert(vArg);
			//【注】如果判断返回值是false，那么我们就可以进行阻止事件冒泡和默认事件
			if(vArg == false){
				//阻止事件冒泡
				if(e.stopPropagation){
					e.stopPropagation();
				}else{
					e.cancelBubble = true;
				}
				//阻止默认事件
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue = false;
				}
			}
		});
	}
}



function removeEvent(obj, type, func){
	if(obj.removeEventListener){
		obj.removeEventListener(type, func);
	}else if(obj.detachEvent){
		obj.detachEvent("on" + type, func);
	}
}









