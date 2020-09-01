import isISO8601 from 'validator/lib/isISO8601';

export const parseISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};

export const serializeISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};

export const parseLiteralISO8601 = (ast: any) => {
  if (isISO8601(ast.value)) {
    return ast.value;
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
};
