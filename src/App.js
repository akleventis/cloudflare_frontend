import FetchPost from './home/FetchPost';
import Header from './header/Header'
import Post from './post/Post';
import './App.css';
import React from "react";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  getData = input => {
    this.setState({data: [input]})
  }

  render() {
    return (
      <div className='container'>
      < Header />
      <div className='body-container'>
      < Post getData={this.getData}/>
        <div className="App">
          <FetchPost dataToFetch={this.state.data}/>
        </div>
      </div>
      </div>
    );
  }

}

export default App;
