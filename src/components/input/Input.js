import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.defaultInputValue,
      checkbox: {
        state: false,
        value: "Checkbox text"
      }
    };

    this.onInputChange = this.inputChange.bind(this);
    this.onCheckboxChange = this.checkboxChange.bind(this);
  }

  render() {
    return (
     <div>
       <div>
         <input value={this.state.inputValue}
                onChange={this.onInputChange}
         />
       </div>
       <div>
         <input type="checkbox"
                value={this.state.checkbox.value}
                checked={this.state.checkbox.state}
                onChange={this.onCheckboxChange}

         />
       </div>
       <div>
         <button>Submit</button>
       </div>
     </div>
    );
  }

  inputChange(event) {
    let nextState = {
      inputValue: event.target.value
    };
    if (event.target.value.length > 10) {
      nextState = Object.assign(nextState, {
          checkbox: {
            state: true
          }
        }
      )
    } else {
      nextState = Object.assign(nextState, {
          checkbox: {
            state: false
          }
        }
      )
    }
    this.setState(nextState);
  }

  checkboxChange() {
    if (this.state.inputValue.length < 10) {
      this.setState((prevState) => ({
        checkbox: {
          state: !prevState.checkbox.state
        }
      }));
    }
  }
}

Input.propTypes = {
  defaultInputValue: PropTypes.string
};

export default Input;
