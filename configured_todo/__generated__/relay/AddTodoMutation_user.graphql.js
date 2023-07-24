/**
 * @generated SignedSource<<ed8cd5c7fcf2d00d477ed70db00542e6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type AddTodoMutation_user$fragmentType: FragmentType;
export type AddTodoMutation_user$data = {|
  +idfield: string,
  +totalCount: number,
  +userId: string,
  +$fragmentType: AddTodoMutation_user$fragmentType,
|};
export type AddTodoMutation_user$key = {
  +$data?: AddTodoMutation_user$data,
  +$fragmentSpreads: AddTodoMutation_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddTodoMutation_user",
  "selections": [
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
      "name": "idfield",
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

(node/*: any*/).hash = "2cade58ab4b06d4012fe6c9bd93d1278";

module.exports = ((node/*: any*/)/*: Fragment<
  AddTodoMutation_user$fragmentType,
  AddTodoMutation_user$data,
>*/);
