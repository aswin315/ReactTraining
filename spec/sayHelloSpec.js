describe('Greeting', function(){
    it('returns hello', function () {
        var sayHello = require('../src/scripts/sayHello.js');
        var hello = sayHello.greet('my world');
        expect(hello).toEqual('Hello my world');
    });
});
