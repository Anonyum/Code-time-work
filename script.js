
  const swiper3 = new Swiper(".slider-3", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      411: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

      // slider js only 
let nkanunner = ["ПРОВЕДЁМ ИНТЕРВЬЮ","СОСТАВИМ ПЛАН","СОБЕРЁМ КОМАНДУ","РАЗРАБОТАЕМ ПРОДУКТ","УЛУЧШИМ МЕТРИКИ"];
// let img = ['img.slid/0.png','img.slid/1.png'];
let i=0
function skizb(){
	document.getElementById("nkar").src="0.jpg"
	document.getElementById("a").value= nkanunner[0]
} 

function next(){
  i++	
  if(i==4){
  	i = 0
  }
 document.getElementById("nkar").src=i+".jpg"
 document.getElementById("a").value=nkanunner[i]
 if(i==1){
  
 };
 if(i==2){
  
 };
 if(i==3){
};
if(i==4){
}
};

function prev(){	
  i--
  if(i==-1){
  	i = 4
  }	
 document.getElementById("nkar").src=i+".jpg"  
 document.getElementById("a").value=nkanunner[i]
 if(i==0){
};
 if(i==1){
 };
 if(i==2){
 };
 if(i==3){
};
if(i==4){
}
};  


  //  slider  3 

let orderImg = ["SAAS-ПЛАТФОРМЫ","М.ПРИЛОЖЕНИЕ","IoT Приложения","AR/VR","MVP","CRM/ERP","BLOCKCHAIN","MVP"];
let j = 0;

function skizb1(){
  document.getElementById("orderimg").src="0.png";
  document.getElementById("b").value=orderImg[0];
}

function next1(){
  j++	
  if(j==8){
  	j = 0
   }
  document.getElementById("orderimg").src=j+".png";
  document.getElementById("b").value=orderImg[j];
  if(j==1){

  }	;
  if(j==2){
   
  };
  if(j==3){
  };
  if(j==4){
  };
  if(j==5){
  };
  if(j==6){
  };
  if(j==7){
  };
  };

  function prev1(){	
    j--
    if(j==-1){
      j = 4
    }	
   document.getElementById("orderimg").src=j+".png"  
   document.getElementById("b").value=orderImg[j]
  
   if(i==8){
   };
   if(i==2){
   };
   if(i==3){
  };
  if(i==4){
  }
  };  
  
