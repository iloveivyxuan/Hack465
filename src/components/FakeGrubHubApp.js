import React from 'react';
import './FakeGrubhubApp.css';
import '@reach/dialog/styles.css';
import { SimpleDialog } from '@grubhubprod/gh-cookbook-react';

class FakeGrubhubApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showAlert: false,
      showSwipe: false,
      screenWidth: 0,
      screenHeight: 0,
      dimensions: {},
      setShowGrubHubApp: this.props.setShowGrubHubApp,
    } ;
    this.updateOnTimeout = this.updateOnTimeout.bind(this);
    this.setShowAlert = this.setShowAlert.bind(this)
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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
  }

  componentDidMount() {
    this.updateOnTimeout();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  setShowAlert(input) { this.setState({showAlert: input});}

  updateOnTimeout() {
    setTimeout(() => {
      this.setState({ showAlert: true });
    }, 10000);
  }

  onConfirm = () => {
    this.setShowAlert(false);
    this.props.showSwipeGamePage();
  }

  onImgLoad = ({target:img}) => {
    this.setState({
      dimensions:{
        height:img.naturalHeight,
        width:img.naturalWidth
      }
    });
  }

  onClick = () => {
    this.setShowAlert(true);
  }

  render() {
    const { screenWidth, dimensions } = this.state;
    const background = <img src={this.url} alt='fake background' className="fake-gh-app__bg" onLoad={this.onImgLoad} />;
    return (
      <div>
        <div alt="fake grubhub app" className="fake-gh-app">
          {background}
          <div 
            style={{
              backgroundColor: 'red', 
              width: `${212 * screenWidth/(dimensions.width/3)}px`, 
              height: `${227 * screenWidth/(dimensions.width/3)}px`, 
              position: "absolute", 
              top: `${screenWidth/(dimensions.width/3) * 478}px`, 
              left: `${screenWidth/(dimensions.width/3) * 16}px`,
              opacity: "0%",
            }}
            onClick={this.onClick}
            >
          </div>
          <SimpleDialog
            isOpen={this.state.showAlert}
            as="aside"
            title="Can't decide what to order?"
            description="Let us help! Find your perfect dish with GrubMatch."
            primaryActionLabel="Find my GrubMatch"
            secondaryActionLabel="No thanks"
            onPrimaryActionClick={this.onConfirm}
            onSecondaryActionClick={() => this.setShowAlert(false)}
            direction="column"
          />
      </div>
    </div>
  );
  }
}

export { FakeGrubhubApp };
