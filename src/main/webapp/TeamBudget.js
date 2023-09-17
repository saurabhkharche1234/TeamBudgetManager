

function deal(){
	
	var name = document.getElementById("name").value;
	var num1 = parseInt(document.getElementById("content1").value);
	var num2 = parseInt(document.getElementById("content2").value);
	var num3 = parseInt(document.getElementById("content3").value);
	var num4 = parseInt(document.getElementById("content4").value);
	var num5 = parseInt(document.getElementById("content5").value);
	var num6 = parseInt(document.getElementById("content6").value);
	var num7 = parseInt(document.getElementById("content7").value);
	
	var quantity = parseInt(document.getElementById("quantity").value);
	
	var num = num1+num2+num3+num4+num5+num6+num7;
	quantity = num*quantity;
	
	alert("The deal name "+name+ " and budget "+quantity+". Continue?");
	
	if(quantity<100000){
		document.write("Congrats! The deal is under company budget and you can proceed further");
	}else{
		document.write("Sorry! The deal is out of company's budget. We cannot proceed further");
	}
	
}