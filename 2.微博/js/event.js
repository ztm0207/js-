class event{
	constructor(btn,di){
		this.btn=document.querySelector(btn);
		this.div=document.querySelector(di);
		this.h1=document.querySelector("h1");
		this.text=document.querySelector("textarea");
		this.dot();
	}
	//点击显示
	dot(){
		this.btn.onclick = e => {
			this.div.style.display="block";
			
			//this.div.innerHTML=''
			tools.showCenter(this.div);
			this.shield();
			this.h3=this.div.querySelector("h3");
			console.log(this.h3);
			this.move();
		}
		this.div.onclick = e => {
			switch (e.target.className){
				case "h2":
				this.cleardiv();
				this.clearshield();
				break;
				case "button":
				this.panduan();
				break;
			}
		}
	}
	//弹出遮蔽
	shield(){
		this.modal = document.createElement('p');
		this.modal.className = "ac";
		document.body.appendChild(this.modal);
	} 
	//删除背景
	clearshield(){
		this.modal.remove();
	} 
	//移除div
	cleardiv(){
		this.div.style.display="none";
	}
	//判断输入值是否为空
	judge(){
		let inputs=document.querySelectorAll("input");
		if(inputs[0].value=="" ||this.text.value==""){
			confirm("请输入内容！");
		}else{
			this.h1.innerHTML="用户"+inputs[0].value+"内容:"+this.text.value
			this.cleardiv();
			this.clearshield();
		}
	}
	panduan(){
		this.h1.oncontextmenu=e=>{
			var empty=document.createDocumentFragment();
			var ul=document.createElement("ul");
			for(let i=0;i<3;i++){
				var li=document.createElement("li"); 
				if(i==0)li.innerText="添加";
				if(i==1)li.innerText="删除";
				if(i==2)li.innerText="修改";
				ul.appendChild(li);
			}
			empty.appendChild(ul);
			document.body.appendChild(empty);
			if(e.preventDefault){
				e.preventDefault()
			}else{
				window.event.returnValue = false;
			}
			document.onclick = function () {
				document.body.removeChild(ul);
			}
		}
		this.judge();
	}
	
	move(){
		let X=tools.getBodySize().width-this.div.offsetWidth;
		let Y=tools.getBodySize().height-this.div.offsetHeight;
		this.h3.onmousedown= e =>{
			let x=e.offsetX,y=e.offsetY;
			document.onmousemove= e =>{
				let xLeft=e.clientX-x,yTop=e.clientY-y;
			
				this.div.style.left = xLeft + "px";
				this.div.style.top = yTop + "px";
			if(xLeft <0) this.div.style.left=0;
			if(xLeft >X) this.div.style.left=X +"px";
			if(yTop <0) this.div.style.top=0;
			if(yTop >Y) this.div.style.top=Y + "px";
			}
			document.onmouseup= e =>{
				document.onmousemove=null;
			}
		}
	}
}

