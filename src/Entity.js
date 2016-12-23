/* jslint node: true, esnext: true */

'use strict';

const rgm = require('registry-mixin');

import Base from './Base';

export default class Entity extends Base {
  constructor(name) {
    super(name);

    rgm.defineRegistryProperties(this, 'relation', {});
  }
}
