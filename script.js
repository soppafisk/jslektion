(function(){
  // personklass
  var Person = function(name) {
    this.name = name;
  };

  // todoklass
  var Todo = function() {

  };

 var store = function(name) {
   this.name = name;
   this.data = [];
 }

 store.prototype.load = function () {
 	this.data = localStorage.getItem(this.name)
 }

 var userStore =  new store("users");

  userStore.load();
  userStore.data;

  // tar hand om local storage
  var Model = function() {
    this.persons = [];
    this.todos = [];
    this.getNamesToString = function() {
      var array = [];
      for(var i = 0; i< this.persons.length; i++) {
        array.push(this.persons[i].name);
        console.log(this.persons[i].name);
      }
      return array.join();
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
