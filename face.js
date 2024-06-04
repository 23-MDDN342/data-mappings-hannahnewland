

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 6;

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


function Face() {

  // these are state variables for a face
  // (your variables should be different!)


  let stemColour = [119, 85, 17]

  let appleColourRed1 = [217,2,2]; // medium red
  let appleColourRed3 = [214, 27, 60] // light/slightly pink red
  let appleColourGreen1 = [20, 156, 2] // medium green
  let appleColourGreen2 = [113, 149, 72] //dark green
  this.appleColour = [appleColourRed1, appleColourRed3,appleColourGreen1,appleColourGreen2];
  this.TopLipColour = [143,1,1]; // colour of the top lip
  this.BottomLipColour = [252,3,32]; // colour of the bottom lip 
  this.appleColourSelector = 0;
  this.nose_yesno = 0;
  this.eyeSize = 0.5;
  let centerX = 0;
  this.eye_value = 2;
  this.mouth_type = 2;


  this.draw = function(positions) {



    // head
    ellipseMode(CENTER);
    noStroke();
    if(this.appleColourSelector <= 0){ // dark red
    fill(this.appleColour[0]);
    ellipse(centerX-0.5, 0, 2,3);
    ellipse(centerX+0.5, 0, 2,3);

    } else if (this.appleColourSelector <= 1){ // light red
      fill(this.appleColour[1]);
      ellipse(centerX-0.5, 0, 2,3);
      ellipse(centerX+0.5, 0, 2,3);
      } else if (this.appleColourSelector <= 2){ // dark green
        fill(this.appleColour[2]);
        ellipse(centerX-0.5, 0, 2,3);
        ellipse(centerX+0.5, 0, 2,3);
        } else if (this.appleColourSelector <= 3){ // light green 
          fill(this.appleColour[3]);
          ellipse(centerX-0.5, 0, 2,3);
          ellipse(centerX+0.5, 0, 2,3);
          }

  //stem
  fill(stemColour);
  beginShape();
  vertex(centerX, -1.2);
  vertex(centerX+0.2,-2);
  vertex(centerX-0.2,-2);
  endShape(CLOSE);

    noStroke();


    // mouth
    this.LipPoint48 = positions.top_lip[0]; //point 48
    this.LipPoint50 = positions.top_lip[2]; //point 50
    this.LipPoint51 = positions.top_lip[3]; //point 51
    this.LipPoint52 = positions.top_lip[4]; //point 52
    this.LipPoint54 = positions.top_lip[6]; //point 54

    this.LipPoint56 = positions.bottom_lip[2] //point 56
    this.LipPoint58 = positions.bottom_lip[4] //point 58

    this.LipPoint61 = positions.top_lip[10];//point 61
    this.LipPoint62 = positions.top_lip[9]; //point 62
    this.LipPoint63 = positions.top_lip[8]; //point 63
    this.LipPoint67 = positions.bottom_lip[8] //point 67
    this.LipPoint66 = positions.bottom_lip[9] // point 66
    this.LipPoint65 = positions.bottom_lip[10] //point 65


    if(this.mouth_type ==1){ //mouth shut

    fill(this.BottomLipColour);

    // bottom lip

   beginShape();
   vertex(this.LipPoint48[0],this.LipPoint48[1]);
   vertex(this.LipPoint61[0],this.LipPoint61[1]);
   vertex(this.LipPoint62[0],this.LipPoint62[1]);
   vertex(this.LipPoint63[0],this.LipPoint63[1]);
   vertex(this.LipPoint54[0],this.LipPoint54[1]);
   vertex(this.LipPoint56[0], this.LipPoint56[1]);
   vertex(this.LipPoint58[0],this.LipPoint58[1]);
   endShape(CLOSE);
   
    fill(this.TopLipColour);

    //top lip
   
    beginShape();
   vertex(this.LipPoint48[0],this.LipPoint48[1]);
   vertex(this.LipPoint50[0],this.LipPoint50[1]);
   vertex(this.LipPoint51[0],this.LipPoint51[1]);
   vertex(this.LipPoint52[0],this.LipPoint52[1]);
   vertex(this.LipPoint54[0],this.LipPoint54[1]);
   vertex(this.LipPoint63[0],this.LipPoint63[1]);
   vertex(this.LipPoint62[0],this.LipPoint62[1]);
   vertex(this.LipPoint61[0],this.LipPoint61[1]);
   endShape(CLOSE);

    } 
    else {

     

      fill(this.BottomLipColour);

      beginShape();
      vertex(this.LipPoint48[0],this.LipPoint48[1]);
      vertex(this.LipPoint61[0],this.LipPoint61[1]);
      vertex(this.LipPoint62[0],this.LipPoint62[1]);
      vertex(this.LipPoint63[0],this.LipPoint63[1]);
      vertex(this.LipPoint54[0],this.LipPoint54[1]);
      vertex(this.LipPoint56[0], this.LipPoint56[1]);
      vertex(this.LipPoint58[0],this.LipPoint58[1]);
      endShape(CLOSE);
      
       fill(this.TopLipColour);
       //ellipse(this.BottomLipPoint2[0],this.BottomLipPoint2[1],0.5);
      
       beginShape();
       vertex(this.LipPoint48[0],this.LipPoint48[1]);
       vertex(this.LipPoint50[0],this.LipPoint50[1]);
       vertex(this.LipPoint51[0],this.LipPoint51[1]);
       vertex(this.LipPoint52[0],this.LipPoint52[1]);
       vertex(this.LipPoint54[0],this.LipPoint54[1]);
       vertex(this.LipPoint63[0],this.LipPoint63[1]);
       vertex(this.LipPoint62[0],this.LipPoint62[1]);
       vertex(this.LipPoint61[0],this.LipPoint61[1]);
      endShape(CLOSE);


      fill(0);

      beginShape();
      vertex(this.LipPoint48[0],this.LipPoint48[1]);
      vertex(this.LipPoint61[0],this.LipPoint61[1]);
      vertex(this.LipPoint62[0],this.LipPoint62[1]);
      vertex(this.LipPoint63[0],this.LipPoint63[1]);
      vertex(this.LipPoint54[0],this.LipPoint54[1]);
      vertex(this.LipPoint65[0], this.LipPoint65[1]);
      vertex(this.LipPoint66[0],this.LipPoint66[1]);
      vertex(this.LipPoint67[0],this.LipPoint67[1]);
      endShape(CLOSE);

     
    }
    // nose
  
    if(this.nose_yesno ==0){
    this.NoseBridge3 = positions.nose_bridge[3];
    this.NoseTipA = segment_average(positions.nose_tip);


    noStroke();
    fill(this.BottomLipColour);
    ellipse(this.NoseTipA[0]+0.2, this.NoseBridge3[1], 0.4);
    ellipse(this.NoseTipA[0]-0.2, this.NoseBridge3[1], 0.4);

    fill(this.TopLipColour);
    ellipse(this.NoseTipA[0], this.NoseBridge3[1], 0.6);

    }
    

    //eyes
    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

    noStroke();
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
      ellipse(eyePosX, eyePosY, this.eyeSize * 3, this.eyeSize);
      
      fill(0);
      ellipse(eyePosX,eyePosY, this.eyeSize);

      fill(255);
      ellipse(eyePosX, eyePosY, this.eyeSize/1.5);

    }

  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.eye_value = int(map(settings[0], 0, 100, 1, 2));
    this.mouth_type = map(settings[1], 0, 100, 1, 2);
    this.eyeSize = map(settings[2], 0, 100, 0.3, 0.7);

    this.appleColourSelector = map(settings[3], 0 ,100, 0, 3);
    this.nose_yesno = map(settings[4],0,100,0,1);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(4);
    settings[0] = map(this.eye_value, 1, 2, 0, 100);
    settings[1] = map(this.mouth_type, 1, 2, 0, 100);
    settings[2] = map(this.eyeSize, 0.3, 0.7, 0, 100);
    settings[3] = map(this.appleColourSelector, 0, 3, 0, 100);
    settings[4] = map(this.nose_yesno,0,1,0,100);
    return settings;
  }
}
