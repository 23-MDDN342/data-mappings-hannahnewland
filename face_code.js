
// Constants that appear in all functions. 
const white = [255, 255, 255];
const black = [0, 0, 0];
const appleColour = [217, 2, 2]; // the red of the apple
const appleTopLipColour = [143, 1, 1]; // the red of the top lip of the apple's original mouth.
const appleBottomLipColour = [252, 3, 32]; // the red of the bottom lip of the apple's original mouth. 
const stemColour = [52,88,57]; // the stem colour of all the fruit.  


// The function that draws the apple. 
function Apple(tilt_value, eye_value, mouth_type, eye_type,eyebrows_yesno,eyebrow_height, eyebrow_length) {
 push()

 // variables that are related to the apple's original eyes.
  let eyeSize = 4;
  let PupilSize = int(eyeSize/1.5);
  let centerX = 0;
  let Iy = -2;
  let DistanceBetweenEyes = 5

  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // drawing the apple shape
  noStroke();
  fill(appleColour);
  ellipse(centerX-2.5, 0, 10,15);
  ellipse(centerX+2.5, 0, 10,15);

  //drawing the stem
  fill(stemColour);
  beginShape();
  vertex(0, -6);
  vertex(-2, -10);
  vertex(0, -9.5);
  endShape(CLOSE);

  // when the apple has one eye:
  if (eye_value == 1 && eye_type ==1 ) { // originally apple eyes, short and wide
  
    fill(white);
    ellipse(centerX, Iy-1, 10,eyeSize);

    fill(black);
    ellipse(centerX,Iy-1,eyeSize);

    fill(white);
    ellipse(centerX,Iy-1,PupilSize);  

  } else if (eye_value == 1 && eye_type ==2){ // originally grape eyes, small and round
   
    //whites of eye
    push();
    translate(0, -2);
   push();
   fill(white);
   ellipse(0,0,3);
   pop();

   // pupil
   push();
   fill(black);
   ellipse(0,0,2);
   pop();

   pop();

   } else if (eye_value == 1 && eye_type == 3){ // originally pear eyes, thin and long

    push();
    translate(0,-1);
    noStroke();
    fill(white);
    ellipse(0,-2,2.5,5);
    
    fill(black);
    ellipse(0,-2,1.5,3);

    pop();
   }

 // when the apple has two eyes:
  if (eye_value == 2 && eye_type ==1) { // orignially apple eyes

    fill(white);
    // eye shape
    ellipse(centerX - DistanceBetweenEyes, Iy,10, eyeSize);
    ellipse(centerX + DistanceBetweenEyes, Iy, 10, eyeSize);

    // irises
    fill(black);
    ellipse(centerX-DistanceBetweenEyes, Iy, eyeSize);
    ellipse(centerX+ DistanceBetweenEyes, Iy, eyeSize);

    //pupils
    noStroke();
    fill(white);
    ellipse(centerX-DistanceBetweenEyes, Iy, PupilSize);
    ellipse(centerX+DistanceBetweenEyes, Iy, PupilSize);

  } else if (eye_value == 2 && eye_type ==2){ // originally grape eyes

     // whites of eyes
     push();
     fill(white);
     ellipse(-4.5,0, 3);
     ellipse(4.5, 0, 3);
     pop();
 
     //pupil
     push();
     fill(black);
     ellipse(-4.5,0,2);
     ellipse(4.5, 0, 2);
     pop();

  } else if (eye_value == 2 && eye_type ==3){ // originally pear eyes

    push();
    translate(0,-1);
    noStroke();
    fill(white);
    ellipse(-2,-2,2.5,5);
    ellipse(2,-2,2.5,5);
    
    fill(black);
    ellipse(-2,-2,1.5,3);
    ellipse(2,-2,1.5,3);
    pop();

  }

  if (eye_value == 3 && eye_type ==1){ // originally apple eyes

    // middle eye
    fill(white);
    ellipse(centerX, Iy-2, 10,eyeSize);

    fill(black);
    ellipse(centerX,Iy-2,eyeSize);

    fill(white);
    ellipse(centerX,Iy-2,PupilSize);   

    //two eyes

      // eye shape
      ellipse(centerX - DistanceBetweenEyes, Iy+2,10, eyeSize);
      ellipse(centerX + DistanceBetweenEyes, Iy+2, 10, eyeSize);
  
      // irises
      fill(black);
      ellipse(centerX-DistanceBetweenEyes, Iy+2, eyeSize);
      ellipse(centerX+ DistanceBetweenEyes, Iy+2, eyeSize);
  
      //pupils
      noStroke();
      fill(white);
      ellipse(centerX-DistanceBetweenEyes, Iy+2, PupilSize);
      ellipse(centerX+DistanceBetweenEyes, Iy+2, PupilSize);


  } else if (eye_value ==3 && eye_type == 2){ // originally grape eyes

     //whites of eyes
     push();
     fill(white);
     ellipse(-4.5,0,3);
     push();
     translate(0,-2);
     ellipse(0,0,3);
     pop();
     ellipse(4.5,0,3);
     pop;
 
     //pupil
     push();
     fill(black);
     ellipse(-4.5,0,2);
     push();
     translate(0,-2);
     ellipse(0,0,2);
     pop();
     ellipse(4.5,0,2);
     pop();
  } else if (eye_value ==3 && eye_type ==3){ // originally pear eyes

    push();
    translate(0,-1);
    noStroke();
    fill(white);
    ellipse(0,-2,2.5,5);
    
    fill(black);
    ellipse(0,-2,1.5,3);

    pop();


    push();
    translate(0,-1);
    noStroke();
    fill(white);
    ellipse(-2,-2,2.5,5);
    ellipse(2,-2,2.5,5);
    
    fill(black);
    ellipse(-2,-2,1.5,3);
    ellipse(2,-2,1.5,3);
    pop();

  }

  // mouth

  if (mouth_type == 1){ // original apple mouth, big red lips

   fill(appleTopLipColour);

   beginShape();
   vertex(0,1);
   vertex(1,0);
   vertex(5,3);
   vertex(-5,3);
   vertex(-1,0);
   endShape(CLOSE);

   fill(appleBottomLipColour);

   beginShape();
   vertex(5,3);
   vertex(2,5);
   vertex(-2,5);
   vertex(-5,3);
   endShape(CLOSE);

   line(5,3,-5,3);
  }  else if (mouth_type ==2){ // original grape mouth, simple black smile
    noFill();
      
    push();
    translate(0,-1);
    stroke(black);
    curve(4,-3,2,5,-2,5,-4,-3);
    pop();
  } else if (mouth_type == 3){ // original pear mouth, toothy mouth open 

    push();
    angleMode(RADIANS);
    rectMode(CENTER);
    translate(0,-2);
    fill(appleTopLipColour);
  arc(0, 5.5, 7,5,0, PI);
  
  fill(white);
  // two big teeth
  rect(1,6,1,1);
  rect(-1,6,1,1);
  pop();
  
  }
  
  //eyebrows

  if (eyebrows_yesno ==2){
    rectMode(CENTER);

    push();
    angleMode(RADIANS);

    fill(97, 47, 20);
    arc(3, -6, eyebrow_length, eyebrow_height, PI, TWO_PI);
    arc(-3,-6, eyebrow_length, eyebrow_height, PI, TWO_PI);
    pop();
  }
pop()
 
}

