import * as t from 'io-ts';
import * as E from 'fp-ts/Either';

export function validateAndParseJSON<T>(json: string, schema: t.Type<T>): T | null {
  const parsedData = JSON.parse(json);
  const validation = schema.decode(parsedData);

  if (E.isRight(validation)) {
    return validation.right;
  } else {
    return null;
  }
}
