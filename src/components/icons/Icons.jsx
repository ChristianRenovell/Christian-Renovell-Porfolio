import React from 'react'
import Modal from '../modal/Modal'


class Icons extends React.Component {

    constructor(props){
        super();
        this.state = {
          showModal: false
        }
        this.handleShowMessageClick = this.handleShowMessageClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    
    handleShowMessageClick  () {
      this.setState({showModal: true})
    } 
      
    handleCloseModal() {
      this.setState({showModal: false})
    }

    render() {
      return (
          <div>
            <img src = {this.props.src} onClick={this.handleShowMessageClick} width="100px"/>
            {this.state.showModal ? (
              <Modal onClose={this.handleCloseModal}
                     modalcolor = {this.props.modalcolor}
                     color = {this.props.color}
                     src = {this.props.src}
                     title = {this.props.title}
                     description = {this.props.description}
                     diplomaTitle = {this.props.diplomaTitle}
                     diplomaSrc = {this.props.diplomaSrc}
                     >
                         
              </Modal>
            ) : null}
          </div>
      )
    }
  }
  
export default Icons