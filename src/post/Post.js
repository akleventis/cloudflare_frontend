import React from "react";
import Delete from './Delete'
import "./post.css";
// http://127.0.0.1:8787
// https://my-worker.alex-leventis1.workers.dev/posts

class Post extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = {
          'title': event.target[0].value,
          'username': event.target[1].value,
          'content': event.target[2].value
        }
        console.log(JSON.stringify(data));
        fetch('https://my-worker.alex-leventis1.workers.dev/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        }).then(alert('Post was sent! Refresh the page in 10-15 seconds for post to show up'));
      }
    
      render() {
        return (
          <div>
          <form className='post' onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="title">Enter Title: </label>
            <input id="title" name="title" type="text" />
            </div>
            <div>
            <label htmlFor="username">Username: </label>
            <input id="username" name="username" type="text" />
            </div>
            <div>
            <label htmlFor="content">Content: </label>
            <textarea rows='10' id="content" name="content" type="text" />
            </div>
            <button>Send data!</button>
          </form>
          < Delete />
          </div>
        );
      }
}

export default Post;
