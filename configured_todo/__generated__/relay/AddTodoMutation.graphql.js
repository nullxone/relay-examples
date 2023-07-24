/**
 * @generated SignedSource<<fc69886373c04300848c6de9162fa9e9>>
 * @relayHash ad84b42b8e4f785b4f4a6b587a383b57
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID ad84b42b8e4f785b4f4a6b587a383b57

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddTodoInput = {|
  clientMutationId?: ?string,
  text: string,
  userId: string,
|};
export type AddTodoMutation$variables = {|
  connections: $ReadOnlyArray<string>,
  input: AddTodoInput,
|};
export type AddTodoMutation$data = {|
  +addTodo: ?{|
    +todoEdge: {|
      +node: ?{|
        +complete: boolean,
        +idfield: string,
        +text: string,
      |},
    |},
    +user: {|
      +idfield: string,
      +totalCount: number,
    |},
  |},
|};
export type AddTodoMutation = {|
  response: AddTodoMutation$data,
  variables: AddTodoMutation$variables,
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
  "name": "idfield",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TodoEdge",
  "kind": "LinkedField",
  "name": "todoEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "complete",
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "AddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddTodoPayload",
        "kind": "LinkedField",
        "name": "addTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "todoEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "ad84b42b8e4f785b4f4a6b587a383b57",
    "metadata": {},
    "name": "AddTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "87af4e53407442c799d270001caa28eb";

module.exports = ((node/*: any*/)/*: Mutation<
  AddTodoMutation$variables,
  AddTodoMutation$data,
>*/);
