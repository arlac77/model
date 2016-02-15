/* jslint node: true, esnext: true */

"use strict";


class Base {
  constructor(name) {
    Object.defineProperty(this, 'name', {
      value: name
    });
  }
}


class Model extends Base {
  constructor(name) {
    super(name);

    let entities = {};
    Object.defineProperty(this, 'entities', {
      value: entities
    });
  }
}

class Entity extends Base {
  constructor(name) {
    super(name);

    let relations = {};
    Object.defineProperty(this, 'relations', {
      value: relations
    });
  }

}

class Relation extends Base {
  constructor(name, src, dst) {
    super(name);

    Object.defineProperty(this, 'src', {
      value: src
    });

    Object.defineProperty(this, 'dst', {
      value: dst
    });
  }

}
