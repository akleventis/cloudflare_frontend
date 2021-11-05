import React from 'react';
import './home.css'

class FetchPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    async componentDidMount() {
        const response = await fetch('https://my-worker.alex-leventis1.workers.dev/posts')
        const res =  await response.json()
        this.setState({
            data: [...this.state.data, ...res],
            isLoading: false,
        })
    }

// this.props.dataToFetch -> all post information

    componentDidUpdate(next_props) {
        const renderData  = this.props.dataToFetch
        if (next_props.dataToFetch !== renderData) {
            if (renderData) {
                const isEmpty = Object.values(renderData[0]).every(x => x === null || x === '');
                if (!isEmpty) {
                    this.setState({data: [...this.state.data, ...renderData]})
                } else {
                    alert("Please fill in data")
                }
            }
        }
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        if (this.state.data.length === 0) {
            return <p>No data</p>;
        }
        return this.state.data.filter((key) => {
            if (key===null) return false
            return true;
        }).map((key) => {
            const [title, username, content, id] = [key.title, key.username, key.content, key.id];
            return (
                <div className='blog-post' key={id}>
                    <h3 className='title'>{title}</h3>
                    <p className='content'>{content}</p>
                    <p className='username'>{username}</p>
                    <p className='id' > post id: {id} </p>
                </div>
            )
        })
    }
}
export default FetchPost;