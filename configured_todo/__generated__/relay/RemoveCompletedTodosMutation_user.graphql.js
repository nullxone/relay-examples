/**
 * @generated SignedSource<<929911eb09306555f3be38e4842f71eb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveCompletedTodosMutation_user$fragmentType: FragmentType;
export type RemoveCompletedTodosMutation_user$data = {|
  +idfield: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: RemoveCompletedTodosMutation_user$fragmentType,
|};
export type RemoveCompletedTodosMutation_user$key = {
  +$data?: RemoveCompletedTodosMutation_user$data,
  +$fragmentSpreads: RemoveCompletedTodosMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveCompletedTodosMutation_user",
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
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "e6cda7c14179f1059fee936343b4ff8c";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveCompletedTodosMutation_user$fragmentType,
  RemoveCompletedTodosMutation_user$data,
>*/);
