import React, {Component} from 'react';
import './Clock.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      defaultClock: true
    };

    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render() {
    const clk =
      <h2 onClick={this.changeColor}
          className={this.state.defaultClock ? "clock" : "clock brown"}>
        It's {this.state.date.toLocaleTimeString()}
      </h2>;

    return (
      <div>
        <p> Current time: </p>
        {clk}
      </div>
    )
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  changeColor() {
    this.setState(prevState => ({
      defaultClock: !this.state.defaultClock
    }));
  }
}

export default Clock;