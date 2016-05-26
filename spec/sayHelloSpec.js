describe('Greeting', function(){
    it('returns hello', function () {
        var sayHello = require('../src/scripts/sayHello.js');

        var hello = greet('my world');
        // var hello = 'Hello my world';
        expect(hello).toEqual('Hello my world');
    });
});
var greet = function(name){
    return 'Hello ' + name;
};