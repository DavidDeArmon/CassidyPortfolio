import React from 'react'
import Modal from 'react-modal';
import RecentWork from './modals/RecentWork';
import About from './modals/About';
import Pricing from './modals/Pricing';

const customStyles = {
  content: {
    width:'70rem',
    maxWidth: '80vw',
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};


class Modals extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef('gatsby-noscript');
  }
  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          {this.props.modal === 'about' && <About />}
          {this.props.modal === 'recentWork' && <RecentWork />}
          {this.props.modal === 'pricing' && <Pricing />}
        </Modal>
    )
  }
}

export default Modals
