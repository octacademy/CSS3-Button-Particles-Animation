// $('.hero-btn').click(function(){
//     if(!$('.hero-btn').parent().hasClass('active')){
//       $(this).parent().stop().addClass('active');
//       setTimeout(function(){  
//         $('.hero-btn').parent().removeClass('active'); 
//       }, 2000);
//     }
//   });


  // $('.hero-btn').click(function(){
    
  //   $('.hero-btn').parent().addClass('active');
  //   setTimeout(function(){  
  //             $('.hero-btn').parent().removeClass('active'); 
  //           }, 1800);
    
  // });

  function startAnimation () {
    let appDiv = document.getElementById("app").classList;
    
    appDiv.add("active");

    setTimeout(function(){  
      appDiv.remove("active");
    }, 2000);
  }