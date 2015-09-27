/**
 * Created by janos on 26/09/15.
 */
$ = jQuery = require('jquery');
var React = require('react');
var HomePage = require('./components/homePage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {
    'use strict';
    var App = React.createClass({
        render: function() {
            var Child;

            switch(this.props.route) {
                case 'about': Child = AboutPage; break;
                default: Child = HomePage;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route}/>, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();


})(window);