(function(views){

  var Item = Backbone.View.extend({

    template: JST["list_item"],

    render: function(){
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
        this.$("ul").append(item.render().el);
      });
      return this;
    }

  })
views.List = List;
})(bugs.backboneViews = {});