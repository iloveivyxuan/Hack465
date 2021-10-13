import React from 'react';
import './FakeGrubhubApp.css';
import { Swipe } from './Swipe';
import SweetAlert from 'sweetalert-react';
import Modal from 'react-modal';
class SwipeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: false,
                       showSwipe: false } ;
        this.updateOnTimeout = this.updateOnTimeout.bind(this);
        this.setShowAlert = this.setShowAlert.bind(this)
        this.setShowSwipe = this.setShowSwipe.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.url = './img/fakeLongBg.jpg';
        this.customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)',
                borderRadius: "4px"
            },
        };
    }

    componentDidMount() {
        this.updateOnTimeout();
    }

    setShowAlert(input) { this.setState({showAlert: input});}
    setShowSwipe(input) { this.setState({showSwipe: input}) }

    updateOnTimeout() {
        setTimeout(() => {
            this.setState({ showAlert: true });
        }, 2000);
    }

    onConfirm = () => {
        this.setShowAlert(false);
        this.setShowSwipe(true);
    }

    render() {
        let swipe;
        const background = <img src={this.url} alt='fake background' className="fake-gh-app__bg"/>;
        if(this.state.showSwipe){
            swipe = <Swipe />;
        }else{
            swipe = "";
        }
        return <div>
            <div alt="fake grubhub app" className="fake-gh-app">
                {background}
                <Modal
                    isOpen={this.state.showSwipe}
                    contentLabel="Example Modal"
                    style={this.customStyles}
                >
                    {swipe}
                </Modal>
                <SweetAlert
                    show={this.state.showAlert}
                    title="Can't decide?"
                    text="Let us help! Check out the Grub Match."
                    showCancelButton
                    onCancel={() => this.setShowAlert(false)}
                    onConfirm={this.onConfirm}
                    cancelButtonText="No thanks"
                    confirmButtonText="Match my Grub"
                />
        </div>
    </div>


    }
}
export default SwipeContainer;