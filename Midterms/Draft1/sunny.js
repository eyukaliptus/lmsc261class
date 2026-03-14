        //************Drawing*********//

function drawMountain(p5, x, y, width, height)
{      
       p5.noStroke()
       p5.fill(199);
       let topCoords = [x + width * 0.5, y + height * 0.2]
       let topLeftCoords = [x + width * 0.1, y + height * 1]
       let topRightCoords = [x + width * 0.9, y + height * 1]
      

       
       //******** MOUNTAIN BOTTOM LAYER *********//
       p5.triangle(topCoords[0],
                    topCoords[1],
                    topLeftCoords[0],
                    topLeftCoords[1],
                    topRightCoords[0],
                    topRightCoords[1]);

        let middleCoords = [x + width* 0.6, y + height * 1]

        p5.fill(100, 100, 100, (p5.mouseY/p5.height) * 255);
        
        //******** MOUNTAIN SHADOW LAYER *********//
        p5.triangle(topCoords[0],
            topCoords[1],
            middleCoords[0],
            middleCoords[1],
            topRightCoords[0],
            topRightCoords[1])
}
        //******** SCAFFOLDING *********//
const drawing = p5 => {


   p5.setup = () => {
       p5.createCanvas(600, 600);

   }


   p5.draw = () => {
       p5.background(20, 20, 255)
    function setup() {
  {
   p5.lerpColor
let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

  }
}



       p5.strokeWeight(2)
  
       //******** SUN *********//
        p5.fill(250, 250, 20, );
       p5.circle(p5.mouseX, p5.mouseY, p5.width * 0.1);

       //******** Mountain Drawing********//
        drawMountain(p5, 0, 100, 600, 700)
        drawMountain(p5, 250, 300, 600, 300)
        drawMountain(p5, -200, 400, 600, 400)

    }

       //********* Mouse Tracking**********//
   p5.mousePressed = () => {
       console.log("Mouse Pressed!");
   }

}
       //*************Print*********//
new p5(drawing);
