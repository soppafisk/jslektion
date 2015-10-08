(function(){
  // personklass
  var Person = function(name) {
    this.name = name;
  };

  // todoklass
  var Todo = function() {

  };

  // tar hand om local storage
  var Model = function() {
    this.persons = [];
    this.todos = [];

    this.getNames = function() {
      var array = [];
      for(var i = 0; i< this.persons.length; i++) {
        array.push(this.persons[i].name);
        console.log(this.persons[i].name);
      }
      return array;
    }

    this.getNamesToString = function() {
      return this.getNames().join();
    }

    this.saveData = function() {
      var data = [];
      data["persons"] = this.persons;
      data["todos"] = this.todos;
      localStorage.setItem("todoapp", JSON.stringify(data));
    }
  };

  var TodoApp = function() {
    var _this = this;
    var model = new Model();

    var addPerson = function() {
      var name = addForm.person.value;
      console.log("adda person");
      var person = new Person(name);
      console.log(model);
      model.persons.push(person);
      updateNames();
      model.saveData();
    }
    var addPersonButton = document.querySelector("#addPersonButton");

    addPersonButton.addEventListener("click", addPerson);

    var addTodo = function() {
      console.log("adda todo");
      var todo = new Todo();

    }
    var addTodoButton = document.querySelector("#addTodoButton");

    addTodoButton.addEventListener("click", addTodo);

    var namesDiv = document.querySelector("#names");
    var updateNames = function() {
      namesDiv.innerHTML = model.getNamesToString();
    }
  }




var run = function() {
  var app = new TodoApp();
}

document.addEventListener("DOMContentLoaded", run);

})(window);
