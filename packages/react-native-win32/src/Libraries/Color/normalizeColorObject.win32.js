/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow
 */
// [TODO(macOS ISS#2323203)
'use strict';

const invariant = require('invariant');
const normalizeColor = require('normalizeColor');

import type {NativeColorValue, ProcessedColorValue} from 'ColorValueTypes';

function normalizeColorObject(color: NativeColorValue): ?ProcessedColorValue {
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
}

module.exports = normalizeColorObject;
// ]TODO(macOS ISS#2323203)
