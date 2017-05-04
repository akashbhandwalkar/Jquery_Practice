$(document).ready(function(){
			
				var hide = false,
				slide = false,
				fade = false,
				opacity= false;

				$("#button1").click(function(){

				    
					if(hide){
				    	$("#panel1").show(1000);
				    	$("#button1").html('Hide');
				    }else{
				    	$("#panel1").hide(1000);
				    	$("#button1").html('Show');
				    }

				    hide = !!!hide;
				   
				});
				
				$("#button2").click(function(){
				    if(slide){
				    	$("#panel2").slideDown(1000);
				    	$("#button2").html('Slide Up');
				    }else{
				    	$("#panel2").slideUp(1000);
				    	$("#button2").html('Slide Down');
				    }

				    slide = !!!slide;
				});

				$("#button3").click(function(){

					if(fade){
				    	$("#panel3").fadeIn(1000);
				    	$("#button3").html('Fade In');
				    }else{
				    	$("#panel3").fadeOut(1000);
				    	$("#button3").html('Fade Out');
				    }

				    fade = !!!fade;

				    
				});

				$("#button4").click(function(){
					if(opacity){
						$('#panel4').css({
							'opacity':'1'
						})
						$("#button4").html('Decrese Opacity');
					}else{
						$('#panel4').css({
							'opacity':'0.5'
						})
						$("#button4").html('Increse Opacity');
					}
					opacity = !!!opacity;
				});


			});