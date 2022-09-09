const turnOnOff = document.getElementById ( 'turnOnOff' );
       const wand = document.getElementById ('wand');

        function isWandBroken () {
            return  wand.src.indexOf ( 'brokenwand' ) > -1
       }
       function wandOn () {
           if ( !isWandBroken ()){
             wand.src = './img/lumoswand.png';  
           }
            
       }
       
       function wandOff () {
           if ( !isWandBroken ()){
            wand.src = './img/wand.png';   
           }
            
       }

       function wandBroken () {
           wand.src = './img/brokenwand.png';
       }

       function wandOnOff () {
        if ( turnOnOff.textContent == 'Lumos' ) {
            wandOn();
            turnOnOff.textContent = 'Nox';
        }else{
            wandOff();
            turnOnOff.textContent = 'Lumos';
        }
       }
       
       turnOnOff.addEventListener ('click' , wandOnOff );

       wand.addEventListener ( 'mouseover', wandOn );
       wand.addEventListener ( 'mouseleave', wandOff);
       wand.addEventListener ( 'dblclick', wandBroken);
       