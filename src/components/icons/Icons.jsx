import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../modal/Modal'


class Icons extends React.Component {

    constructor(props){
        super();
        this.state = {showModal: false}
    }

    
    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})
    render() {
      return (
        <div
          style={{
            height: '100%',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 400,
              position: 'relative',
            }}
          >
            <img src = {this.props.src} onClick={this.handleShowMessageClick} width="100px"/>
            {this.state.showModal ? (
              <Modal onClose={this.handleCloseModal}
                     src = {this.props.src}>
                   
              </Modal>
            ) : null}
          </div>
        </div>
      )
    }
  }
  
export default Icons