const drawing = p5 => {
    p5.setup = () => {
       
        //this is the setup function call
        p5. createCanvas (600, 600);


 p5.draw = () => {
// this is where the drawing will occur.   
    p5. background(40);

    letnumCircles = 10;
    let minRadius = 10;
    let maxRadius = 50;

    let radiusIncr = (maxRadius - minRadius) / numCircles
   /* 
    let minColor = 50;
    let maxColor = 255;
    let numCircles = 12;
    let maxColor = 255;
    let colorIncr = (maxColor - minColor)/numCircles;
    let numCircles = 10;
    */
    
    
    for(let i = 0; i < numCircle; i--)
    {
        let radius = i

        let color = minColor + i * 20
        p5.fill(color);
        p5.noStroke()
        p5.circle(50 + (550 / numCircles) * i, 300, 20)
    }
 }












/* const drawing = p5 => {
    p5.setup = () => {
        //this is the setup function call
        p5. createCanvas (600, 600);
    }
p5.draw = () =>{
    p5.background(40);

let circ = 0
while(circ < 20){
    let xPos = 600 * 20;
}

    p5.fill(255);
    p5.noStroke();
    p5.circle(xPos, 300, 40);
}
}

new p5(drawing); */
/* const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(236, 190, 205)

        for(let cir = 0; cir < 12; cir++)
        {
            let offset = p5.width * 0.1;
            let scale = ((p5.width * 0.8)/12) * cir
            
            let radius = 40;
            let newRadius = cir % 3 == 0
            if (newRadius){
                radius = 30;
            }
            let xPos = 50 + 50 * cir;
            p5.circle(offset + scale, 300, 40);
            p5.noStroke();
            p5.fill(40);
        }
    }
}

new p5(drawing);
*/