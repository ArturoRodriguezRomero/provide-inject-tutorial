import { LanguageService } from './LanguageService';

export class NavigatorLanguageService implements LanguageService {
  getLanguage(): string {
    return navigator.language;
  }
}
