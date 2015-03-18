(function(views){

  var ListItem = Backbone.View.extend({

    template: JST["list_item"],

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})(bugs.backboneViews = {});