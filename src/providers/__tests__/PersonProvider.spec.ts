import { shallowMount } from '@vue/test-utils';
import PersonProvider from '../PersonProvider.vue';
import { Person } from '@/models/Person';

describe('PersonProvider', () => {
  it("should change the person's name with the input", () => {
    const given = 'Captain';
    const expected = { name: 'Captain' };
    const wrapper = shallowMount(PersonProvider);
    const nameInput = wrapper.find("input[type='text']");

    nameInput.setValue(given);
    const result: Person = (wrapper.vm as any).person;

    expect(result.name).toEqual(expected.name);
  });

  it("should change the person's age with the input", () => {
    const given = 21;
    const expected = { age: 21 };
    const wrapper = shallowMount(PersonProvider);
    const nameInput = wrapper.find("input[type='number']");

    nameInput.setValue(given);
    const result: Person = (wrapper.vm as any).person;

    expect(result.age).toEqual(expected.age.toString());
  });
});
