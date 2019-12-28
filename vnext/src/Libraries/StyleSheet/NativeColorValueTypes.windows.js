/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {ColorValue, ProcessedColorValue} from './ColorValueTypes';

export opaque type NativeColorValue = {
  windowsbrush?: string,
};

export const PlatformColor = (...names: Array<string>): ColorValue => {
  return {windowsbrush: names[0]};
};

export const normalizeColorObject = (
  color: NativeColorValue,
): ?ProcessedColorValue => {
  if ('windowsbrush' in color) {
    return color;
  }

  return null;
};

export const processColorObject = (
  color: NativeColorValue,
): ?NativeColorValue => {
  return color;
};
