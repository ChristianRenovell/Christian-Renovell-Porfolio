import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './modal.scss';

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {

  constructor(props){
    super();
  }
  render() {
    return ReactDOM.createPortal(
      <div>
        <div className="modalBackground" onClick={this.props.onClose}>
        </div>
          <div className="modal">
            {this.props.children}
          
            <button onClick={this.props.onClose}>Close</button>
          </div>
      </div>,
      modalRoot,
    )
  }
}
export default Modal