import { GraphQLScalarType } from 'graphql';
import { parseISO8601, parseLiteralISO8601, serializeISO8601 } from '../../utils';

export const TDateTime = new GraphQLScalarType({
  name: 'TDateTime',
  description: 'An ISO-8601 encoded UTC date string.',
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601,
});
