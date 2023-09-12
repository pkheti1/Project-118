quick_draw_data_set=["Harry Potter(sign of his head)" , "pirate ship", "palm trees", "tulips", "pine cone", "space ship", "box of candy", "sunflowers in a vase", "koala bear", "angry dog", "candy corn", "cupcake (with sprinkles!)", "pizza", "disco ninja", "girl with really long hair", "cookies", "sad lady", "ice cream cone", "football", "fried egg", "zombie"]
random_number = Math.floor((Math.random()*quick_darw_data_set.length)+1);
Element_of_array = quick_darw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "sketch to be drawn" + Element_of_array;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
sketch = Element_of_array;



function setup() {
   canvas = createCanvas(280, 280);
   canvas.center();
   background("white");
   canvas.mouseReleased(classifyCanvas);
   synth = window.speechSynthesis;
 }
 
 function preload() {
 
 
   classifier = ml5.imageClassifier('DoodleNet');
 }
 
 
 
 function clearCanvas() {
 
   background("white");
 }
 
 function draw() {
 
   // Set stroke weight to 13
   strokeWeight(13);
   // Set stroke color to black
   stroke(0);
   // If mouse is pressed, draw line between previous and current mouse positions
   if (mouseIsPressed) {
     line(pmouseX, pmouseY, mouseX, mouseY);
   }
 }
 
 function classifyCanvas() {
   classifier.classify(canvas, gotResult);
 }
 
 function gotResult(error, results) {
   if (error) {
     console.error(error);
   }
   console.log(results);
   document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
 
   document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
 
   utterThis = new SpeechSynthesisUtterance(results[0].label);
   synth.speak(utterThis);
 }
 
