this["JST"] = this["JST"] || {};
this["JST"]["list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n  \n</ul>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["list_item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n  <span>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"range\">\n      <input type=\"range\" value=\""
    + alias3(((helper = (helper = helpers.progress || (depth0 != null ? depth0.progress : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"progress","hash":{},"data":data}) : helper)))
    + "\">\n    </span>\n\n</li>";
},"useData":true});