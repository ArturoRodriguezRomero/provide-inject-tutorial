import { BrowserDateService } from '../BrowserDateService';

describe('BrowserDateService', () => {
  it('should return current date', () => {
    const expected = new Date();
    const service = new BrowserDateService();

    const result = service.getDate();

    expect(result).toEqual(expected);
  });
});
