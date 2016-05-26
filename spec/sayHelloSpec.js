import sayHello from '../src/scripts/sayHello';
describe('Greeting', function(){
    it('returns hello', function () {
        var hello = sayHello.greet('my world');
        expect(hello).toEqual('Hello my world');
    });
});
