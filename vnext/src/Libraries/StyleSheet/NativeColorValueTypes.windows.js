/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *
 * @format
 * @flow
 */

'use strict';

import type ColorValue from 'ColorValueTypes';

export type NativeColorValue = {
  windowsbrush?: string,
};

export const PlatformColor = (
  name: string,
  options?: Object /* flowlint-line unclear-type: off */,
): ColorValue => {
  return {windowsbrush: name};
};
