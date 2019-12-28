/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {ColorValue, ProcessedColorValue} from './ColorValueTypes';

export opaque type NativeColorValue = IGradientColorType;

export interface IColorStop {
  color: string | number | NativeColorValue;
  offset: number;
}

export interface IGradientColorType {
  gradientDirection: string;
  colorStops: Array<IColorStop>;
}

export const PlatformColor = (...names: Array<string>): ColorValue => {
  return null;
}

export const normalizeColorObject = (
  color: NativeColorValue,
): ?ProcessedColorValue => {
  if (color && typeof color === 'object') {
    if (color.hasOwnProperty('colorStops') && color.hasOwnProperty('gradientDirection')) {
      invariant(color.colorStops.length >= 2, 'Gradients must contain at least two colors.');

      invariant(
        color.gradientDirection === 'ToTop' ||
          color.gradientDirection === 'ToBottom' ||
          color.gradientDirection === 'ToLeft' ||
          color.gradientDirection === 'ToRight',
        'Unsupported gradient direction; currently supports ToTop, ToBottom, ToLeft, and ToRight.'
      );

      const gradientColorStops: Array<IColorStop> = [];
      color.colorStops.forEach((colorStop: IColorStop) => {
        gradientColorStops.push({
          color: normalizeColor(colorStop.color),
          offset: colorStop.offset
        });
      });

      return {
        gradientDirection: color.gradientDirection,
        colorStops: gradientColorStops
      };
    }
  }

  return null;
};

export const processColorObject = (
  color: NativeColorValue,
): ?NativeColorValue => {
  if (color && typeof color === 'object') {
    if (color.hasOwnProperty('colorStops') && color.hasOwnProperty('gradientDirection')) {
      invariant(color.colorStops.length >= 2, 'Gradients must contain at least two colors.');

      invariant(
        color.gradientDirection === 'ToTop' ||
          color.gradientDirection === 'ToBottom' ||
          color.gradientDirection === 'ToLeft' ||
          color.gradientDirection === 'ToRight',
        'Unsupported gradient direction; currently supports ToTop, ToBottom, ToLeft, and ToRight.'
      );

      const gradientColorStops: Array<IColorStop> = [];
      color.colorStops.forEach((colorStop: IColorStop) => {
        gradientColorStops.push({
          color: processColor(colorStop.color),
          offset: colorStop.offset
        });
      });

      return {
        gradientDirection: color.gradientDirection,
        colorStops: gradientColorStops
      };
    }
  }

  return null;
};
