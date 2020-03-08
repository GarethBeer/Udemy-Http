import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import { Switch, Route, NavLink } from "react-router-dom";
import "./Blog.css";
import FullPost from "../FullPost/FullPost";

class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/new-post">New Post</NavLink>
							</li>
							<li>
								<NavLink
									to="/"
									activeClassName="my-active"
									activeStyle={{
										color: "red"
									}}
								>
									Posts
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/new-post" exact component={NewPost} />
					<Route path="/" component={Posts} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
