const rootElement = document.querySelector('#root');
// const greetingElement = document.createElement('div');
// greetingElement.classList.add('greeting');
// greetingElement.textContent = 'Hello, React!';

// // console.log(rootElement);
// // console.log(greetingElement);
// rootElement.append(greetingElement);

const greetingElement = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElement, rootElement);