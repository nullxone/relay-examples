/**
 * @generated SignedSource<<07fc7481d2e3a974b1ee59100367b0cb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RenameTodoMutation_todo$fragmentType: FragmentType;
export type RenameTodoMutation_todo$data = {|
  +idfield: string,
  +text: string,
  +$fragmentType: RenameTodoMutation_todo$fragmentType,
|};
export type RenameTodoMutation_todo$key = {
  +$data?: RenameTodoMutation_todo$data,
  +$fragmentSpreads: RenameTodoMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RenameTodoMutation_todo",
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
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "61975fccfd0efd242200f7a1a84a91d3";

module.exports = ((node/*: any*/)/*: Fragment<
  RenameTodoMutation_todo$fragmentType,
  RenameTodoMutation_todo$data,
>*/);
