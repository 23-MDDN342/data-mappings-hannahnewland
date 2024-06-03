/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {

  
  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [217, 2, 2];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = [119, 85, 17]

  this.appleColour = [217,2,2];
  this.TopLipColour = [143,1,1];
  this.BottomLipColour = [252,3,32];
  this.MouthType = 2;

  this.eyeSize = 0.5;
  this.PupilSize = int(this.eyeSize/1.5);
  let centerX = 0;
  this.DistanceBetweenEyes = 5

  this.tilt_value = 90;
  this.eye_value = 2;
  // this.mouth_type =
  //this.eye_type = 1;
  // this.eyebrows_yesno =
  // this.eyebrow_height =
  // this.eyebrow_length = 

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {

    // head
    ellipseMode(CENTER);
    ///stroke(stroke_color);
    noStroke();
    fill(this.appleColour);
    //ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    ellipse(centerX-0.5, 0, 2,3);
  ellipse(centerX+0.5, 0, 2,3);
    noStroke();


    // mouth
    this.TopLipPoint1 = positions.top_lip[0]; //point 48
    this.TopLipPoint2 = positions.top_lip[2]; //point 50
    this.TopLipPoint3 = positions.top_lip[3]; //point 51
    this.TopLipPoint4 = positions.top_lip[4]; //point 52
    this.TopLipPoint5 = positions.top_lip[6]; //point 54

    this.BottomLipPoint1 = positions.bottom_lip[2] //point 56
    this.BottomLipPoint2 = positions.bottom_lip[4] //point 58

    if(this.MouthType ==1){ //mouth shut

    fill(this.BottomLipColour);

   beginShape();
   vertex(this.TopLipPoint1[0],this.TopLipPoint1[1]);
   vertex(this.TopLipPoint5[0],this.TopLipPoint5[1]);
   vertex(this.BottomLipPoint1[0], this.BottomLipPoint1[1]);
   vertex(this.BottomLipPoint2[0],this.BottomLipPoint2[1]);
   endShape(CLOSE);
   
    fill(this.TopLipColour);
    //ellipse(this.BottomLipPoint2[0],this.BottomLipPoint2[1],0.5);
   
    beginShape();
   vertex(this.TopLipPoint1[0],this.TopLipPoint1[1]);
   vertex(this.TopLipPoint2[0],this.TopLipPoint2[1]);
   vertex(this.TopLipPoint3[0],this.TopLipPoint3[1]);
   vertex(this.TopLipPoint4[0],this.TopLipPoint4[1]);
   vertex(this.TopLipPoint5[0],this.TopLipPoint5[1]);
   endShape(CLOSE);

    } 
    else {

      this.OpenMouthPoint1 = positions.top_lip[10];//point 61
      this.OpenMouthPoint2 = positions.top_lip[9]; //point 62
      this.OpenMouthPoint3 = positions.top_lip[8]; //point 63
      this.OpenMouthPoint4 = positions.bottom_lip[8] //point 67
      this.OpenMouthPoint5 = positions.bottom_lip[9] // point 66
      this.OpenMouthPoint6 = positions.bottom_lip[10] //point 65

     

      fill(this.BottomLipColour);

      beginShape();
      vertex(this.TopLipPoint1[0],this.TopLipPoint1[1]);
      vertex(this.TopLipPoint5[0],this.TopLipPoint5[1]);
      vertex(this.BottomLipPoint1[0], this.BottomLipPoint1[1]);
      vertex(this.BottomLipPoint2[0],this.BottomLipPoint2[1]);
      endShape(CLOSE);
      
       fill(this.TopLipColour);
       //ellipse(this.BottomLipPoint2[0],this.BottomLipPoint2[1],0.5);
      
       beginShape();
      vertex(this.TopLipPoint1[0],this.TopLipPoint1[1]);
      vertex(this.TopLipPoint2[0],this.TopLipPoint2[1]);
      vertex(this.TopLipPoint3[0],this.TopLipPoint3[1]);
      vertex(this.TopLipPoint4[0],this.TopLipPoint4[1]);
      vertex(this.TopLipPoint5[0],this.TopLipPoint5[1]);
      endShape(CLOSE);


      fill(0);

      beginShape();
      vertex(this.TopLipPoint1[0],this.TopLipPoint1[1]);
      vertex(this.OpenMouthPoint1[0],this.OpenMouthPoint1[1]);
      vertex(this.OpenMouthPoint2[0],this.OpenMouthPoint2[1]);
      vertex(this.OpenMouthPoint3[0],this.OpenMouthPoint3[1]);
      vertex(this.TopLipPoint5[0],this.TopLipPoint5[1]);
      vertex(this.OpenMouthPoint6[0], this.OpenMouthPoint6[1]);
      vertex(this.OpenMouthPoint5[0],this.OpenMouthPoint5[1]);
      vertex(this.OpenMouthPoint4[0],this.OpenMouthPoint4[1]);
      endShape(CLOSE);

     
    }
   


    // eyebrows
    fill( this.eyebrowColour);
    stroke( this.eyebrowColour);
    strokeWeight(0.08);
    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);

    // draw the chin segment using points
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

    fill(100, 0, 100);
    stroke(100, 0, 100);
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);

    strokeWeight(0.03);

    fill(this.lipColour);
    stroke(this.lipColour);
    //this.draw_segment(positions.top_lip);
    //this.draw_segment(positions.bottom_lip);

    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

    // eyes
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;


    if (this.eye_value == 2) {
      fill(255);

    // eye shape
    ellipse(left_eye_pos[0], left_eye_pos[1],this.eyeSize * 3, this.eyeSize);
    ellipse(right_eye_pos[0], right_eye_pos[1], this.eyeSize * 3, this.eyeSize);

    // irises
    fill(0);
    ellipse(left_eye_pos[0], left_eye_pos[1], this.eyeSize);
    ellipse(right_eye_pos[0], right_eye_pos[1], this.eyeSize);

    //pupils
    noStroke();
    fill(255);
    ellipse(left_eye_pos[0], left_eye_pos[1], this.eyeSize/1.5);
    ellipse(right_eye_pos[0], right_eye_pos[1], this.eyeSize/1.5);

      // fill(this.mainColour);
      // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
      // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    }
    else {

      let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
      let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

      fill(255);
      ellipse(eyePosX, eyePosY, 1.5, this.eyeSize);
      
      fill(0);
      ellipse(eyePosX,eyePosY, this.eyeSize);

      fill(255);
      ellipse(eyePosX, eyePosY, this.eyeSize/2);

    }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.eye_value, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}
