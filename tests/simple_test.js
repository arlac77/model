/* global describe, it, xit, before, after */
/* jslint node: true, esnext: true */
'use strict';

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const model = require('../dist/model.js');

describe('model', () => {
  const m = new model.Model('myModel');
  m.registerEntity(new model.Entity('e1'));
  m.registerEntity(new model.Entity('e2')).then(
    () => {
      new model.Relation('e1_e2', m.entities.e1, m.entities.e2);
    }
  );

  it('has name', () => assert.equal(m.name, 'myModel'));
  it('has entity', () => assert.equal(m.entities.e1.name, 'e1'));
});
