import React from 'react';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.url = './img/match-list.jpg';
    this.state = { 
      screenWidth: 0,
      screenHeight: 0,
      dimensions: {},
    } ;
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
    this.props.goBacktoSwipeGame()
  }

  onClickBack = () => {
    this.props.goBack()
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    const { screenWidth, dimensions } = this.state;
    return (
      <div>
        <img src={this.url} alt='fake restaurants' className="fake-rr__bg" onLoad={this.onImgLoad} />
        <div 
          style={{
            backgroundColor: 'red', 
            width: `${342 * screenWidth/(dimensions.width/3)}px`, 
            height: `${240 * screenWidth/(dimensions.width/3)}px`, 
            position: "absolute", 
            top: `${screenWidth/(dimensions.width/3) * 945}px`, 
            left: `${screenWidth/(dimensions.width/3) * 16}px`,
            opacity: "0%",
          }}
          onClick={this.onClick}
        ></div>
        <div 
          style={{
            backgroundColor: 'red', 
            width: `${342 * screenWidth/(dimensions.width/3)}px`, 
            height: `${48 * screenWidth/(dimensions.width/3)}px`, 
            position: "absolute", 
            top: `${screenWidth/(dimensions.width/3) * 52}px`, 
            left: `${screenWidth/(dimensions.width/3) * 16}px`,
            opacity: "0%",
          }}
          onClick={this.onClickBack}
        ></div>
      </div>
    );
  }
}

export { RestaurantList };
