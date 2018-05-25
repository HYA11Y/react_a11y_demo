import React, { Component } from 'react';
import FormInputs from './FormInputs';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
    this.closeButton = React.createRef();
    this.cancelButton = React.createRef();
    this.modalOverlay = React.createRef();
    this.message = React.createRef();

    this.focusCloseButton = this.focusCloseButton.bind(this);
    this.focusCancelButton = this.focusCancelButton.bind(this);
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
    if (evt.keyCode === 27 && this.props.isVisible) {
      evt.preventDefault();
      this.closeModal();
    }
  }

  closeModal() {
    document.body.classList.remove('no-scroll');
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
      <div aria-hidden={!this.props.isVisible} className={`modal-container ${this.props.isVisible ? 'modal-container--visible' : '' }`}>
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
              onKeyDown={this.focusCancelButton}
              tabIndex="0"
            >
              <i className="fas fa-times" aria-hidden="true" />
              <span className="visually-hidden">Close registration form</span>
            </button>
          </div>
          <p id="ModalDescription">You are registering for <strong>Stateful yoga (Thursday at 6:30pm)</strong>.</p>
          <form onSubmit={this.onFormSubmit}>
            <FormInputs />
            <div className="modal__form-actions">
              <input
                type="submit"
                value="Sign up"
                className="button button--primary"
              />
              <button
                className="button"
                ref={this.cancelButton}
                onKeyDown={this.focusCloseButton}
                onClick={this.closeModal}
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
