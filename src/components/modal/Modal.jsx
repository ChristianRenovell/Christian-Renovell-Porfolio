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
          <div className="lineModal mb-3" style={{ backgroundColor: this.props.color }} />
          <div className="descriptionModal">
            <p>{this.props.description}</p>
          </div>
              <h2 className="mb-4 mt-4">{this.props.diplomaTitle}</h2>
          <div className="row diploma">
            <div className="col-md-6 ">
              <a href={this.props.diplomaLink} target="_blank"><img src={this.props.diplomaSrc} /></a>
            </div>
            <div className="col-md-6">
              <a href={this.props.diplomaLink2} target="_blank"><img src={this.props.diplomaSrc2} /></a>
            </div>
          </div>

        </div>
      </div>,
      modalRoot,
    )
  }
}
export default Modal