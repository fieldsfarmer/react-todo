$ = require('jQuery');

// var [
//   {
//     id: uuid(),
//     text: 'Run',
//     completed: false
//   },
//   {
//     id: uuid(),
//     text: 'Learn React',
//     completed: false
//   },
//   {
//     id: uuid(),
//     text: 'Cook',
//     completed: false
//   }
// ]
module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }
    return $.isArray(todos)? todos : [];
  }
}
