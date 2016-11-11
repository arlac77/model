/* jslint node: true, esnext: true */

'use strict';

export default class Base {
  constructor(name) {
    Object.defineProperty(this, 'name', {
      value: name
    });
  }
}
