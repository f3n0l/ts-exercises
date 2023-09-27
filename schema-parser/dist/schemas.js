"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.UserSchema = void 0;
const t = require("io-ts");
exports.UserSchema = t.type({
    id: t.number,
    username: t.string,
    email: t.string,
});
exports.ProductSchema = t.type({
    id: t.string,
    name: t.string,
    price: t.number,
});
