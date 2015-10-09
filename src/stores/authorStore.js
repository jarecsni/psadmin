/**
 * Created by janos on 08/10/2015.
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var _ = require('lodash');
var CHANGE_EVENT = "change";

var authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	getAllAuthors: function() {
		return authors;
	},
	getAuthorById: function(id) {
		return _.find(authors, {id: id});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.CREATE_AUTHOR:
			authors.push(action.author);
			AuthorStore.emitChange();
			break;
		case ActionTypes.INITIALISE:
			authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		default:
			// nothing to do
	}
});

module.exports = AuthorStore;