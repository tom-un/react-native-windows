/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow
 */

'use strict';

export type ColorValue = null | string;

export type NativeColorValue = Object; // flowlint-line unclear-type: off

export type ProcessedColorValue = number | NativeColorValue;

export const PlatformColor = (
  name: string,
  options?: Object /* flowlint-line unclear-type: off */,
): ColorValue => null;
