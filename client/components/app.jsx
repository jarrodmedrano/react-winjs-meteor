// App component - represents the whole app
const TransitionGroup = React.addons.CSSTransitionGroup;
const {Link} = ReactRouter;

App = React.createClass({
    render() {
        return (
            <div className="jumbotron theme-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
            <TransitionGroup className="main-container" component="div" transitionName="page-transition"
                             transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                    })}
            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});