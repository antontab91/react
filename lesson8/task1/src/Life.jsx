// import React from 'react';

// class Life extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor: good place to create state');
//   }

//   componentDidMount() {
//     console.log("componentDidMount: API calls, subscriptions"); // подписка на события , работа с дом на прямую , запросы к базе и тд 
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render'); // определить нужно ли перерисовывать компоненту 
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(
//       "componentDidUpdate(prevProps, prevState): some updates based on new props"
//     );
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');  // очистка перед удалением DOM, связанного с компонентом 
//   }




//   render() {
//     console.log('return React element to build DOM') // вернуть элемент React для рендера в  DOM
//     return (
//       <div className="s">55</div>
//     )
//   }
// }

// export default Life;


import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return this.props !== nextProps;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return true;
  }
}

export default Life;