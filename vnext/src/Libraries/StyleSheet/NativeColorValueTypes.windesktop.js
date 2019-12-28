/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {ColorValue, ProcessedColorValue} from './ColorValueTypes';

export opaque type NativeColorValue = Object; // flowlint-line unclear-type: off

export const PlatformColor = (...names: Array<string>): ColorValue => {
  return null;
};

export const normalizeColorObject = (
  color: NativeColorValue,
): ?ProcessedColorValue => {
  return null;
};

export const processColorObject = (
  color: NativeColorValue,
): ?NativeColorValue => {
  return null;
};
