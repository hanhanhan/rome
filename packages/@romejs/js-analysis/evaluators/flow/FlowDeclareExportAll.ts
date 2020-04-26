/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from '../../scopes';
import {
  AnyNode,
  FlowDeclareExportAll,
  flowDeclareExportAll,
} from '@romejs/js-ast';

export default function FlowDeclareExportAll(node: AnyNode, scope: Scope) {
  node = flowDeclareExportAll.assert(node);
  scope;
  throw new Error('unimplemented');
}
