import app from '../../src/app';

describe('APP Test', () => {
  it('Should start app', () => {
    expect(app.start).not.toThrow();
  });
  it('Should stop app', () => {
    expect(app.stop).not.toThrow();
  });
});