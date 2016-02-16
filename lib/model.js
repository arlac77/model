/* jslint node: true, esnext: true */

"use strict";

const rgm = require('registry-mixin');

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

    rgm.defineRegistryProperties(this, 'entity', {
      pluralName: 'entities'
    });
  }
}

class Entity extends Base {
  constructor(name) {
    super(name);

    rgm.defineRegistryProperties(this, 'relation', {});
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

    src.registerRelation(this);
    dst.registerRelation(this);
  }
}

exports.Model = Model;
exports.Entity = Entity;
exports.Relation = Relation;
