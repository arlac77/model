import test from 'ava';

import { Model, Entity, Relation } from '../src/model';

test('model', async t => {
  const m = new Model('myModel');
  await m.registerEntity(new Entity('e1'));
  await m.registerEntity(new Entity('e2'));

  new Relation('e1_e2', m.entities.e1, m.entities.e2);

  t.is(m.name, 'myModel');
  t.is(m.entities.e1.name, 'e1');
});
