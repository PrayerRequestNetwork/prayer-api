
export const mockQuery = jest.fn();

class Client {
  constructor() {
    this.connect = jest.fn();
    this.on = jest.fn();
    this.query = mockQuery;
  }
}

export default {
  Client,
};