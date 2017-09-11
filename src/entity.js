const rgm = require('registry-mixin');

import Base from './base';

export default class Entity extends Base {
  constructor(name) {
    super(name);

    rgm.defineRegistryProperties(this, 'relation', {});
  }
}
