/**
 * Created by janos on 03/10/2015.
 */
"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({
                authors: AuthorApi.getAllAuthors()
            });
        }
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