import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.header.events({

  // mobile menu button, toggle sidebar
  'click #menu-toggle': () => {
    $("#wrapper").toggleClass("toggled");
  }
});
