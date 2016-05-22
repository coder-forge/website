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

dashboard = FlowRouter.group({
  'name': 'dashboard',
  'prefix': '/dashboard'
});
dashboard.route('/', {
  action: ()=>{
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    BlazeLayout.render('adminLayout', {content: "adminHome"});
  }
});

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'mainLayout',
  layoutTemplate: 'mainLayout',
  layoutRegions: {
    content: 'login',
    nav: 'customNav',
    footer: 'customFooter'
  },
  contentRegion: 'login'
});
