describe('Greeting', function(){
    it('returns hello', function () {
        var sayHello = require('../src/sayHello')
        var hello = sayHello.greet('my world');
        expect(hello).toEqual('Hello my world');
    })
})