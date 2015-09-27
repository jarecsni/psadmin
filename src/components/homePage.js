/**
 * Created by janos on 27/09/15.
 */
'use strict';

var React = require('react');

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>React - React Router - Flux</p>
            </div>
        );
    }
});

module.exports = HomePage;