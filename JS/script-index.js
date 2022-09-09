const turnOn = document.getElementById ( 'turnOn' );
       const turnOff = document.getElementById ( 'turnOff' );
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
           wand.src = './img/brokenwand.png'
       }
       
       turnOn.addEventListener ('click' , wandOn );
       turnOff.addEventListener ( 'click', wandOff)
       wand.addEventListener ( 'mouseover', wandOn );
       wand.addEventListener ( 'mouseleave', wandOff);
       wand.addEventListener ( 'dblclick', wandBroken);