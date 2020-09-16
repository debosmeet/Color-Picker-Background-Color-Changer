import React from "react";

//import ColorPicker from "../Color-Picker/index";

import "./style.css";



class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  } 

  //  executed when a color is selected in color picker
  onColorChange = (e) => {
    //  here e refers to an event which has been occured when a color is selected

    //  whenever we update the color in state then the UI also re-renders to show thw color
    this.setState({
      color: e.target.value // the current color value selected is stored in e.target.value
    });
  };



  render = () => {
    return (
      <div
        style={{
          // setting the current selected color in background
          backgroundColor: this.state.color
        }}
        className="bg-container">
        <div className="picker-box">
        <span>Choose a color</span>
        <input type="color" onChange={this.onColorChange} />
        <span>{this.state.color}</span>
      </div>
      </div>
    );
  };
}

export default Background;
