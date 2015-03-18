

(function(views){

var List = React.createBackboneClass({

    makeItem: function(item, index) {
        return React.createElement("li", {key: index}, item.get("name"))

    },

    render: function() {
        return React.createElement("ul", null, this.props.collection.map(this.makeItem));
    }

});

views.List = List;


})(bugs.views = {});
