import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

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
FlowRouter.route('/logout', {
  action: ()=>{
    Meteor.logout(()=>{
      BlazeLayout.redirect('/login');
    });
  }
});

dashboard = FlowRouter.group({
  'name': 'dashboard',
  'triggersEnter': [checkLoggedIn],
  'prefix': '/dashboard'
});
dashboard.route('/', {
  action: ()=>{
    BlazeLayout.render('adminLayout', {content: 'adminHome'});
  }
});
dashboard.route('/tools', {
  action: ()=>{
    BlazeLayout.render('adminLayout', {content: 'adminTools'});
  }
});
dashboard.route('/users', {
  action: ()=>{
    BlazeLayout.render('adminLayout', {content: 'adminUsers'});
  }
})

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

function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/login');
  }
}
