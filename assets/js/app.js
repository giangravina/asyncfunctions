var teacher = {
	name: 'Shane',
	speak: function(message) {
		
		//Bind a function to a specific context
		var printMessage = function(msg){
			console.log(this.name + ' says ' + msg);
		}.bind(this);
		
		//boundFunction will always run in bound context
		setTimeout(printMessage.call(this, message), 1000);
	}
}


teacher.speak('hello');