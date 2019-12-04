import { Hello } from './hello';

describe('Hello', () => {
  it('should be defined', () => {
    expect(new Hello()).toBeDefined();
  });
});
