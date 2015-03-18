(function(views){

  var Item = Backbone.View.extend({

    template: JST["list_item"],

    tagName: "li",

    render: function(){
      var width = this.model.get("progress");
      width = width * 100;
      width = Math.round(width);
      width = width + "%";
      this.model.set({width: width});
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

  var List = Backbone.View.extend({

    template: JST["list"],

    render: function(){
      this.$el.html(this.template());
      this.collection.each(function(model){
        var item = new Item({model: model});
        this.$(".backbone-view ul").append(item.render().el);
      });
      return this;
    }

  })
views.List = List;
})(bugs.backboneViews = {});