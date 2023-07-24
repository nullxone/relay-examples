/**
 * @generated SignedSource<<78958c4908308b00d53e3fef8a6c9693>>
 * @relayHash f173573c8bbac3d3b850b0d88c23e4a2
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID f173573c8bbac3d3b850b0d88c23e4a2

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type RenameTodoInput = {|
  clientMutationId?: ?string,
  id: string,
  text: string,
|};
export type RenameTodoMutation$variables = {|
  input: RenameTodoInput,
|};
export type RenameTodoMutation$data = {|
  +renameTodo: ?{|
    +todo: {|
      +idfield: string,
      +text: string,
    |},
  |},
|};
export type RenameTodoMutation = {|
  response: RenameTodoMutation$data,
  variables: RenameTodoMutation$variables,
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RenameTodoPayload",
    "kind": "LinkedField",
    "name": "renameTodo",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "idfield",
            "storageKey": null
          },
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "f173573c8bbac3d3b850b0d88c23e4a2",
    "metadata": {},
    "name": "RenameTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node/*: any*/).hash = "0263569bde1b582abc0188b2eb16532b";

module.exports = ((node/*: any*/)/*: Mutation<
  RenameTodoMutation$variables,
  RenameTodoMutation$data,
>*/);
