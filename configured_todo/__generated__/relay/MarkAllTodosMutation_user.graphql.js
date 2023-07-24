/**
 * @generated SignedSource<<e5fab51dff59a2f98b27da2c7f545d33>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type MarkAllTodosMutation_user$fragmentType: FragmentType;
export type MarkAllTodosMutation_user$data = {|
  +idfield: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: MarkAllTodosMutation_user$fragmentType,
|};
export type MarkAllTodosMutation_user$key = {
  +$data?: MarkAllTodosMutation_user$data,
  +$fragmentSpreads: MarkAllTodosMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarkAllTodosMutation_user",
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

(node/*: any*/).hash = "d6a609e8b3639e2ba53513ceee1bdea4";

module.exports = ((node/*: any*/)/*: Fragment<
  MarkAllTodosMutation_user$fragmentType,
  MarkAllTodosMutation_user$data,
>*/);
