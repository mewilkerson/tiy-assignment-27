$(function(){

  var bugCollection = new bugs.models.BugCollection;

  bugCollection.fetch().done(function(data){
    console.log(data);

    var elem = React.createElement(bugs.views.List, {collection: bugCollection});

    React.render(elem, document.body);


  });


});