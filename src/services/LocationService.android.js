/**
 *
 * Copyright (c) 2016-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 *
 */

import {
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

const LocationProvider = NativeModules.LOSTLocationProvider;
export const FREQUENCY = 500;
export const DISTANCE = 1;
export const ACCURACY = LocationProvider.HIGH_ACCURACY;

export const startLocationPolling = () =>
  LocationProvider.startLocationPolling(FREQUENCY, DISTANCE, ACCURACY);

export const onLocationChanged = callback =>
  DeviceEventEmitter.addListener('location_changed', callback);
