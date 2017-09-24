
var Tools = function Tools(){

  var self = this;

  /**
   * Get tools.
   * @return {Object} {tools, tags}
   */
  self.get = function get(){
    return new Promise(function(resolve, reject){

      var tags = {};
      tags['languages'] = {
        text: 'Languages',
        tools: [0],
      };
      tags['ides'] = {
        text: 'IDE\'s',
        tools: [],
      };
      tags['ml'] = {
        text: 'Machine Learning',
        tools: [],
      };
      tags['browsers'] = {
        text: 'Browsers',
        tools: [],
      };
      tags['node'] = {
        text: 'NodeJS',
        tools: [0],
      };
      tags['framework'] = {
        text: 'Framework',
        tools: [],
      };
      tags['tools'] = {
        text: 'Tools',
        tools: [],
      };
      tags['book'] = {
        text: 'Books',
        tools: [],
      };
      tags['web'] = {
        text: 'Web Dev',
        tools: [0],
      };

      resolve({
        data: [
          {name: "NodeJS", icon: "/images/icon-nodejs-100x43.png", link: "https://nodejs.org/en/", text: "Allows JavaScript to be used on the server"},
          {name: "coderscrowd", icon: null, link: "http://coderscrowd.com/", text: "Community of coders, sharing, helping and learning"},
          {name: "kaggle", icon: null, link: "https://www.kaggle.com", text: "Community of data scientists based on learning and sharing through competitions and tutorials."},
          {name: "Atom", icon: null, link: "https://atom.io/", text: "Open source editor, handles nearly all languages. Recommended."},
          {name: "Firefox Developer", icon: "images/icon-firefox-85x84.png", link: "https://www.mozilla.org/en-GB/firefox/developer/", text: "Open source browser build for developers. Includes some interesting tools, but can be buggy at time of writing. Recommended."},
          {name: "Chromium", icon: null, link: "https://www.chromium.org/Home", text: "Open source port of Google Chrome. May be difficult to install on windows. Recommended."},
          {name: "MeteorJS", icon: null, link: "https://www.meteor.com", text: "Framework based on reactive data. Very interesting."},
          {name: "Docker", icon: "images/icon-docker-100x89.png", link: "https://www.docker.com", text: "A must have tool. Allows provisioning and running one OS on another using a technology known as containerisation."},
          {name: "Designing For the Web - free ebook", icon: null, link: "http://www.designingfortheweb.co.uk/", text: "Excellent book for beginners to web development."},
          {name: "Learn to code the full beginners guide", icon: null, link: "http://lifehacker.com/5744113/learn-to-code-the-full-beginners-guide", text: "The name says it all. Series of quick tutorials on the basics of coding."},
          {name: "codecademy", icon: null, link: "http://www.codecademy.com/learn", text: "Probably the best online resource for learning a new language, for beginners and pro's. Highly recommended."},
          {name: "NODESCHOOL", icon: "images/icon-nodeschool.svg", link: "http://nodeschool.io", text: "\"Open source workshops that teach web software skills. Do them on your own or at a workshop nearby\" - nodeschool.io"},
        ],
      tags: tags
      });
    });
  }

  return self;
}

module.exports = new Tools();
