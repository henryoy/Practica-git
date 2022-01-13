function GetName(name, lastname, nickname){
	
	this.name = name;
	this.lastname = lastname;
	this.nickname = nickname;
	
	return `Mi nombre es "${ this.name } ${this.lastname}", pero prefiero que me digas "${ nickname }".` 
}

GetName("Henry","Salatiel","CHIVO");



var o = ["hola","baby"];
function GetFirst(array){
	return array.shift();
}
GetFirst(o);

var o = ["hola","baby"];
function GetFirst(array){
	return array.forEach(f=>{
		console.log(f);
	});
}
GetFirst(o);

var o = { saludo:"hola",saludo2:"baby"};

function GetFirst(object1){
	return Object.values(object1).forEach(f=>{
		console.log(f);
	});
}
GetFirst(o);