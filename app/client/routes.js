FlowRouter.route('/', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "blogHome"});
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

routerForge = FlowRouter.group('/forges', {
  prefix: '/forges',
  name: 'forges'
});
routerForge.route('/', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "forges"});
  }
});
routerForge.route('/:forge', {
  action: ()=>{
    BlazeLayout.render("mainLayout", {content: "forges/:forge"});
  }
})
