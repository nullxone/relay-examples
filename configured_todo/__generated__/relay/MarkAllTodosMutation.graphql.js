/**
 * @generated SignedSource<<7e114e89940f94df36a3a3cd05f594ba>>
 * @relayHash 3dede95e67a1b198dc32e196549268df
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 3dede95e67a1b198dc32e196549268df

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type MarkAllTodosInput = {|
  clientMutationId?: ?string,
  complete: boolean,
  userId: string,
|};
export type MarkAllTodosMutation$variables = {|
  input: MarkAllTodosInput,
|};
export type MarkAllTodosMutation$data = {|
  +markAllTodos: ?{|
    +changedTodos: ?$ReadOnlyArray<{|
      +complete: boolean,
      +idfield: string,
    |}>,
    +user: {|
      +completedCount: number,
      +idfield: string,
    |},
  |},
|};
export type MarkAllTodosMutation = {|
  response: MarkAllTodosMutation$data,
  variables: MarkAllTodosMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "idfield",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkAllTodosPayload",
    "kind": "LinkedField",
    "name": "markAllTodos",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "changedTodos",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "complete",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completedCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarkAllTodosMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "3dede95e67a1b198dc32e196549268df",
    "metadata": {},
    "name": "MarkAllTodosMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "33df7ab8d7398678be94872c83fa1b46";

module.exports = ((node/*: any*/)/*: Mutation<
  MarkAllTodosMutation$variables,
  MarkAllTodosMutation$data,
>*/);
