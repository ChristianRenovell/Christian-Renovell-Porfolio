import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './modal.scss';

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {

  constructor(props) {
    super();
  }
  render() {
    return ReactDOM.createPortal(
      <div>
        <div className="modalBackground" onClick={this.props.onClose}>
        </div>
        <div className="modal" style={{
          backgroundColor: this.props.modalcolor,
          color: this.props.color
        }}>
          {this.props.children}
          <h1>{this.props.title}</h1>
          <div className="descriptionModal">
            <p>{this.props.description}</p>
          </div>
          <div className="diploma">
            <h2>{this.props.diplomaTitle}</h2>
            <img src={this.props.diplomaSrc} width="100px"/>
          </div>

        </div>
      </div>,
      modalRoot,
    )
  }
}
export default Modal