import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../modal/Modal'


class Icons extends React.Component {

    state = {showModal: false}
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
            <button onClick={this.handleShowMessageClick}>
              Show Secret Modal
            </button>
            {this.state.showModal ? (
              <Modal onClose={this.handleCloseModal}>
                
              </Modal>
            ) : null}
          </div>
        </div>
      )
    }
  }
  
export default Icons