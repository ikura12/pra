var 学校 = document.getElementById("demo").innerHTML;
console.log(学校);

var 大胆な = document.querySelector("h1").innerHTML;
console.log(大胆な);

var リスト = document.querySelector("li").innerHTML;
console.log(リスト);

var リスト列 = document.querySelectorAll(".navi li");

for( i =0; i<リスト列.length; i++){
    console.log(リスト列[i].innerHTML);
}