import errorMiddleware from '../../../src/middleware/error';

describe('Error Middleware', () => {
  const res = {
    write: jest.fn(),
    end: jest.fn(),
  };
  it('Should render defaults', () => {
    errorMiddleware('Error Thrown', {}, res, null);
    expect(res.statusCode).toBe(500);
    expect(res.statusMessage).toBe('Server Error');
    expect(res.write).toHaveBeenCalledWith(JSON.stringify({error: 'Error Thrown'}));
  });
  it('Should send err.status if given', () => {
    const error = {
      status: 404,
    };
    errorMiddleware(error, {}, res, null);
    expect(res.statusCode).toBe(404);
  });
  it('Should send err.message if given', () => {
    const error = {
      statusMessage: 'Error Thrown',
    };
    errorMiddleware(error, {}, res, null);
    expect(res.statusMessage).toBe('Error Thrown');
  });
  it('Should send err.message if given', () => {
    const error = {
      message: 'Error Thrown',
    };
    errorMiddleware(error, {}, res, null);
    expect(res.write).toHaveBeenCalledWith(JSON.stringify({ error: 'Error Thrown' }));
  });
});