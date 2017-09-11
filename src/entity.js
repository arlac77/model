import { defineRegistryProperties } from 'registry-mixin';
import Base from './base';

export default class Entity extends Base {
  constructor(name) {
    super(name);

    defineRegistryProperties(this, 'relation', {});
  }
}
