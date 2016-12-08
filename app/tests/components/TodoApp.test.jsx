var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo',()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);

    // expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it('should toggle completed value while handleToggle called', ()=>{
    var todoData = {
      id: 1,
      text: 'sing a song',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('should toggle todo from completed to incompleted', ()=>{
    var todoData = {
      id: 2,
      text: 'something',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});
    todoApp.handleToggle(todoData.id);
    // expect completedAt to be undefined
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  })
});
