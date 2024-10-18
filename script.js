

function add(a,b){
    var c =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var a=parseInt(c)
    var b=parseInt(d)
    var sum=a+b
    alert(sum)
}
function minus(a,b){
    var c =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var a=parseInt(c)
    var b=parseInt(d)
    var minus=a-b
    alert(minus)
}
function div(a,b){
    var c =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var a=parseInt(c)
    var b=parseInt(d)
    var div1=a/b
    alert(div1)
}
function mul(a,b){
    var c =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var a=parseInt(c)
    var b=parseInt(d)
    var mul=a*b
    alert(mul)
}
function s(a,b){
    var c =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var a=parseInt(c)
    var b=parseInt(d)
    var squ1=a*a
    var squ2=b*b
    alert("the square of first number "+squ1+""+"the square of second number "+squ2)
}
function pt(a,b,c){
    var f =document.getElementById("a").value;
    var d=document.getElementById("b").value;
    var e=document.getElementById("c").value;
    var a=parseInt(f)
    var b=parseInt(d)
    var c=parseInt(e)
   var h=f*f
   var b3=d*d
   var p=e*e

   alert(`${h}=${b3}+${p}` )
}

  function da(){
    var f=new Date
    alert(f)
  }
 function g(){
var name1= prompt("hey tell us your first name");
var name2= prompt("hey tell us your last name");
alert("WELCOME "+name1+" "+name2)
  }
  function f(){
      var input=parseInt(prompt("give a number you want factorial of"))
      var fact = 1
    for (var i = 1; i <= input; i++) {
        fact = fact * i;
    }
    alert(fact)
}
function se(){
    var start=parseInt(prompt("give us the start"))
    var end=parseInt(prompt("give us the end"))
    for(var i=start;i<=end;i++){
        document.write(" "+i);
    }
}
function r(){
    var a=parseInt(prompt("give as length"))
    var b=parseInt(prompt("give as width"))
var area=a*b;
alert(area)
}
function pali(){
    var w=prompt("word?")
    var s=[""];
    s.add(w)
    var d=s.reverse;
    alert(d)
}
function rt(){
    var c =prompt("dy bhai")
    var eng= c.toUpperCase
    alert(eng)
}


















