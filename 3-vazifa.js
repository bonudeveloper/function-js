function random(){
   let user = prompt("5ta imkoniyat beriladigan son o'yini o'ynaymiz. \nSon kiriting");
   let ran = Math.floor(Math.random()*10 +1);
  

   for (i = 1; i < 6; i++) {
      if (user == ran) {
        alert("To'g'ri raqam kiritingiz")
        
        break;
      }else {
        if (i!==5){
            alert("Topolmadingiz sizda yana " + (5 - i) + " urinish qoldi");
            prompt("Yana kiriting");
        }else {
            
            alert("Sizda urinish qolmadi");
            break;
        }
      }
   }

}

random();