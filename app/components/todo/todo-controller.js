function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {

		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	var items = [];
	function draw() {

		var todoList = document.getElementById("enter").value;
		if (todoList == "" || todoList.length == 0) {
			return false;
		}
		items.push(todoList);
		document.getElementById("item").children[0].innerHTML += "<li>" + items[items.length - 1] + "</li>";
	}


	/* 		var todoList = document.getElementById("todo");
			var todoItem = todoList.value;
			
	
			//WHAT IS MY PURPOSE?
			//BUILD YOUR TODO TEMPLATE HERE
			var template = ''
			for(var i=0; i<todo.length;i++){
			var todoItem = todoArr[i];
			template +=
	 */


	/* 
				<ul>
				<li>${"todoArr['']"}</li>
				<li>${"todoArr['']"}</li>
				<li>${"todoArr['']"}</li>
				<li>${"todoArr['']"}</li> 
			</ul>
	
			
			document.getElementById("todo").innerHTML= template 
			}
			//DONT FORGET TO LOOP
				//function draw(photoArr){
			 */

}


this.addTodoFromForm = function (e) {
	e.preventDefault() // <-- hey this time its a freebie don't forget this
	// TAKE THE INFORMATION FORM THE FORM
	var form = e.target
	var todo = {
		addTodo
		// DONT FORGET TO BUILD YOUR TODO OBJECT
	}

	//PASSES THE NEW TODO TO YOUR SERVICE
	//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
	//YOU SHOULDN'T NEED TO CHANGE THIS
	todoService.addTodo(todo, getTodos)
	//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
}

this.toggleTodoStatus = function (todoId) {
	// asks the service to edit the todo status
	todoService.toggleTodoStatus(todoId, getTodos)
	// YEP THATS IT FOR ME
}

this.removeTodo = function (todoId) {
	// ask the service to run the remove todo with this id
	todoService.removeTodo(todoID, getTodos)
	// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???


