import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.closeButton = React.createRef();
    this.cancelButton = React.createRef();

    this.closeModal = this.closeModal.bind(this);
    this.focusCloseButton = this.focusCloseButton.bind(this);
    this.focusCancelButton = this.focusCancelButton.bind(this);
  }

  componentDidUpdate() {
    this.modal.current.focus();
  }

  closeModal() {
    this.props.closeModal();
  }

  focusCloseButton(evt) {
    if (evt.keyCode === 9 && !evt.nativeEvent.shiftKey) {
      evt.preventDefault();
      this.closeButton.current.focus();
    }
  }

  focusCancelButton(evt) {
    if (evt.keyCode === 9 && evt.nativeEvent.shiftKey) {
      evt.preventDefault();
      this.cancelButton.current.focus();
    }
  }

  render() {
    return (
      <div className={`modal-container ${this.props.isVisible ? 'modal-container--visible' : '' }`}>
        <div className="modal-overlay"></div>
        <div
          className="modal"
          ref={this.modal}
          tabIndex="0"
        >
          <button onClick={this.closeModal} ref={this.closeButton} onKeyDown={this.focusCancelButton}>Close</button>
          <h2>Register for a class</h2>
          <form>
            <fieldset>
              <label htmlFor="FullName">Full name</label>
              <input type="text" id="FullName" />
              <label htmlFor="EmailAddress">Email address</label>
              <input type="text" id="EmailAddress" />
            </fieldset>
            <fieldset>
              <label htmlFor="SelectClass">Which class are you registering for?</label>
              <select id="SelectClass">
                <option value="stateful">Stateful yoga (Thursday at 6:30pm)</option>
                <option value="componentized">Componentized yoga (Monday at 5:00pm)</option>
                <option value="asynchronous">Asynchronous yoga (Saturday at 11:00am)</option>
              </select>
              <label htmlFor="Info">Are there any considerations you'd like to share with the instructor (e.g., injuries, sensitivities, requests)?</label>
              <textarea id="Info" />
            </fieldset>
            <div>
              <input type="submit" value="Log in" className="button button--primary" />
              <button
                className="button"
                onClick={this.closeModal}
                ref={this.cancelButton} onKeyDown={this.focusCloseButton}
                tabIndex="0"
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
