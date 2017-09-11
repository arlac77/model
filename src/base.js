export default class Base {
  constructor(name) {
    Object.defineProperty(this, 'name', {
      value: name
    });
  }
}
