/**
 * @generated SignedSource<<5e954c227502a657fb168d564d84650d>>
 * @relayHash bb7ab7045c40ffa26202be1f66c97c84
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID bb7ab7045c40ffa26202be1f66c97c84

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveTodoInput = {|
  clientMutationId?: ?string,
  id: string,
  userId: string,
|};
export type RemoveTodoMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: RemoveTodoInput,
|};
export type RemoveTodoMutation$data = {|
  +removeTodo: ?{|
    +deletedTodoId: string,
    +user: {|
      +completedCount: number,
      +totalCount: number,
    |},
  |},
|};
export type RemoveTodoMutation = {|
  response: RemoveTodoMutation$data,
  variables: RemoveTodoMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedTodoId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completedCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTodoId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "idfield",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "bb7ab7045c40ffa26202be1f66c97c84",
    "metadata": {},
    "name": "RemoveTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "f1e78c738dc1aa9c26df49783daee003";

module.exports = ((node/*: any*/)/*: Mutation<
  RemoveTodoMutation$variables,
  RemoveTodoMutation$data,
>*/);
