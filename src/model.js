import { defineRegistryProperties } from 'registry-mixin';

import Base from './base';
import Entity from './entity';
import Relation from './relation';

class Model extends Base {
  constructor(name) {
    super(name);

    defineRegistryProperties(this, 'entity', {
      pluralName: 'entities'
    });
  }
}

export { Base, Entity, Relation, Model };