// the function that draws the grapes.
function Grapes( tilt_value, eye_value, eye_type,mouth_type, nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length) {
push()

 // apple eye variables
  let eyeSize = 4;
  let PupilSize = int(eyeSize/1.5);
  let centerX = 0;
  let Iy = -2;
  let DistanceBetweenEyes = 5

  const grapeColour1 = [105, 78, 191]; // light purple
  const grapeColour2 = [52, 26, 138]; // dark purple
  const grapeColour3 = [166,58,174]; //light pink
  const grapeColour4 = [23,21,71]; // dark blue
  const grapeColour5 = [109,38,90]; //dark pink
  

 
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 
// array of grape colours
  let grapeColours = [grapeColour1, grapeColour2,grapeColour3,grapeColour4,grapeColour5]; // these colours will be randomised with each grape so they all are different colours
  ellipseMode(CENTER);
  rectMode(CENTER);


  
  // grapes
 


  // top row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-4,-7,5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(4,-7,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(0,-7,5.5); // middle grape
  pop();

  // stem
  fill(stemColour);
  beginShape();
  vertex(0, -5);
  vertex(-1, -10);
  vertex(1, -10);
  endShape(CLOSE);

  // second from top row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-5, -4, 5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(5,-4, 5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(-2,-4, 6); // middle left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(2,-4, 6); // middle right grape
  pop();

  //bottom grape
  push();
  fill(random(grapeColours));
  ellipse(0,7,5);
  pop();
  
  //second from bottom row of grapes
  push();
  fill(random(grapeColours));
  ellipse(2,4,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(-2,4,5); // left grape
  pop();

  // middle row of grapes
  push();
  fill(random(grapeColours));
  ellipse(-4,0,5); // left grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(4,0,5); // right grape
  pop();

  push();
  fill(random(grapeColours));
  ellipse(0,0,5.5); // middle grape
  pop();

 
  //eyes 
  if (eye_value == 1 && eye_type == 2){ //the grapes will have 1 eye

    //whites of eye
    push();
    fill(white);
    ellipse(0,0,3);
    pop();

    // pupil
    push();
    fill(black);
    ellipse(0,0,2);
    pop();

  } else if (eye_value ==1 && eye_type ==1){

    push();
    translate(0,2);
    fill(white);
    ellipse(centerX, Iy-1, 10,eyeSize);

    fill(black);
    ellipse(centerX,Iy-1,eyeSize);

    fill(white);
    ellipse(centerX,Iy-1,PupilSize);  

    pop();

  } else if (eye_value ==1 && eye_type ==3){
    noStroke();
    fill(white);
    ellipse(0,-2,2.5,5);
    
    fill(black);
    ellipse(0,-2,1.5,3);
  }

  if(eye_value == 2 && eye_type ==2){ // the grapes will have 2 eyes

    // whites of eyes
    push();
    fill(white);
    ellipse(-4.5,0, 3);
    ellipse(4.5, 0, 3);
    pop();

    //pupil
    push();
    fill(black);
    ellipse(-4.5,0,2);
    ellipse(4.5, 0, 2);
    pop();
  } else if (eye_value ==2 && eye_type ==1){
    push();
    translate(0,2);
    fill(white);
    // eye shape
    ellipse(centerX - DistanceBetweenEyes, Iy,10, eyeSize);
    ellipse(centerX + DistanceBetweenEyes, Iy, 10, eyeSize);

    // irises
    fill(black);
    ellipse(centerX-DistanceBetweenEyes, Iy, eyeSize);
    ellipse(centerX+ DistanceBetweenEyes, Iy, eyeSize);

    //pupils
    noStroke();
    fill(white);
    ellipse(centerX-DistanceBetweenEyes, Iy, PupilSize);
    ellipse(centerX+DistanceBetweenEyes, Iy, PupilSize);
    pop();
  } else if (eye_value ==2 && eye_type ==3){

    
    
    noStroke();
    fill(white);
    ellipse(-2,-2,2.5,5);
    ellipse(2,-2,2.5,5);
    
    fill(black);
    ellipse(-2,-2,1.5,3);
    ellipse(2,-2,1.5,3);
    
  }

if(eye_value ==3 && eye_type ==2){ // the grapes will have 3 eyes

    //whites of eyes
    push();
    fill(white);
    ellipse(-4.5,0,3);
    ellipse(0,0,3);
    ellipse(4.5,0,3);
    pop;

    //pupil
    push();
    fill(black);
    ellipse(-4.5,0,2);
    ellipse(0,0,2);
    ellipse(4.5,0,2);
    pop();
  } else if (eye_value ==3 && eye_type ==1){
    
 // middle eye
 fill(white);
 ellipse(centerX, Iy-2, 10,eyeSize);

 fill(black);
 ellipse(centerX,Iy-2,eyeSize);

 fill(white);
 ellipse(centerX,Iy-2,PupilSize);   

 //two eyes

   // eye shape
   ellipse(centerX - DistanceBetweenEyes, Iy+2,10, eyeSize);
   ellipse(centerX + DistanceBetweenEyes, Iy+2, 10, eyeSize);

   // irises
   fill(black);
   ellipse(centerX-DistanceBetweenEyes, Iy+2, eyeSize);
   ellipse(centerX+ DistanceBetweenEyes, Iy+2, eyeSize);

   //pupils
   noStroke();
   fill(white);
   ellipse(centerX-DistanceBetweenEyes, Iy+2, PupilSize);
   ellipse(centerX+DistanceBetweenEyes, Iy+2, PupilSize);
  


  } else if (eye_value == 3 && eye_type ==3){
  
    noStroke();
    fill(white);
    ellipse(0,-2,2.5,5);
    
    fill(black);
    ellipse(0,-2,1.5,3);

   


   
    noStroke();
    fill(white);
    ellipse(-2,-2,2.5,5);
    ellipse(2,-2,2.5,5);
    
    fill(black);
    ellipse(-2,-2,1.5,3);
    ellipse(2,-2,1.5,3);
 
  }


  if (mouth_type == 2){
    noFill();
    
    stroke(black);
    curve(4,-3,2,5,-2,5,-4,-3);

  } else if (mouth_type == 1){
    push();
    translate(0,4.5);
    scale(0.7);
    fill(appleTopLipColour);
  
    beginShape();
    vertex(0,1);
    vertex(1,0);
    vertex(5,3);
    vertex(-5,3);
    vertex(-1,0);
    endShape(CLOSE);
  
    fill(appleBottomLipColour);
  
    beginShape();
    vertex(5,3);
    vertex(2,5);
    vertex(-2,5);
    vertex(-5,3);
    endShape(CLOSE);
  
    line(5,3,-5,3);
  
    pop();
   
  
  } else if (mouth_type ==3){
    push();
    angleMode(RADIANS);
    rectMode(CENTER);
    fill(appleTopLipColour);
arc(0, 5.5, 7,5,0, PI);
pop();

fill(white);
// two big teeth
rect(1,6,1,1);
rect(-1,6,1,1);
  
  
  
  }

  if (nose_type ==1){ // clown nose

    noStroke();
    fill(138, 3, 3);
    ellipse(0,3.5,3);


  } else if (nose_type == 2){ // basic line triangle nose

    strokeWeight(0.5);
    stroke(black);
    line (0, 2, 1, 4);
    line (1,4,0,4);

  } else if (nose_type == 3){ // piggy nose

    noStroke();
    push();
    fill(237, 159, 223);
    ellipse(0,3.5,4,3);
    pop();

    push();
    fill(black);
    ellipse(1,3.5,1,1.5);
    ellipse(-1,3.5,1,1.5);

}

if (eyebrows_yesno ==2){
  noStroke();
  rectMode(CENTER);

  push();
  angleMode(RADIANS);

  fill(black);
  arc(3, -4, eyebrow_length, eyebrow_height, PI, TWO_PI);
  arc(-3,-4, eyebrow_length, eyebrow_height, PI, TWO_PI);
  pop();
}
pop()
}

//the function that draws the pear.
function Pear(tilt_value, eye_value, eye_type,mouth_type,nose_type,eyebrows_yesno,eyebrow_height,eyebrow_length) {
push()

// apple eye variables
  let eyeSize = 4;
  let PupilSize = int(eyeSize/1.5);
  let centerX = 0;
  let Iy = -2;
  let DistanceBetweenEyes = 5

  angleMode(DEGREES);
  rotate(tilt_value);
 

  //pear shape
  const pearColour = [6, 128, 0];
  noStroke();
  fill(pearColour);
  ellipse(0,2.5,14,13);
  ellipse(0,-2,9,14);
  
  //stem
  fill(stemColour);
  beginShape();
  vertex(0, -8);
  vertex(-2, -10);
  vertex(0, -10);
  endShape(CLOSE);

  if (nose_type ==1){ // clown nose

    push();
    translate(0,-1);
    noStroke();
    fill(138, 3, 3);
    ellipse(0,3.5,3);
    pop();


  } else if (nose_type == 2){ // basic line triangle nose

    strokeWeight(0.5);
    stroke(black);
    line (0, 2, 1, 4);
    line (1,4,0,4);

  } else if (nose_type == 3){ // piggy nose

    push();
    translate(0,-1);
    noStroke();
    push();
    fill(237, 159, 223);
    ellipse(0,3.5,4,3);
    pop();

    push();
    fill(black);
    ellipse(1,3.5,1,1.5);
    ellipse(-1,3.5,1,1.5);
    pop();
    pop();

}

noStroke();
if (eye_value ==1 && eye_type ==3){ // pear will have 1 eye

  noStroke();
  fill(white);
  ellipse(0,-2,2.5,5);
  
  fill(black);
  ellipse(0,-2,1.5,3);
  
}else if (eye_value == 1 && eye_type ==1 ) { // originally apple eyes, short and wide
  
  noStroke();
  fill(white);
  ellipse(centerX, Iy-1, 10,eyeSize);

  fill(black);
  ellipse(centerX,Iy-1,eyeSize);

  fill(white);
  ellipse(centerX,Iy-1,PupilSize);  

} else if (eye_value == 1 && eye_type ==2){ // originally grape eyes, small and round
 noStroke();
  //whites of eye
  push();
  translate(0, -2);
 push();
 fill(white);
 ellipse(0,0,3);
 pop();

 // pupil
 push();
 fill(black);
 ellipse(0,0,2);
 pop();

 pop();

 }

if(eye_value >=2 && eye_type ==3){ // pear will have 2 eyes
  noStroke();
  fill(white);
  ellipse(-2,-2,2.5,5);
  ellipse(2,-2,2.5,5);
  
  fill(black);
  ellipse(-2,-2,1.5,3);
  ellipse(2,-2,1.5,3);
} else if (eye_value == 2 && eye_type ==1) {

  fill(white);
  // eye shape
  ellipse(centerX - DistanceBetweenEyes, Iy,10, eyeSize);
  ellipse(centerX + DistanceBetweenEyes, Iy, 10, eyeSize);

  // irises
  fill(black);
  ellipse(centerX-DistanceBetweenEyes, Iy, eyeSize);
  ellipse(centerX+ DistanceBetweenEyes, Iy, eyeSize);

  //pupils
  noStroke();
  fill(white);
  ellipse(centerX-DistanceBetweenEyes, Iy, PupilSize);
  ellipse(centerX+DistanceBetweenEyes, Iy, PupilSize);

} else if (eye_value == 2 && eye_type ==2){

   // whites of eyes
   push();
   fill(white);
   ellipse(-4.5,0, 3);
   ellipse(4.5, 0, 3);
   pop();

   //pupil
   push();
   fill(black);
   ellipse(-4.5,0,2);
   ellipse(4.5, 0, 2);
   pop();

}

if (mouth_type == 3){

  push();
  angleMode(RADIANS);
  rectMode(CENTER);
  fill(appleTopLipColour);
arc(0, 5.5, 7,5,0, PI);

fill(white);
// two big teeth
rect(1,6,1,1);
rect(-1,6,1,1);
pop();

} else if (mouth_type ==1){

  push();
  translate(0,4.5);
  scale(0.7);
  fill(appleTopLipColour);

  beginShape();
  vertex(0,1);
  vertex(1,0);
  vertex(5,3);
  vertex(-5,3);
  vertex(-1,0);
  endShape(CLOSE);

  fill(appleBottomLipColour);

  beginShape();
  vertex(5,3);
  vertex(2,5);
  vertex(-2,5);
  vertex(-5,3);
  endShape(CLOSE);

  line(5,3,-5,3);

  pop();
} else if (mouth_type ==2){
  noFill();
    
  stroke(black);
  curve(4,-3,2,5,-2,5,-4,-3);



}

// eyebrows

if (eyebrows_yesno ==2){
  noStroke();
  rectMode(CENTER);

  push();
  angleMode(RADIANS);

  fill(97, 47, 20);
  arc(3, -4, eyebrow_length, eyebrow_height, PI, TWO_PI);
  arc(-3,-4, eyebrow_length, eyebrow_height, PI, TWO_PI);
  pop();
}
pop()


}
