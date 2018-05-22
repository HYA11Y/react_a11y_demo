import React, { Component } from 'react';
import Modal from './Modal';
import './App.css';
import './ClassDescription.css';
import YogaClassImage from './class-1.jpg'

class App extends Component {
  state = {
    openModal: false,
  }

  constructor(props) {
    super(props);

    this.modalTrigger = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      openModal: true,
    });
  }

  closeModal() {
    this.setState({
      openModal: false,
    });

    this.modalTrigger.current.focus();
  }

  renderModal() {
    if (this.state.openModal) {
      return (
        <Modal
          isVisible={this.state.openModal}
          closeModal={this.closeModal}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Lifecycle Yoga</h1>
          <h2 className="subheading">Classes</h2>
        </header>
        <main>
          <div className="yoga-class__container">
            <div className="yoga-class__description">
              <div>
                <h3>Stateful yoga</h3>
                <p className="yoga-class__time">Thursday at 6:30pm</p>
                <p>Renew your sense of focus in this stateful yoga class.</p>
                <button
                  className="button button--primary"
                  onClick={this.openModal}
                  ref={this.modalTrigger}
                >
                  Register
                </button>
              </div>
            </div>
            <div className="yoga-class__image">
              <img src={YogaClassImage} alt="Three women doing plank pose in a yoga studio." />
            </div>
          </div>
          {this.renderModal()}
        </main>

      </div>
    );
  }
}

export default App;
