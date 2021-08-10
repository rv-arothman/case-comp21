import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class FetchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'title'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your choice was: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="title">Media</option>
          <option value="movie">Movie</option>
          <option value="show">Show</option>
        </select>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="title">Genre</option>
          <option value="horror">Horror</option>
          <option value="action">Action</option>
          <option value="thriller">Thriller</option>
        </select>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="title">Stream</option>
          <option value="netflix">Netflix</option>
          <option value="hbo">HBO Max</option>
          <option value="disney">Disney +</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FetchAPI/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
