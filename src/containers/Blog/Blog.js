import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import { Switch, Route, Link } from "react-router-dom";
import "./Blog.css";

import classes from "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/new-post">New Post</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/" exact component={Posts} />
					<Route path="/new-post" exact component={NewPost} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
