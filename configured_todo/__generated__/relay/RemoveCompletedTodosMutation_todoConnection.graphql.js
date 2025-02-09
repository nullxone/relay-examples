/**
 * @generated SignedSource<<5a81177e645c5304481503295555beeb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveCompletedTodosMutation_todoConnection$fragmentType: FragmentType;
export type RemoveCompletedTodosMutation_todoConnection$data = {|
  +__id: string,
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +complete: boolean,
      +idfield: string,
    |},
  |}>,
  +$fragmentType: RemoveCompletedTodosMutation_todoConnection$fragmentType,
|};
export type RemoveCompletedTodosMutation_todoConnection$key = {
  +$data?: RemoveCompletedTodosMutation_todoConnection$data,
  +$fragmentSpreads: RemoveCompletedTodosMutation_todoConnection$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveCompletedTodosMutation_todoConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
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
              "name": "idfield",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "complete",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "TodoConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "ae49aac3021314a7f144b8f6d28ecdb9";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveCompletedTodosMutation_todoConnection$fragmentType,
  RemoveCompletedTodosMutation_todoConnection$data,
>*/);
