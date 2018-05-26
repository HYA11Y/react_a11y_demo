import React, { Component } from 'react';
import './Modal.css';

const ESC_KEY = 27;
const TAB_KEY = 9;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.firstInteractiveElement = React.createRef();
    this.lastInteractiveElement = React.createRef();

    this.handleTabKeyPress = this.handleTabKeyPress.bind(this);
    this.handleShiftTabKeyPress = this.handleShiftTabKeyPress.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
    this.closeModal = this.closeModal.bind(this);

    document.onkeyup = this.closeOnEscape;
  }

  componentDidUpdate() {
    if (this.props.isVisible) {
      this.firstInteractiveElement.current.focus();
      document.body.classList.add('no-scroll');
    }
  }

  closeOnEscape(evt) {
    if (evt.keyCode === ESC_KEY && this.props.isVisible) {
      evt.preventDefault();
      this.closeModal();
    }
  }

  closeModal() {
    document.body.classList.remove('no-scroll');
    this.props.closeModal();
  }

  handleTabKeyPress(evt) {
    const pressedTabKey = evt.keyCode === TAB_KEY;
    const didNotPressShiftKey = !evt.nativeEvent.shiftKey;
    const shiftFocusToFirstInteractiveElement = pressedTabKey && didNotPressShiftKey;

    if (shiftFocusToFirstInteractiveElement) {
      evt.preventDefault();
      this.firstInteractiveElement.current.focus();
    }
  }

  handleShiftTabKeyPress(evt) {
    const pressedTabKey = evt.keyCode === TAB_KEY;
    const pressedShiftKey = evt.nativeEvent.shiftKey;
    const shiftFocusToLastInteractiveElement = pressedTabKey && pressedShiftKey;

    if (shiftFocusToLastInteractiveElement) {
      evt.preventDefault();
      this.lastInteractiveElement.current.focus();
    }
  }

  render() {
    const modalIsVisible = this.props.isVisible;

    return (
      <div aria-hidden={!modalIsVisible} className={`modal-container ${modalIsVisible ? 'modal-container--visible' : '' }`}>
        <div
          className="modal-overlay"
          ref={this.modalOverlay}
          onClick={this.closeModal}
        />
        <div
          className="modal"
          ref={this.modal}
          tabIndex="0"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ModalHeader"
          aria-describedby="ModalDescription"
        >
          <div className="modal__header">
            <h2 id="ModalHeader">Register for a class</h2>
            <button
              className="button button--icon"
              onClick={this.closeModal}
              ref={this.firstInteractiveElement}
              onKeyDown={this.handleShiftTabKeyPress}
            >
              <i className="fas fa-times" aria-hidden="true" />
              <span className="visually-hidden">Close registration form</span>
            </button>
          </div>
          <p id="ModalDescription">You are registering for <strong>Stateful yoga (Thursday at 6:30pm)</strong>.</p>
          <div className="modal__actions">
            <button
              className="button button--primary"
            >Confirm</button>
            <button
              className="button"
              ref={this.lastInteractiveElement}
              onKeyDown={this.handleTabKeyPress}
              onClick={this.closeModal}
            >Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
