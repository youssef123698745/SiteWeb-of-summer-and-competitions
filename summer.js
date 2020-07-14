$(function(){

    var nav = $('.navbar'),
        doc = $(document),
        win = $(window);
    
    win.scroll(function() {
    
        if (doc.scrollTop() > 80) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }
    
    });
    
    win.scroll();
    
    });
    
    
    /* ***** Btn More-Less ***** */
    $("#more").click(function(){
    var $this = $(this);
    $this.toggleClass('more');
    if($this.hasClass('more')){
        $this.text('More');         
    } else {
        $this.text('Less');
    }
    });
    
    
    
    
    /* ***** Slideanim  ***** */
    $(window).scroll(function() {
    $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
    });
    }); 
    
    
    
    
    /* ***** Smooth Scrolling  ***** */
    $(document).ready(function(){ 
    $(".navbar a, #media a").on('click', function(event) {
    
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
    
      window.location.hash = hash;
      });
    } 
    });
    
    
    /* ***** Scroll to Top ***** */ 
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {        
          $('.to-top').fadeIn(200);    
      } else {
          $('.to-top').fadeOut(200);   
      }
    });
    $('.to-top').click(function() {      
      $('.body,html').animate({
          scrollTop : 0                       
      }, 500);
    });
    
    })
    filterSelection("all")
					function filterSelection(c) {
					  var x, i;
					  x = document.getElementsByClassName("column");
					  if (c == "all") c = "";
					  for (i = 0; i < x.length; i++) {
						w3RemoveClass(x[i], "show");
						if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
					  }
					}
					
					function w3AddClass(element, name) {
					  var i, arr1, arr2;
					  arr1 = element.className.split(" ");
					  arr2 = name.split(" ");
					  for (i = 0; i < arr2.length; i++) {
						if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
					  }
					}
					
					function w3RemoveClass(element, name) {
					  var i, arr1, arr2;
					  arr1 = element.className.split(" ");
					  arr2 = name.split(" ");
					  for (i = 0; i < arr2.length; i++) {
						while (arr1.indexOf(arr2[i]) > -1) {
						  arr1.splice(arr1.indexOf(arr2[i]), 1);     
						}
					  }
					  element.className = arr1.join(" ");
					}
					
					
					// Add active class to the current button (highlight it)
					var btnContainer = document.getElementById("myBtnContainer");
					var btns = btnContainer.getElementsByClassName("btn");
					for (var i = 0; i < btns.length; i++) {
					  btns[i].addEventListener("click", function(){
						var current = document.getElementsByClassName("active");
						current[0].className = current[0].className.replace(" active", "");
						this.className += " active";
					  });
					}