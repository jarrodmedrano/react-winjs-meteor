
ListView = React.createClass({

    itemRenderer: ReactWinJS.reactRenderer(function (item) {
        return <div>{item.data.title}</div>;
    }),
    getInitialState() {
        return {
            list: new WinJS.Binding.List([
                { title: "Apple" },
                { title: "Banana" },
                { title: "Grape" },
                { title: "Lemon" },
                { title: "Mint" },
                { title: "Orange" },
                { title: "Pineapple" },
                { title: "Strawberry"}
            ]),
            layout: { type: WinJS.UI.ListLayout }
        };
    },
    render() {
        return (
            <ReactWinJS.ListView
                className="listViewExample win-selectionstylefilled win-type-body"
                style={{height: "200px"}}
                itemDataSource={this.state.list.dataSource}
                itemTemplate={this.itemRenderer}
                layout={this.state.layout}
                selectionMode="single"
                tapBehavior="directSelect" />
        );
    }
});