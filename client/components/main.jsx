const {Router, Route, IndexRoute, Link} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {

    ReactDOM.render((
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute  component={Welcome} />
                <Route path="/hello" component={Hello} />
            </Route>
        </Router>
    ), document.getElementById('app'));
});