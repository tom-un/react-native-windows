/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * @format
 */

'use strict';

import type {NativeColorValue, ProcessedColorValue} from 'ColorValueTypes';

function normalizeColorObject(color: NativeColorValue): ?ProcessedColorValue {
  if ('windowsbrush' in color) {
    return color;
  }

  return null;
}

module.exports = normalizeColorObject;
