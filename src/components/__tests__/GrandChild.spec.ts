import { shallowMount } from '@vue/test-utils';
import GrandChild from '../GrandChild.vue';
import { LanguageService } from '@/services/language/LanguageService';
import { DateService } from '@/services/date/DateService';

class LanguageServiceStub implements LanguageService {
  constructor(private readonly expected: string) {}
  getLanguage(): string {
    return this.expected;
  }
}

class DateServiceStub implements DateService {
  constructor(private readonly expected: Date) {}
  getDate(): Date {
    return this.expected;
  }
}

describe('GrandChild', () => {
  it('should render the language', () => {
    const given = 'EXPECTED LANGUAGE';
    const expected = 'EXPECTED LANGUAGE';

    const wrapper = shallowMount(GrandChild, {
      provide: {
        languageService: new LanguageServiceStub(given),
        dateService: new DateServiceStub(new Date())
      }
    });

    expect(wrapper.html().includes(expected)).toBe(true);
  });

  it('should render the date', () => {
    const given = new Date('10-10-2010');
    const expected = 'Sun Oct 10 2010';

    const wrapper = shallowMount(GrandChild, {
      provide: {
        languageService: new LanguageServiceStub(''),
        dateService: new DateServiceStub(given)
      }
    });

    expect(wrapper.html().includes(expected)).toBe(true);
  });
});
