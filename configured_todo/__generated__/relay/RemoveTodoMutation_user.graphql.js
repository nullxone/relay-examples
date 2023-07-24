/**
 * @generated SignedSource<<6b323afb4e99ddb9eafe37a5a4651da3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RemoveTodoMutation_user$fragmentType: FragmentType;
export type RemoveTodoMutation_user$data = {|
  +completedCount: number,
  +idfield: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: RemoveTodoMutation_user$fragmentType,
|};
export type RemoveTodoMutation_user$key = {
  +$data?: RemoveTodoMutation_user$data,
  +$fragmentSpreads: RemoveTodoMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RemoveTodoMutation_user",
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

(node/*: any*/).hash = "e7e5f21dd4e9c24d3627a3a3d3bc82bc";

module.exports = ((node/*: any*/)/*: Fragment<
  RemoveTodoMutation_user$fragmentType,
  RemoveTodoMutation_user$data,
>*/);
