import React from 'react';


// const CORAL = "Coral";
// const AQUA = "Aqua";
// const BISQUE = "Bisque";

// class ColorPicker extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//     }
//   }

//   showNameOfColor(event) {
//     this.setState({
//       title: event.target.style.backgroundColor
//     })
//   }

//   resetNameofColor() {
//     this.setState({
//       title: ''
//     })
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <div className="picker__title" style={{ textTransform: "capitalize" }}>
//             {this.state.title}
//           </div>
//           <div>
//             <button className="picker__button picker__button_coral"
//               onMouseOver={this.showNameOfColor.bind(this)}
//               onMouseOut={this.resetNameofColor.bind(this)}
//               style={{ background: CORAL }}></button>
//             <button className="picker__button picker__button_aqua"
//               onMouseOver={this.showNameOfColor.bind(this)}
//               onMouseOut={this.resetNameofColor.bind(this)}
//               style={{ background: AQUA }}></button>
//             <button className="picker__button picker__button_bisque"
//               onMouseOver={this.showNameOfColor.bind(this)}
//               onMouseOut={this.resetNameofColor.bind(this)}
//               style={{ background: BISQUE }}></button>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// export default ColorPicker;






class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  setTitle = (colorName) => {
    this.setState({
      title: colorName,
    });
  }

  reset = () => {
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.title}
        </div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setTitle('Coral')}
            onMouseOut={this.reset}
          />
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setTitle('Aqua')}
            onMouseOut={this.reset}
          />
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setTitle('Bisque')}
            onMouseOut={this.reset}
          />
        </div>
      </div>
    );
  };
}

export default ColorPicker;