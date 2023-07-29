import React, { Component } from "react";

class List1 extends Component {
  constructor() {
    super();
    this.state = {
      items: ["one", "two"],
    };
  }

  addItem = () => {
    this.setState((prevState) => {
      // Add a new item to the 'items' array
      return {
        items: [...prevState.items, `item-${prevState.items.length + 1}`],
      };
    });
  };

  render() {
    return (
      <>
        <h1>List Ul Class component</h1>

        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {this.state.items.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default List1;
