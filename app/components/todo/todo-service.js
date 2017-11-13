function TodoService() {

	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/LesliebMcFarlane'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {

		$.get(baseUrl)
			.then(function (res) {
				// <-- WHY IS THIS IMPORTANT????
				console.log(res)
				todoList = res
				draw(todoList)
			})
			.fail(logError)

	}


	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function (res) {
				getTodos()
				console.log(todoList) // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var todo = todoList.find(todoArr[""] == todoId)
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		for (i = 0; i < todoID.length; i++) {
			if (todo.check) { todo.check == true }
			else {
				if (!todo.check) {
					!todo.check == false
				}
			}
		}

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoItem)
		})
			.then(function (res) {
				console.log(todoItem)
			})
			.fail(logError)
	}

	this.removeTodo = function (todoIndex) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			method: 'DELETE',
			contentType: 'application/json',
			url: baseUrl + '/' + todoIndex
		})
			.then(function (res) {
				console.log(res)
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}
}


