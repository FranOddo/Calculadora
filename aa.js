//variables-----------------------------------------
var cero=document.getElementById("cero")
var uno=document.getElementById("uno")
var dos=document.getElementById("dos")
var tres=document.getElementById("tres")
var cuatro=document.getElementById("cuatro")
var cinco=document.getElementById("cinco")
var seis=document.getElementById("seis")
var siete=document.getElementById("siete")
var ocho=document.getElementById("ocho")
var nueve=document.getElementById("nueve")
var pant=document.getElementById("pant")
var mult=document.getElementById("mult")
var suma=document.getElementById("mas")
var resta=document.getElementById("menos")
var c=document.getElementById("C")
var igual=document.getElementById("igual")
var div=document.getElementById("div")
var opa
var opb
var op
var res

//numeros-----------------------------------------
uno.addEventListener("click", function(){
	pant.value=pant.value + "1"
})
dos.addEventListener("click", function(){
	pant.value=pant.value + "2"
})
tres.addEventListener("click", function(){
	pant.value=pant.value + "3"
})
cuatro.addEventListener("click", function(){
	pant.value=pant.value + "4"
})
cinco.addEventListener("click", function(){
	pant.value=pant.value + "5"
})
seis.addEventListener("click", function(){
	pant.value=pant.value + "6"
})
siete.addEventListener("click", function(){
	pant.value=pant.value + "7"
})
ocho.addEventListener("click", function(){
	pant.value=pant.value + "8"
})
nueve.addEventListener("click", function(){
	pant.value=pant.value + "9"
})
cero.addEventListener("click", function(){
	pant.value=pant.value + "0"
})

//operadores-----------------------------------------
resta.addEventListener("click", function(){
	opa=parseInt(pant.value)
	op="-"
	pant.value= " "
})
suma.addEventListener("click", function(){
	opa=parseInt(pant.value)
	op="+"
	pant.value= " "
	
})
div.addEventListener("click", function(){
	opa=parseInt(pant.value)
	op="/"
	pant.value= " "
})
mult.addEventListener("click", function(){
	opa=parseInt(pant.value)
	op="x"
	pant.value= " "
}) 

//operaciones----------------------------------------
igual.addEventListener("click", function(){	
	opb= parseInt(pant.value)
	res= 0
	switch (op){
		case "+":
			res = parseInt(opa+opb)
		break;
		case "-":
			res = parseInt(opa) - parseInt(opb)
		break;
		case "x":
			res = parseInt(opa*opb)
		break;
		case "/":
			res = parseInt(opa/opb)
		break;
		
	}
	pant.value= parseInt(res)
})
	
//reset----------------------------------------
c.addEventListener("click", function(){
	opa=0
	opb=0
	op=" "
	pant.value= ""
})




	










