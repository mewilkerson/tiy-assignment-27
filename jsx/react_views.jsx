

(function(views){

var List = React.createBackboneClass({

    makeItem: function(item, index) {
        return <li key={index}>{item.get("name")}</li>

    },

    render: function() {
        return <ul>{this.props.collection.map(this.makeItem)}</ul>;
    }

});

views.List = List;


})(bugs.views = {});
