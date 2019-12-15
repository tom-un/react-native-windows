/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow
 */

'use strict';

import type ColorValue from 'ColorValueTypes';

export type NativeColorValue = IGradientColorType;

export interface IColorStop {
  color: string | number | NativeColorValue;
  offset: number;
}

export interface IGradientColorType {
  gradientDirection: string;
  colorStops: Array<IColorStop>;
}

export const PlatformColor = (
  name: string,
  options?: Object /* flowlint-line unclear-type: off */,
): ColorValue => null;
