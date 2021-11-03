import FetchPosts from './home/FetchPost';
import Header from './header/Header'
import Post from './post/Post';
import './App.css';

function App() {
  return (
    <div className='container'>
    < Header />

    <div className='body-container'>
    < Post />
      <div className="App">
        <FetchPosts />
      </div>
    </div>
    </div>
  );
}

export default App;
