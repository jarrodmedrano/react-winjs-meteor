const {Link} = ReactRouter;

Welcome = React.createClass({
    render() {
        return (
            <div>
                <div className="type-h3">
                    WinJS ListView
                </div>
                <ListView />
                <div className="btn-group">
                    <Link to="/hello"><button className="btn btn-primary" href="#">React Router Transition</button></Link>
                </div>
           </div>
        );
    }
});