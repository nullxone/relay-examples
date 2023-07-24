/**
 * @generated SignedSource<<2e5d54f0e250b6f34c6b9426e8888e95>>
 * @relayHash e3b1e912aca370f7dad7340ff14c5b45
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID e3b1e912aca370f7dad7340ff14c5b45

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  clientMutationId?: ?string,
  complete: boolean,
  id: string,
  userId: string,
|};
export type ChangeTodoStatusMutation$variables = {|
  input: ChangeTodoStatusInput,
|};
export type ChangeTodoStatusMutation$data = {|
  +changeTodoStatus: ?{|
    +todo: {|
      +complete: boolean,
      +idfield: string,
    |},
    +user: {|
      +completedCount: number,
      +idfield: string,
    |},
  |},
|};
export type ChangeTodoStatusMutation = {|
  response: ChangeTodoStatusMutation$data,
  variables: ChangeTodoStatusMutation$variables,
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
    "concreteType": "ChangeTodoStatusPayload",
    "kind": "LinkedField",
    "name": "changeTodoStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
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
    "name": "ChangeTodoStatusMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": "e3b1e912aca370f7dad7340ff14c5b45",
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "e7f3787685b0dffe42dbb19b08cc46c4";

module.exports = ((node/*: any*/)/*: Mutation<
  ChangeTodoStatusMutation$variables,
  ChangeTodoStatusMutation$data,
>*/);
