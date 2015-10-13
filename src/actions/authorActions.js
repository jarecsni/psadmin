/**
 * Created by janos on 08/10/2015.
 */
"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var ActionTypes = require("../constants/actionTypes");

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},
	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions;