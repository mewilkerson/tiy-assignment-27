(function(models){

  var BugModel = Backbone.Model.extend({});

  var BugCollection = Backbone.Collection.extend({

    url: "js/issues.json",

    model: BugModel

  });

models.BugCollection = BugCollection;

})(bugs.models = {});

