import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          // <h4>Counter #{counter.id}</h4>
          // </Counter> and {this.props.children} in counter to pass
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
