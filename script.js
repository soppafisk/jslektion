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
    this.loadData = function(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    this.persons = this.loadData("persons");
    this.todos = [];
  };

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

  Model.prototype.saveData = function(key, dataToSave) {
    localStorage.setItem(key, JSON.stringify(dataToSave));
  }

  var TodoApp = function() {
    var namesDiv = document.querySelector("#names");
    var updateNames = function() {
      namesDiv.innerHTML = model.getNamesToString();
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
      console.log("adda todo");
      var todo = new Todo();

    }
    var addTodoButton = document.querySelector("#addTodoButton");

    addTodoButton.addEventListener("click", addTodo);



  }




var run = function() {
  var app = new TodoApp();
}

document.addEventListener("DOMContentLoaded", run);

})(window);
