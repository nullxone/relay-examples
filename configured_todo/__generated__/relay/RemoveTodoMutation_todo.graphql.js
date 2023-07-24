/**
 * @generated SignedSource<<160aefab8c21f3f4bc75f04ff999feff>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveTodoMutation_todo$fragmentType: FragmentType;
export type RemoveTodoMutation_todo$data = {|
  +complete: boolean,
  +idfield: string,
  +$fragmentType: RemoveTodoMutation_todo$fragmentType,
|};
export type RemoveTodoMutation_todo$key = {
  +$data?: RemoveTodoMutation_todo$data,
  +$fragmentSpreads: RemoveTodoMutation_todo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveTodoMutation_todo",
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
  "type": "Todo",
  "abstractKey": null
};

(node/*: any*/).hash = "465bb94a92c91d256aa3cd382580cf87";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveTodoMutation_todo$fragmentType,
  RemoveTodoMutation_todo$data,
>*/);
