const hello = require('./hello');

describe('hello test', () => {
    test('works', () => {
        expect(hello.hello()).toEqual('hello world');
    })
})