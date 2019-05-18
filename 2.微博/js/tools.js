var tools = {
	setStyle: function (obj, attrJson) {
		for(var key in attrJson) {
			obj.style[key] = attrJson[key];
		}
	},
	getBodySize: function () {
		return {
			width: document.documentElement.clientWidth || document.body.clientWidth,
			height: document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	showCenter: function (obj) {
		this.setStyle(obj, {
			display: "block",
			position: "absolute"
		})
		let _this = this;
		window.onresize = (function center () {
			let left = (_this.getBodySize().width - obj.offsetWidth) / 2 + "px",
				top = (_this.getBodySize().height - obj.offsetHeight) / 2 + "px";
			_this.setStyle(obj, {left, top});
			return center;
		})();
	}
}




