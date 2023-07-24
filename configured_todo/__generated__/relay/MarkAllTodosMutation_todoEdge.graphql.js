/**
 * @generated SignedSource<<fb485f5ec5e394d17e839cd3862fe5d1>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_todoEdge$fragmentType: FragmentType;
export type MarkAllTodosMutation_todoEdge$data = $ReadOnlyArray<{|
  +node: ?{|
    +idfield: string,
  |},
  +$fragmentType: MarkAllTodosMutation_todoEdge$fragmentType,
|}>;
export type MarkAllTodosMutation_todoEdge$key = $ReadOnlyArray<{
  +$data?: MarkAllTodosMutation_todoEdge$data,
  +$fragmentSpreads: MarkAllTodosMutation_todoEdge$fragmentType,
  ...
}>;
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "MarkAllTodosMutation_todoEdge",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TodoEdge",
  "abstractKey": null
};

(node/*: any*/).hash = "d5e944e18d61ae7a6b7b47d2246772ad";

module.exports = ((node/*: any*/)/*: Fragment<
  MarkAllTodosMutation_todoEdge$fragmentType,
  MarkAllTodosMutation_todoEdge$data,
>*/);
