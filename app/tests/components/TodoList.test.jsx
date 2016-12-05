var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList'),
    Todo = require('Todo');

describe('TodoList', ()=>{
  it('it should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('it should render one Todo component for each todo list', ()=>{
    var todos = [{
        id: 1,
        text: 'Do something'
      },{
        id: 2,
        text: 'Do another thing'
      }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todos = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todos.length).toBe(todos.length);
  })
});
