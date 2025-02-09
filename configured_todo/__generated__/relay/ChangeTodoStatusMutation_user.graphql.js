/**
 * @generated SignedSource<<2ce8da93a233488c53062b26e623b0e6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ChangeTodoStatusMutation_user$fragmentType: FragmentType;
export type ChangeTodoStatusMutation_user$data = {|
  +completedCount: number,
  +idfield: string,
  +userId: string,
  +$fragmentType: ChangeTodoStatusMutation_user$fragmentType,
|};
export type ChangeTodoStatusMutation_user$key = {
  +$data?: ChangeTodoStatusMutation_user$data,
  +$fragmentSpreads: ChangeTodoStatusMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangeTodoStatusMutation_user",
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
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "fe789be39d34a0c4c7babdbae50270cc";

module.exports = ((node/*: any*/)/*: Fragment<
  ChangeTodoStatusMutation_user$fragmentType,
  ChangeTodoStatusMutation_user$data,
>*/);
