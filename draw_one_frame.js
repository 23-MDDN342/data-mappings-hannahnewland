
let colors = ["#152614", "#1E441E", "#60992D"];

function preload(){

    imgMouse = loadImage('mouse.png');
    imgScale = loadImage('scale.png');
    imgSnakeHead = loadImage('snakehead.png');
    imgSnakeHeadLeft = loadImage('snakeheadLeft.png');
   
}

// function for drawing the grid
    function draw_one_frame(cur_frac){
      
	width = 960;
	height = 540;
	let w = width;
	let h = height;
	fill("#1E441E");

    //scale(2, 2);
	rect(0,0,w,h);
	

 
	noStroke();
    
    //creating the vectors 

    let p1 = createVector(0,0); //top left hand corner vector point
    let p2 = createVector(width/4, 0); // top 1/4 across vector point
    let p3 = createVector(width/2,0); // top 1/2 across vector point
    let p4 = createVector(width*(3/4), 0); // top 3/4 across vector point
    let p5 = createVector(width, 0); // full way across vector point
    let p6 = createVector(0, height/2); //middle left hand side vector point
    let p7 = createVector(width/4, height/2); //middle 1/4 across vector point
    let p8 = createVector(width/2, height/2); //middle 1/2 across vector point
    let p9 = createVector (width*(3/4), height/2); //middle 3/4 across vector point
    let p10 = createVector(width, height/2);
    let p11 = createVector(0,height);
    let p12 = createVector(width/4, height);
    let p13 = createVector(width/2, height);
    let p14 = createVector (width*(3/4), height);
    let p15 = createVector (width, height);

    // this is the grid
    line(p1.x,p1.y,p11.x,p11.y);
    line(p2.x,p2.y,p12.x,p12.y);
    line(p3.x,p3.y,p13.x,p13.y);
    line(p4.x,p4.y,p14.x,p14.y);
    line(p5.x,p5.y,p15.x,p15.y);
    line(p1.x,p1.y,p5.x,p5.y);
    line(p6.x,p6.y,p10.x,p10.y);
    line(p11.x,p11.y,p15.x,p15.y);
    

		DrawSnakesFirstCentre(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
        DrawSnakesSides(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
	}


// function for drawing the middle snake
function DrawSnakesFirstCentre(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15){
	
rectMode(CENTER);
        

    ellipseMode(CENTER);

    push();
    translate(240,0);
	let animateCircleX1 = map(cur_frac, 0.1, 0.2, p1.x, p3.x,true);
    let animateCircleY1 = map(cur_frac,0.2, 0.3, p3.y,p15.y,true);
    let animateCircleX2 = map(cur_frac,0.3, 0.4,p1.x, p3.x, true);
    let animateCircleY2 = map(cur_frac, 0.4, 0.5, p1.y, p15.y-100,true);
    let animateCircleX3 = map(cur_frac, 0.5,0.55,p1.x,p2.x+140,true);
    let animateCircleY3 = map(cur_frac, 0.55,0.6,p3.y, p15.y-200,true);
    let animateCircleX4 = map(cur_frac, 0.6,0.65, p1.x,p3.x-200,true);
    let animateCircleY4 = map(cur_frac, 0.65, 0.7, p1.y, p8.y-100, true);
    let animateCircleX5 = map(cur_frac, 0.7,0.75,p1.x, p2.x-100, true);
    

    let circleSize = map(cur_frac,0,1,50,75,true);
    
    
    
    let darkgreen = color("#152614");
    let calpolygreen = color("#1E441E");
    let asparagusgreen = color("#60992D");
noFill();



stroke(asparagusgreen);


 for (let ii = 1; ii<animateCircleX1; ii++){
 

    circle(p1.y + animateCircleX1-(ii), p1.y,circleSize);
    

 }
 for (let ii = 1; ii<animateCircleY1; ii++){


   
    circle(p3.x, animateCircleY1-(ii), circleSize);

 }
 for (let ii = 1; ii<animateCircleX2; ii++){


    circle(p3.x - (animateCircleX2-(ii)), p15.y,circleSize);

 }
 for (let ii = 1; ii<animateCircleY2; ii++){


   
    circle(p1.x, p15.y -(animateCircleY2-ii), circleSize);

}
for (let ii = 1; ii<animateCircleX3; ii++){
  
  
        circle(p1.x + animateCircleX3-(ii), p2.y+100,circleSize);

}
for (let ii = 1; ii<animateCircleY3; ii++){
  
       
            circle(p3.x-100, animateCircleY3-(ii)+100, circleSize);
    
    
        }
 for (let ii = 1; ii<animateCircleX4; ii++){
   
       
           
                circle(p3.x - (animateCircleX4-(ii))-100, p15.y-100,circleSize);
           
            }

for (let ii = 1; ii<animateCircleY4; ii++){
   
    circle(p1.x+100, p15.y-(animateCircleY4-(ii))-100, circleSize);
            
                }

for (let ii = 1; ii<animateCircleX5;ii++){

          
    circle(p1.x +(animateCircleX5 - (ii))+100, p8.y, circleSize);
    push();
    translate(-20,-50);
    image(imgSnakeHead,animateCircleX5+110, p8.y+12.5,75,75);
    pop();
}
pop();


}

//function for drawing the snakes on the sides

function DrawSnakesSides(cur_frac, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15){
    
    noFill();
    let darkgreen = color("#152614");
    stroke(darkgreen);
    let circleSizeSnake = map(cur_frac,0,1,25,50,true);
    let animatedLeftSnakeY1 = map(cur_frac, 0.1,0.3, p1.y, p15.y, true);
    let animatedLeftSnakeX1 = map(cur_frac, 0.3, 0.4,p1.x, p1.x+150,true);
    let animatedLeftSnakeY2 = map(cur_frac, 0.4, 0.6, p1.y, p15.y,true);
    let animatedLeftSnakeX2 = map(cur_frac, 0.6,0.7, p1.x, p1.x+75,true);
    let animatedLeftSnakeY3 = map(cur_frac, 0.7, 0.9, p1.y, p15.y - 50, true);

    for (let ii = 1; ii<animatedLeftSnakeY1; ii++){

        circle(p1.x+150, p1.y + animatedLeftSnakeY1-ii, circleSizeSnake);
    }

    for (let ii = 1; ii< animatedLeftSnakeX1; ii++){

        circle(p1.x+150 - (animatedLeftSnakeX1-ii), p15.y,circleSizeSnake );
    }

    for (let ii = 1; ii < animatedLeftSnakeY2; ii++){

        circle(p1.x,p15.y - (animatedLeftSnakeY2 - ii), circleSizeSnake);
    }

    for (let ii = 1; ii< animatedLeftSnakeX2; ii++){

        circle(p1.x + (animatedLeftSnakeX2 - ii), p1.y, circleSizeSnake);
    }

    for (let ii = 1; ii < animatedLeftSnakeY3; ii++){

        circle(p1.x+75, p1.y + animatedLeftSnakeY3 - ii, circleSizeSnake);

        image(imgSnakeHeadLeft,p1.x+50, animatedLeftSnakeY3,50,50);

    }



        let animatedRightSnakeY1 = map(cur_frac, 0.1, 0.3, p1.y,p15.y, true);
        let animatedRightSnakeX1 = map(cur_frac, 0.3,0.4, p1.x, p2.x-90,true);
        let animatedRightSnakeY2 = map(cur_frac, 0.4, 0.6, p1.y, p15.y, true);
        let animatedRightSnakeX2 = map(cur_frac, 0.6, 0.7, p1.x, p1.x+75, true);
        let animatedRightSnakeY3 = map(cur_frac, 0.7, 0.9, p1.y, p15.y - 50, true);

        for(let ii = 1; ii < animatedRightSnakeY1; ii++){

            circle(p4.x + 90, p1.y + animatedRightSnakeY1 - ii, circleSizeSnake);
        }

        for(let ii = 1; ii< animatedRightSnakeX1; ii++){

            circle(p4.x+90 + (animatedRightSnakeX1 -ii), p15.y, circleSizeSnake);
        }

        for( let ii = 1; ii< animatedRightSnakeY2; ii++){

            circle(p5.x, p15.y - (animatedRightSnakeY2 - ii), circleSizeSnake);
        }

        for(let ii = 1; ii< animatedRightSnakeX2; ii++){

            circle(p5.x- (animatedRightSnakeX2 - ii), p1.y, circleSizeSnake);
        
        }

        for (let ii = 1; ii< animatedRightSnakeY3; ii++){

            circle(p5.x-75, p1.y + (animatedRightSnakeY3 - ii), circleSizeSnake);
            image(imgSnakeHeadLeft,p5.x-100, animatedRightSnakeY3,50,50);
        }


        // creating the fading rectangle
        rectMode(CORNER);
        
        let seeThroughAmount = 0
        let whenfade = 0.7

        if(cur_frac >= whenfade){

            seeThroughAmount = map(cur_frac, whenfade, 0.95, 0, 255)
        }

        fill(30, 68, 30,seeThroughAmount);
        
        
        rect(0,0, width,height);

       
}

