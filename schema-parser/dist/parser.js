"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndParseJSON = void 0;
const E = require("fp-ts/Either");
function validateAndParseJSON(json, schema) {
    const parsedData = JSON.parse(json);
    const validation = schema.decode(parsedData);
    if (E.isRight(validation)) {
        return validation.right;
    }
    else {
        return null;
    }
}
exports.validateAndParseJSON = validateAndParseJSON;
