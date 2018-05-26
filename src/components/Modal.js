import React, { Component } from 'react';
import './Modal.css';

const ESC_KEY = 27;
const TAB_KEY = 9;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.closeButton = React.createRef();
    this.cancelButton = React.createRef();

    this.handleKeyDownOnCancelButton = this.handleKeyDownOnCancelButton.bind(this);
    this.handleKeyDownOnCloseButton = this.handleKeyDownOnCloseButton.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
    this.closeModal = this.closeModal.bind(this);

    document.onkeyup = this.closeOnEscape;
  }

  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.current.focus();
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

  handleKeyDownOnCancelButton(evt) {
    const shiftFocusToNextInteractiveElement = evt.keyCode === TAB_KEY && !evt.nativeEvent.shiftKey;

    if (shiftFocusToNextInteractiveElement) {
      evt.preventDefault();
      this.closeButton.current.focus();
    }
  }

  handleKeyDownOnCloseButton(evt) {
    const shiftFocusToPreviousInteractiveElement = evt.keyCode === TAB_KEY && evt.nativeEvent.shiftKey;

    if (shiftFocusToPreviousInteractiveElement) {
      evt.preventDefault();
      this.cancelButton.current.focus();
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
              ref={this.closeButton}
              onKeyDown={this.handleKeyDownOnCloseButton}
              tabIndex="0"
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
              ref={this.cancelButton}
              onKeyDown={this.handleKeyDownOnCancelButton}
              onClick={this.closeModal}
              tabIndex="0"
            >Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
