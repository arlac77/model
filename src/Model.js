/* jslint node: true, esnext: true */

'use strict';

const rgm = require('registry-mixin');

import Base from './Base';
import Entity from './Entity';
import Relation from './Relation';

class Model extends Base {
  constructor(name) {
    super(name);

    rgm.defineRegistryProperties(this, 'entity', {
      pluralName: 'entities'
    });
  }
}


export {
  Base,
  Entity,
  Relation,
  Model
};
