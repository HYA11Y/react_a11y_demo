import React, { Component } from 'react';

class FormInputs extends Component {
  state = {
    name: '',
    email: '',
    class: '',
    info: '',
  }

  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onClassChange = this.onClassChange.bind(this);
    this.onInfoChange = this.onInfoChange.bind(this);
  }

  onNameChange(evt) {
    this.setState({
      name: evt.target.value,
    });
  }

  onEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  onClassChange(evt) {
    this.setState({
      class: evt.target.value,
    });
  }

  onInfoChange(evt) {
    this.setState({
      info: evt.target.value,
    });
  }

  render() {
    return (
      <div className="modal__form-inputs">
        <label htmlFor="FullName">Full name</label>
        <input type="text" id="FullName" onChange={this.onNameChange} value={this.state.name} />
        <label htmlFor="EmailAddress">Email address</label>
        <input type="text" id="EmailAddress" onChange={this.onEmailChange} value={this.state.email} />
        <label htmlFor="Info">Are there any considerations you'd like to share with the instructor (e.g., injuries, sensitivities, requests)?</label>
        <textarea id="Info" onChange={this.onInfoChange} value={this.state.info} rows="5"/>
      </div>
    );
  }
}

export default FormInputs;
