var A = function(){
	this.a=1;
};

var x = new A();

var y = x;

y.a =5;

console.log(x.a)
console.log(y.a)

console.log(x==y)
//
//
//var obj={a:1}
//var obja
//obja= obj;
////b=a;
//console.log(obja.a);
//
//console.log(obja == obj)
//console.log(obja === obj)
//
//obj.a=2
//obja.b=1
//obj.c=3
//console.log(obja == obj)
//console.log(obja.a)
//console.log(obj.a)
//console.log(obj.b)
//console.log(obja.c)