import React from 'react'
import Modal from 'react-modal';
import RecentWork from './modals/RecentWork';
import About from './modals/About';
import Pricing from './modals/Pricing';

const customStyles = {
  content: {
    maxWidth:'80vw',
    maxHeight:'90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('gatsby-noscript'))


function Modals(props) {
  return (
    <div className="gallery">
      <button >Open Modal</button>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.modal === 'about' && <About />}
        {props.modal === 'recentWork' && <RecentWork />}
        {props.modal === 'pricing' && <Pricing />}
      </Modal>
    </div>
  )
}

export default Modals
