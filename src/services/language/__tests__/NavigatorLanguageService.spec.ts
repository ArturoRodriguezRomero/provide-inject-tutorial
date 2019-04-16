import { NavigatorLanguageService } from '../NavigatorLanguageService';

describe('NavigatorLanguageService', () => {
  it('should return the navigator current language', () => {
    const expected = 'en-US';
    const service = new NavigatorLanguageService();

    const result = service.getLanguage();

    expect(result).toEqual(expected);
  });
});
