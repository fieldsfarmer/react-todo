var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos:[
        {
          id: 1,
          text: 'Run'
        },
        {
          id: 2,
          text: 'Learn React'
        },
        {
          id: 3,
          text: 'Cook'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    alert('new todo: '+ text);
  },
  render: function(){
    let {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
