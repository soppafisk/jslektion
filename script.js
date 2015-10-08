(function(){
  // personklass
  var Person = function(name) {
    this.name = name;
  };

  // todoklass
  var Todo = function(description, person) {
    this.description = description;
    this.person = person;
  };

 var store = function(name) {
   this.name = name;
   this.data = [];
 }
 var d = document.querySelector.bind(document);
 var render = function(template, data) {
 	var template = d('.' + template).innerHTML;
 	for (var key in data) {
 		template = template.replace('{' + key + '}'. data[key]);
 	}
 	return template; 	
 }

 // var renderedTodos = '';
 // for (var i = 0; i < ; i++) {
 // 	d('#todos').innerHTML = renderedTodos; 	
 // } 

 store.prototype.load = function () {
 	this.data = localStorage.getItem(this.name)
 }

 var userStore =  new store("users");

  userStore.load();
  userStore.data;

  // tar hand om local storage
  var Model = function() {
    this.persons = this.loadData("persons");
    this.todos = this.loadData("todos");
  };

  Model.prototype.loadData = function(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  Model.prototype.getNames = function() {
    var array = [];
    for(var i = 0; i< this.persons.length; i++) {
      array.push(this.persons[i].name);
      console.log(this.persons[i].name);
    }
    return array;
  }

 	Model.prototype.getNamesToString = function() {
    return this.getNames().join();
  }

  Model.prototype.getTodos = function() {
    var array = [];
    for(var i = 0; i< this.todos.length; i++) {
      array.push(this.todos[i].description);
      console.log(this.todos[i].description);
    }
    return array;
  }

  Model.prototype.getTodosToString = function() {
    return this.getTodos().join();
  }


  Model.prototype.saveData = function(key, dataToSave) {
    localStorage.setItem(key, JSON.stringify(dataToSave));
  }



  var TodoApp = function() {
    var namesDiv = document.querySelector("#names");
    var updateNames = function() {
      namesDiv.innerHTML = model.getNamesToString();
    }
    var todosDiv = document.querySelector("#todos");
    var updateTodos = function() {
      todosDiv.innerHTML = model.getTodosToString();
    }

    var _this = this;
    var model = new Model();
    updateNames();

    var addPerson = function() {
      var name = addForm.person.value;
      var person = new Person(name);
      model.persons.push(person);
      updateNames();
      model.saveData("persons", model.persons);
    }
    var addPersonButton = document.querySelector("#addPersonButton");
    addPersonButton.addEventListener("click", addPerson);

    var addTodo = function() {
      var description = addForm.todo.value;
      var todo = new Todo(description);
      model.todos.push(todo);
      updateTodos();
      model.saveData("todos", model.todos);

    }
    var addTodoButton = document.querySelector("#addTodoButton");
    addTodoButton.addEventListener("click", addTodo);
  }

  var run = function() {
    var app = new TodoApp();
  }

  document.addEventListener("DOMContentLoaded", run);


})(window);
