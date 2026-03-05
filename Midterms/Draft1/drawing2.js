let isSmallPoop = false;


const drawing = p5 => {


   p5.setup = () => {
       p5.createCanvas(600, 600);
   }


   p5.draw = () => {
       p5.background(20, 20, 400)




       p5.strokeWeight(2)
    


       let botLeftArcCoords = [p5.width * 0.9999, p5.height * 0.2];
       let botRightArcCoords = [p5.width * 0.7, p5.height * 0.7];
       let topLeftArcCoords = [p5.width * 0.4, p5.height * 0.5];
       let topRightArcCoords = [p5.width * 0.6, p5.height * 0.5];
      
       let leftArcStart = Math.PI * 0.5;
       let leftArcEnd = leftArcStart + Math.PI;


       let rightArcStart = Math.PI * 1.5;
       let rightArcEnd = rightArcStart + Math.PI;
       let arcSize = p5.height * 0.2;
      

       if (!isSmallPoop){
           p5.arc(botLeftArcCoords[0],
               botLeftArcCoords[1],
               arcSize,
               arcSize,
               leftArcStart,
               leftArcEnd);


      


           let botLeftCoords = [p5.width * 0.3, p5.height * 0.8]
       
       }
     
       // top
       let topCoords = [p5.width * 0.5, p5.height * 0.2]
       let topLeftCoords = [p5.width * 0.4, p5.height * 0.4]
       let topRightCoords = [p5.width * 0.6, p5.height * 0.4]
       p5.line(topLeftCoords[0], topLeftCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topLeftCoords[0], topLeftCoords[1]
       );


   }


   p5.mousePressed = () => {
       console.log("Mouse Pressed!");
   }
}


new p5(drawing);
