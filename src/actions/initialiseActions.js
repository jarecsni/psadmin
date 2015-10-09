/**
 * Created by janos on 09/10/2015.
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var initialiseActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALISE,
			initialData: {
				// why not using the Store instead?
				authors: AuthorApi.getAllAuthors()
			}
		});
	}
};

module.exports = initialiseActions;