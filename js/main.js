$(function(){

  var bugCollection = new bugs.models.BugCollection;

  bugCollection.fetch().done(function(data){
    console.log(data);
  });


});