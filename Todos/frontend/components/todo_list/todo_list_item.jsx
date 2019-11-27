import React from "react";

export default class ToDoListItem extends React.Component {


  constructor (props) {
    super(props);
    const { todo, removeTodo, receiveTodo } = props;
    this.todo = todo;
    this.removeTodo = removeTodo;
    this.receiveTodo = receiveTodo; 

  }



  remove (e) {
    this.removeTodo(this.todo.id);
  }

  updateTodo(e) {
    this.todo.done = !this.todo.done;
    this.receiveTodo(todo);
  }

  render () {


     const doneState = this.todo.done ? "Undo" : "Done";


    return (
      <li>
        {this.todo.title} - 
        <button onClick={this.updateTodo}>{doneState}</button> - 
        <button onClick={this.remove}>Remove</button>
      </li>
    );
  }
}