import {sendJSON} from '../../../src/lib/sendJSON';

describe('sendJSON', () => {
  let res;
  beforeEach(() => {
    res = {};
    res.setHeader = jest.fn();
    res.send = jest.fn();
    res.end = jest.fn(); 
  });
  afterEach(() => {
    res = {};
  });
  it('Should have Status Code of 200 as default value', () => {
    sendJSON(res);
    expect(res.statusCode).toBe(200);
  });
  it('Should have Status Code of 200 as default value', () => {
    sendJSON(res, {}, 404);
    expect(res.statusCode).toBe(404);
  });
  it('Should have Status Message of \'OK\'', () => {
    sendJSON(res);
    expect(res.statusMessage).toBe('OK');
  });
  it('Set Header should have been called with \'Content-Type\' and \'application/json\'', () => {
    sendJSON(res);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
  });
  it('Send should have been called with {} as default', () => {
    sendJSON(res);
    expect(res.send).toHaveBeenCalledWith('{}');
  });
  it('Send should have been called with {helloWorld: true}', () => {
    const data = { helloWorld: true };
    sendJSON(res, data);
    expect(res.send).toHaveBeenCalledWith(JSON.stringify(data));
  });
});