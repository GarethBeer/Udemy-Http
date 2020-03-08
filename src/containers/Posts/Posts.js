import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import "./Posts.css";

class Posts extends Component {
	state = {
		posts: []
	};
	componentDidMount() {
		console.log(this.props);
		axios
			.get("posts")
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: "Gareth"
					};
				});
				this.setState({
					posts: updatedPosts
				});
			})
			.catch(error => console.log(error));
	}

	clickPostHandler = id => {
		this.props.history.push({ pathname: "/" + id });
	};
	deletePostHandler = () => {
		axios
			.delete(`/posts/${this.props.id}`)
			.then(response => console.log(response));
	};

	render() {
		let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					/* <Link to={`/${post.id}`} key={post.id}> */
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.clickPostHandler(post.id)}
					/>
					/* </Link> */
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route path="/:id" exact component={FullPost} />
			</div>
		);
	}
}

export default Posts;
