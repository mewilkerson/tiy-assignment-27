(function(views){

var List = React.createBackboneClass({

    makeItem: function(item, index) {
        var newProgress = item.get("progress") * 100;

        return <li key={index}>
                    <span>{item.get("name")}</span>
                    <input type="range" value={newProgress} min="0" max="100" />
                </li>   

    },

    render: function() {
        return <ul>{this.props.collection.map(this.makeItem)}</ul>;
    }

});

views.List = List;


})(bugs.views = {});
