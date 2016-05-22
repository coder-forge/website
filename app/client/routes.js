FlowRouter.route('/', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});
FlowRouter.route('/attend', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "attend"});
  }
});
FlowRouter.route('/announce', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "announce"});
  }
});
FlowRouter.route('/tools', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "tools"});
  }
});
FlowRouter.route('/resources', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "resources"});
  }
});
FlowRouter.route('/competitions', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "competitions"});
  }
});
FlowRouter.route('/forges', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "forges"});
  }
});
FlowRouter.route('/forges/:forge', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "forges"});
  }
});
