import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatePickerCustomElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.element.value,
      disabled: props.element.disabled
    };

    props.customElementApi.onDisabledChanged((disabled) => {
      console.log('test');
      this.setState({
        disabled
      });
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.customElementApi.setValue(JSON.stringify(date));
  }

  render() {
    return (
      <DatePicker
        withPortal
        disabled={this.state.disabled}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePickerCustomElement;