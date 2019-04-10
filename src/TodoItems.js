import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }

  render() {
    var todoEntries = this.props.entries;
    var ListItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{ListItems}</ul>;
  }
}

export default TodoItems;
