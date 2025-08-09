// console.log("Hi HI");
// console.log("Hi HI");

// alert ("VD")

var btn = document.getElementById('btn')
btn.addEventListener('click', function(){
   alert('Привітики!');
});

var btn1 = document.getElementById('btn1')
  btn1.addEventListener('click', function(){
  document.getElementById("text1").innerHTML = "Ця пісня звучала в серіалах «Південний парк», «Сімпсони», «Менталіст» і точно запам’яталася вам за фільмом «Один удома». ";
});
var btn2 = document.getElementById('btn2')
  btn2.addEventListener('click', function(){
  document.getElementById("text2").innerHTML = "Ця українська різдвяна пісня перекладена на багато мов ";
});
var btn3 = document.getElementById('btn3')
  btn3.addEventListener('click', function(){
  document.getElementById("text3").innerHTML = "Англійською пісня називається «Carol of the Bells». А як українською ?";
  });
var btn4 = document.getElementById('btn4')
btn4.addEventListener('click', function(){
    document.getElementById("text4").innerHTML = "Відповідь: Щедрик";
    
});

