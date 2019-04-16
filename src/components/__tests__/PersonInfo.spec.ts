import { shallowMount } from '@vue/test-utils';
import PersonInfo from '../PersonInfo.vue';
import { Person } from '@/models/Person';

describe('PersonInfo', () => {
  it("should render the person's name", () => {
    const given: Person = new Person('tony', 45);
    const expected = { name: 'tony', age: 45 };

    const wrapper = shallowMount(PersonInfo, {
      provide: {
        person: given
      }
    });

    expect(wrapper.html().includes(expected.name)).toBe(true);
  });
  it("should render the person's age", () => {
    const given: Person = new Person('tony', 45);
    const expected = { name: 'tony', age: 45 };

    const wrapper = shallowMount(PersonInfo, {
      provide: {
        person: given
      }
    });

    expect(wrapper.html().includes(expected.age.toString())).toBe(true);
  });
});
