import Ember from 'ember';
import Web3 from 'npm:web3';

let web3,
    web3Connected = false,
    web3Error = false;

export default Ember.Component.extend({
    connected: web3Connected,
    setup: Ember.on('init', function(){

        Ember.run.scheduleOnce('afterRender', this, connect);

        return true;
    }),
});

/**
 * web3 connection.
 * @return {Boolean} Defaults to false, unless coinbase read.
 */
function connect(){

    console.log('CONNECTING...');
    if (typeof web3 !== 'undefined') {
        console.log('reusing web3');
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      try{
          console.log('new web3 connection');
          web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }catch(e){
          web3Error = e.message;
      }
    }

    if(web3.isConnected()) web3Connected = true;
    else web3Connected = false;
    console.log('Address: ', web3.eth.coinbase);

    console.log(web3.net);
    console.log(web3.eth);
}
