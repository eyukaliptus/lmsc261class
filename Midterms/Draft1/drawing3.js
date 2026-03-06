function drawJared(p5, x, y, width, height)
{
    let coord1 = [x + width * 0.425, y + height * 0.5];
    let coord2 = [x + width * 0.575, y + height * 0.5];
    let eyeRadius = width * 0.025;

    p5.circle(coord1[0], coord1[1], eyeRadius);
    p5.circle(coord2[0], coord2[1], eyeRadius);


    p5.noFill()
    let mouthRadius = width * 0.4;


    p5.arc(x + width * 0.5,
        y + height * 0.5,
        mouthRadius,
        mouthRadius,
        0.5,
        Math.PI - 0.5, 
        "CHORD");
} 

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230)

        let numJareds = 16
        for (let jared = 0; jared < numJareds; jared++)
        {
            let size = p5.width * 0.9/4
            let xPos = (jared % 4) * size;
            let yPos = Math.floor(jared / 4) * size;

            drawJared(p5, xPos, 
                yPos, 
                size, 
                size);
        }
    }

}

new p5(drawing);
