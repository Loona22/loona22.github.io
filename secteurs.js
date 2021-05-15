let table;
let l = 0;
let a = 0;

function preload() {
  table = loadTable('./secteur.csv', 'csv');
}
function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  angleMode(DEGREES);
  colorMode(RGB);

  //vars for color wheel center point
  let x = width / 2;
  let y = height / 2;
  colorWheel(x, y); //slide 11
}

function colorWheel(x, y) {
  strokeWeight(20);
  strokeCap(SQUARE);
  
  
  for (let count = 0; count < 8; count++) {
    //males 100 %
    part = table.get(count+22, 2);
    stroke(162, 189, 180);
    line(x, y, x + 5*part * cos(a),
      y + 5*part* sin(a));
    a += 360/8;
  }
  
    for (let count = 0; count < 8; count++) {

    //females 
    tot = table.get(count+22, 2);
    sal = table.get(count+22, 6);
    stroke(217, 144, 114);
    line(x, y, x + sal*tot*5/100 * cos(a),
      y + sal *5*tot/100* sin(a));
    
    a += 360/8;
  }
}