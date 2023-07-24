import {GraphQLNonNull, GraphQLID, GraphQLInterfaceType} from 'graphql';
import {toGlobalId, nodeDefinitions as _nodeDefinitions} from 'graphql-relay';

export function globalIdField(typeName) {
  return {
    description: 'The ID of an object',
    type: new GraphQLNonNull(GraphQLID),
    resolve: function resolve(obj) {
      return toGlobalId(typeName, obj.idfield);
    },
  };
}

export function nodeDefinitions(idFetcher, typeResolver) {
  const nodeInterface = new GraphQLInterfaceType({
    name: 'Node',
    description: 'An object with an ID',
    fields: function fields() {
      return {
        idfield: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the object.',
        },
      };
    },
    resolveType: typeResolver,
  });

  const {nodeField} = _nodeDefinitions(idFetcher, typeResolver);
  nodeField.type = nodeInterface;

  return {
    nodeField,
    nodeInterface,
  };
}
