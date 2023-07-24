/**
 * @generated SignedSource<<216988092ca62be295d7abd641be0067>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ChangeTodoStatusMutation_todo$fragmentType: FragmentType;
export type ChangeTodoStatusMutation_todo$data = {|
  +idfield: string,
  +$fragmentType: ChangeTodoStatusMutation_todo$fragmentType,
|};
export type ChangeTodoStatusMutation_todo$key = {
  +$data?: ChangeTodoStatusMutation_todo$data,
  +$fragmentSpreads: ChangeTodoStatusMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "idfield",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "7ff19b606c2eddc18878bce76ecb939e";

module.exports = ((node/*: any*/)/*: Fragment<
  ChangeTodoStatusMutation_todo$fragmentType,
  ChangeTodoStatusMutation_todo$data,
>*/);
