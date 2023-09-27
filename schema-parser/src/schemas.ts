import * as t from 'io-ts';

export const UserSchema = t.type({
  id: t.number,
  username: t.string,
  email: t.string,
});

export const ProductSchema = t.type({
  id: t.string,
  name: t.string,
  price: t.number,
});
