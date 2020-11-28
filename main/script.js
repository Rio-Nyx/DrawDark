	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	window.addEventListener("load",()=>{
		
		createels();
	});
	
	window.addEventListener("resize",()=>{
		canvas.height = window.innerHeight ;
		canvas.width = window.innerWidth ;
	});

	function createels(){
		
		canvas.height = window.innerHeight ;
		canvas.width = window.innerWidth ;

		ctx.lineWidth = 5;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.strokeStyle = 'white';

		var mouse = {x: 0, y: 0};
		 
		canvas.addEventListener('mousemove', function(e) {
		  mouse.x = e.pageX - this.offsetLeft-8;
		  mouse.y = e.pageY - this.offsetTop-8;
		}, false);

		 
		canvas.addEventListener('mousedown', function(e) {
			ctx.beginPath();
			ctx.moveTo(mouse.x, mouse.y);
			canvas.addEventListener('mousemove', onPaint, false);
		}, false);
		 
		canvas.addEventListener('mouseup', function() {
			canvas.removeEventListener('mousemove', onPaint, false);
		}, false);
		 
		canvas.addEventListener('mouseleave',function(){
			canvas.removeEventListener('mousemove', onPaint, false)
			});
		
		var onPaint = function() {
			ctx.lineTo(mouse.x, mouse.y);
			ctx.stroke();
		};
		
	}
	var mem = "white";
	
	function openLeftMenu() {
	  document.getElementById("leftMenu").style.display = "block";
	}

	function closeLeftMenu() {
	  document.getElementById("leftMenu").style.display = "none";
	}
	
	function erase(){
		console.log("erase fn");
		if(ctx.strokeStyle!="black")
			mem = ctx.strokeStyle;
		ctx.strokeStyle="black";
	}
	
	function marker(color){
		ctx.strokeStyle = color;
	}

	function draw(){
		ctx.strokeStyle = mem;
	}
