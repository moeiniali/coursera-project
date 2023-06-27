// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     var func3 = function (y) {};
//     return func3
//   };
// }
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10, 5));

// var dubleAll = makeMultiplier(10);
// console.log(dubleAll(20));

// function changeObject(primValue){
//     console.log("dfsdf");
//     console.log(primValue);

//     primValue = 5
//     console.log(primValue);
// }
// var value = 7;
// changeObject(value)


// function test(){
//     console.log(this);
//     this.myname = "ali"
// }
// test();
// console.log(window.myname);


// function Circle (radius) {
//     this.radius = radius;
//     this.getArea = function(){
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }
// var myCircle = new Circle(10);
// console.log(myCircle);


// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.bark = function () {
//     console.log(this.name + " likes barking! Bark!");
//   }
  
//   var max = new Dog("Max", "Buddy");
//   max.bark();

// var array = new Array();
// array[0] = "moeini";
// array[1] = 2;
// array[2]= function (name){
//   console.log("ali" +" " + name);
// }
// array[3] = {course: "html , css , js"};


// console.log(array);
// console.log(array[1]);
// array[2](array[0])



// var names = ['ali','ahmed','yara'];

// for(var i = 0; i < names.length; i++){
//   console.log('hellow' + ' '+ names[i]);
// }


// var names2 = ['ali','reza','ahmed'];

// var myObj = {
//   name:'ali',
//   course:'html,css,js',
//   platfom:"coursera"
// }
// for (var prop in myObj) {
//   console.log(prop + ":" + myObj[prop]);
// }

// var names2 = ['ali','reza','ahmed'];

// names2.mamad = "hi";
//  for(var name in names2){
//   console.log(names2[name]);
//  }


// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);



$(function (){
  $("#navbarNav").blur(function (event){
    var screenWidth = window.innerWidth;
    if(screenWidth < 768) {
      $("#toggle").collapse('hide');
    }
  });
});

(function (global){
var dc = {};
var homeHtml = "snippets/home-snippet.html";
//convinience function for inserting innerHTML for 'select'
var inserHtml = function ( selector , html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src = 'images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


document.addEventListener("DOMContentLoaded" , function (event){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(homeHtml, function(responseText){
    document.querySelector("#main-content").innerHTML = responseText;

  },false);
});

global.$dc = dc;


})(window);