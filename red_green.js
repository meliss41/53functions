function RedOrGreen(id){

	this.makeGreen = function(){
		document.getElementById(id).style.backgroundColor = "green";
		
	};
	this.makeRed = function()
	{
		document.getElementById(id).style.backgroundColor = "red";
	
};
};