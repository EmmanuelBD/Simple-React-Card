import logo from './logo.svg';
import './App.css';
import React from 'react';

function Title(props) {
  return <h1>{props.text}</h1>;
}

class Description extends React.Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

function Image(props) {
  return <img src={process.env.PUBLIC_URL + '/achievement.jpg'} width={350}  height={350} alt={props.alt} />;
}

/*class SimpleCard extends React.Component {
  render() {
    return (
      <div className="card">
        <Title text={this.props.title} />
        <Description text={this.props.description} />
        <Image url={this.props.imageUrl} />
      </div>
    );
  }
}*/

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="image-container">
          <Image url={this.props.imageUrl} />
        </div>
        <div className="text-container">
          <Title text={this.props.title} />
          <Description text={this.props.description} />
        </div>
      </div>
    );
  }
}



function App() {
  return (
    <div className="container">
      <SimpleCard
        title="You Are Capable of Greatness"
        description="My dear friend, you are capable of greatness. Believe in yourself, and you can achieve anything you set your mind to. Remember, success is not a destination, but a journey. Embrace the journey, and learn from every experience. No matter how difficult the path may seem, know that you have the strength and resilience to overcome any obstacle. Keep pushing forward, and never give up on your dreams."

       imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
}



export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


