this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Chat</h1>\n<section class=\"messages-container\"></section>\n<form class=\"chat-form\">\n  <input/>\n  <button>Send</button>\n</form>\n";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"login-form\">\n  <input class=\"login-form-username\" type=\"text\" placeholder=\"Username\">\n  <input type=\"submit\" value=\"Log In\">\n</form>\n";
},"useData":true});
this["JST"]["messages"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <li>"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});