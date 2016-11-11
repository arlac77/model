/* jslint node: true, esnext: true */

'use strict';

const rgm = require('registry-mixin');

import Base from './Base';


export default class Relation extends Base {
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
