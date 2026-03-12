let isSunny = false;


const drawing = p5 => {


   p5.setup = () => {
       p5.createCanvas(600, 600);
   }


   p5.draw = () => {
       p5.background(20, 20, 400)




       p5.strokeWeight(2)
    

        //moon
    
       let leftArcStart = Math.PI * -0.5;
       let leftArcEnd = leftArcStart + Math.PI;


       let rightArcStart = Math.PI * 1.5;
       let rightArcEnd = rightArcStart + Math.PI;
       let arcSize = p5.height * 0.2;
      

       if (!isSunny){
         
               (arcSize,
               arcSize,
               leftArcStart,
               leftArcEnd);


      


           let botLeftCoords = [p5.width * 0.3, p5.height * 0.8]
       
       }
            p5.fill(250, 250, 20);

       p5.circle(p5.mouseX, p5.mouseY, p5.width * 0.1);
       // top
       p5.noStroke()
       p5.fill(199);
       let topCoords = [p5.width * 0.5, p5.height * 0.2]
       let topLeftCoords = [p5.width * 0.1, p5.height * 1]
       let topRightCoords = [p5.width * 0.9, p5.height * 1]

       p5.line(topLeftCoords[0], topLeftCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topLeftCoords[0], topLeftCoords[1]
       );
       
       
       p5.triangle(topCoords[0],
                    topCoords[1],
                    topLeftCoords[0],
                    topLeftCoords[1],
                    topRightCoords[0],
                    topRightCoords[1])

        let middleCoords = [p5.width * 0.6, p5.height * 1]

        p5.fill(100, 100, 100, (p5.mouseX/p5.width) * 255);
        p5.triangle(topCoords[0],
            topCoords[1],
            middleCoords[0],
            middleCoords[1],
            topRightCoords[0],
            topRightCoords[1])
     
    p5.triangle(topCoords[3],
                    topCoords[3],
                    topLeftCoords[2],
                    topLeftCoords[3],
                    topRightCoords[2],
                    topRightCoords[3])

        let leftTriangleCoords = [p5.width * 0.6, p5.height * 1]

        p5.fill(200, 30, 300, (p5.mouseX/p5.width) * 255);
        p5.triangle(topCoords[3],
                    topCoords[3],
                    topLeftCoords[2],
                    topLeftCoords[3],
                    topRightCoords[2],
                    topRightCoords[3])
    

         // shadow

       /*
       p5.line(topLeftCoords[0], topLeftCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topCoords[0], topCoords[1]
       );


       p5.line(topRightCoords[0], topRightCoords[1],
           topLeftCoords[0], topLeftCoords[1]
       );
       */

   }


   p5.mousePressed = () => {
       console.log("Mouse Pressed!");
   }

}


new p5(drawing);
