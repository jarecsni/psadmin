/**
 * Created by janos on 06/10/2015.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorAction = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm("Leave without saving?")) {
				transition.abort();
			}
		}
	},
	getInitialState: function() {
		return {
			author: {
				id: "",
				firstName: "",
				lastName: ""
			},
			errors: {},
			dirty: false
		};
	},
	componentWillMount: function() {
		// calling set state will not cause re-render
		var authorId = this.props.params.id;
		if (authorId) {
			this.setState({author: AuthorStore.getAuthorById(authorId)});
		}
	},
	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author, dirty: true});
	},
	authorFormIsValid: function() {
		var valid = true;
		this.state.errors = {};
		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "First name must be at least 3 characters";
			valid = false;
		}
		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = "Last name must be at least 3 characters";
			valid = false;
		}
		this.setState({errors: this.state.errors});
		return valid;
	},
	saveAuthor: function(event) {
		event.preventDefault();
		if (!this.authorFormIsValid()) {
			return;
		}
		AuthorAction.createAuthor(this.state.author);
		toastr.success("Author saved.");
		this.setState({dirty: false});
		this.transitionTo("authors");
	},
	render: function() {
		return (
			<div>
				<AuthorForm
					author={this.state.author}
					onChange={this.setAuthorState}
					onSave={this.saveAuthor}
					errors={this.state.errors}
					/>
			</div>
		);
	}
});
module.exports = ManageAuthorPage;