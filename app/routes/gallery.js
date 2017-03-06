import Ember from 'ember';

export default Ember.Route.extend({

    images(){
        return[
            {
                thumb:"https://www.dropbox.com/s/9bvedjem4luwfng/20161005_201003.jpg?dl=0",
                src:"https://www.dropbox.com/s/9bvedjem4luwfng/20161005_201003.jpg?dl=0",
                title: "anything for now"
            }
        ];
    }
});
