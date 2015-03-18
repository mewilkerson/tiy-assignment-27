$(function(){

  var bugCollection = new bugs.models.BugCollection;

  bugCollection.fetch().done(function(data){
    console.log(data);

    var elem = React.createElement(bugs.views.List, {collection: bugCollection});

    React.render(elem, document.querySelector(".react-view"));

    var backboneView = new bugs.backboneViews.List({
      collection: bugCollection,
      el: $(".backbone-view")

    });

    backboneView.render();

  });


});