import { UserSchema, ProductSchema } from './schemas';
import { validateAndParseJSON } from './parser';

const userJSON = '{"id": 1, "username": "someName", "email": "test@test.com"}';
const productJSON = '{"id": "123", "name": "product", "price": 30.20}';

const user = validateAndParseJSON(userJSON, UserSchema);
const product = validateAndParseJSON(productJSON, ProductSchema);

console.log(user);
console.log(product);
