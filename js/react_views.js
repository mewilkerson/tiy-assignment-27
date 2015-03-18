(function(views){

var List = React.createBackboneClass({

    makeItem: function(item, index) {
        var newProgress = item.get("progress") * 100;
        newProgress = Math.round(newProgress);
        var newProgressPercent = newProgress + "%";

        return React.createElement("li", {key: index}, 
                    React.createElement("span", null, item.get("name")), 
                    React.createElement("span", {className: "range"}, 
                        React.createElement("input", {type: "range", value: newProgress, min: "0", max: "100"}), 
                        newProgressPercent
                    )
                )   

    },

    render: function() {
        return React.createElement("ul", null, this.props.collection.map(this.makeItem));
    }

});

views.List = List;


})(bugs.views = {});
