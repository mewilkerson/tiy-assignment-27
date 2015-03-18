(function(views){

var List = React.createBackboneClass({

    makeItem: function(item, index) {
        var newProgress = item.get("progress") * 100;

        return React.createElement("li", {key: index}, 
                    React.createElement("span", null, item.get("name")), 
                    React.createElement("input", {type: "range", value: newProgress, min: "0", max: "100"})
                )   

    },

    render: function() {
        return React.createElement("ul", null, this.props.collection.map(this.makeItem));
    }

});

views.List = List;


})(bugs.views = {});
