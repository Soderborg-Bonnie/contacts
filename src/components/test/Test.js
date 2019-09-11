import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '', 
    body: ''
  }
  //various life cycles, good article on Medium about them
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  }

	//componentWillMount is deprecated, use UNSAFE_ before it
	// componentWillMount() {
	// 	console.log('component will mount');
	// }

	//using the next 2 on the contacts page will actually show something
	// componentDidUpdate() {
	// 	console.log('component did update');
	// }

	//componentWillUpdate is deprecated use UNSAFE_ before it
	// componentWillUpdate() {
	// 	console.log('component will update');
	// }

	//usually used with redux, turn piece of state into component prop
	//componentWillReceiveProps is deprecated use getDerivedStateFromProps
	// componentWillReceiveProps(nextProps, nextState) {
	// 	console.log('will receive props');
	// }

  // static getDerviedStateFromProps(nextProps, prevState) {
  //   return null
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('snapshot');
  // }


  render() {
    const { title, body } = this.state;
		return (
			<div>
        <h1>{title}</h1>
        <p>{body}</p>
			</div>
		);
	}
}

export default Test