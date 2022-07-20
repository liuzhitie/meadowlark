const handlers = require('../handlers');

test('home page renders', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.home(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('home');
    // this is a test !!! 2022.07.20 20:49:01
});