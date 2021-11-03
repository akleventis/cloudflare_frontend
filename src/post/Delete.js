import React from "react";
// http://127.0.0.1:8787
// https://my-worker.alex-leventis1.workers.dev/posts

class Delete extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = {
          'id': event.target[0].value,
        }
        console.log(JSON.stringify(data));
        fetch(`https://my-worker.alex-leventis1.workers.dev/posts/${data.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
        })
        .then(alert("Post Deleted, refresh in 5-10s to see changes"));
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
            <label className='deletef' htmlFor="delete">Delete Post (id): </label>
            <input id="delete" name="delete" type="text" />
            </div>
            <button>Delete Post</button>
          </form>
        );
      }
}

export default Delete;
