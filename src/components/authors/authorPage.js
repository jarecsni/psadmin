/**
 * Created by janos on 03/10/2015.
 */
"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');

var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
	componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},
    _onChange: function() {
		this.setState({authors: AuthorStore.getAllAuthors()});
	},
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
				<Link to="addAuthor" className="btn btn-default"><span className="fa fa-plus-square"></span>Add Author</Link>
            </div>
        );
    }
});

module.exports = AuthorPage;