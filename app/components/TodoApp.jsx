var React = require('react');
var TodoList = require('TodoList');

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
  render: function(){
    let {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
