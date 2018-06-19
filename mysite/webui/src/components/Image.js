import React from 'react';
import logo from '../logo.svg';
import ReactModal from 'react-modal';
import ModalLeftSide from './ModalLeftSide.js';
import ModalRightSide from './ModalRightSide.js';
import '../css/Image.css';

ReactModal.defaultStyles.overlay.backgroundColor = 'gray';

export default class Image extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  //opens modal
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  //closes modal
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  //ReactModal was trying to attach before the body was loaded
  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  //ReactModal in use
  //You can edit anything inside the <ReactModal> tag for 
  //the required html
  render () {
    return (
      <span key={this.props.data.id}>
        <img src={logo} onClick={this.handleOpenModal} id={this.props.data.id} alt="logo" className="partner-div" />
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Red Hat tracking partners"
            onRequestClose={this.handleCloseModal}
          >
            {/*Will contain the image and badges*/}
            <span className="modal-left-side">
              <ModalLeftSide state={this.props.state} />
            </span>
            {/*Will contain the data and support for new comments*/}
            <span className="modal-right-side">
              <ModalRightSide state={this.props.state} name={this.props.data.name}/>
            </span>
          </ReactModal>
      </span>
    );
  }
}