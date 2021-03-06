var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=>{
  it('should exist', ()=>{
    expect(TodoSearch).toExist();
  });
  it('should call onSearch with entered input text', ()=>{
    var searchText = 'Cat';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });
  it('should call onSearch with checked showCompleted', ()=>{
    var showCompleted = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(showCompleted, '');
  });

})
