const {Link} = ReactRouter;

Hello = React.createClass({
    render() {
        return (
            <div>
                <div className="type-h3">
                    Hello
                </div>
                <div className="btn-group">
                    <Link to="/"><button className="btn btn-primary" href="#">Back</button></Link>
                </div>
            </div>
        );
    }
});