/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as crypto from 'crypto';
import { WAConfigType } from './types/config';
import { WARequiredConfigEnum, WAConfigEnum } from './types/enums';
import Logger from './logger';

const LIB_NAME = 'UTILS';
const LOG_LOCAL = false;
const LOGGER = new Logger(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);

const DEFAULT_BASE_URL = 'graph.facebook.com';
const DEFAULT_LISTENER_PORT = 3000;
const DEFAULT_MAX_RETRIES_AFTER_WAIT = 30;
const DEFAULT_REQUEST_TIMEOUT = 20000;

const emptyConfigChecker = (partialConfig?: Partial<WAConfigType>) => {
	if (!partialConfig?.WA_PHONE_NUMBER_ID) {
		LOGGER.log(
			`Environmental variable: WA_PHONE_NUMBER_ID and/or sender phone number id arguement is undefined.`,
		);
		throw new Error('Missing WhatsApp sender phone number Id.');
	}

	for (const value of Object.values(WARequiredConfigEnum)) {
		if (!partialConfig?.[value]) {
			LOGGER.log(`Environmental variable: ${value} is undefined`);
			throw new Error('Invalid configuration.');
		}
	}
};

export const importConfig = (partialConfig?: Partial<WAConfigType>) => {
	emptyConfigChecker(partialConfig);

	const config: WAConfigType = {
		[WAConfigEnum.BaseURL]: partialConfig?.WA_BASE_URL || DEFAULT_BASE_URL,
		[WAConfigEnum.AppId]: partialConfig?.M4D_APP_ID || '',
		[WAConfigEnum.AppSecret]: partialConfig?.M4D_APP_SECRET || '',
		[WAConfigEnum.PhoneNumberId]: partialConfig?.WA_PHONE_NUMBER_ID || 0,
		[WAConfigEnum.BusinessAcctId]: partialConfig?.WA_BUSINESS_ACCOUNT_ID || '',
		[WAConfigEnum.APIVersion]: partialConfig?.CLOUD_API_VERSION || '',
		[WAConfigEnum.AccessToken]: partialConfig?.CLOUD_API_ACCESS_TOKEN || '',
		[WAConfigEnum.WebhookEndpoint]: partialConfig?.WEBHOOK_ENDPOINT || '',
		[WAConfigEnum.WebhookVerificationToken]:
			partialConfig?.WEBHOOK_VERIFICATION_TOKEN || '',
		[WAConfigEnum.ListenerPort]:
			partialConfig?.LISTENER_PORT || DEFAULT_LISTENER_PORT,
		[WAConfigEnum.MaxRetriesAfterWait]:
			partialConfig?.MAX_RETRIES_AFTER_WAIT || DEFAULT_MAX_RETRIES_AFTER_WAIT,
		[WAConfigEnum.RequestTimeout]:
			partialConfig?.REQUEST_TIMEOUT || DEFAULT_REQUEST_TIMEOUT,
		[WAConfigEnum.Debug]: partialConfig?.DEBUG || process.env.DEBUG === 'true',
	};

	LOGGER.log(`Configuration loaded for App Id ${config[WAConfigEnum.AppId]}`);

	return config;
};

export const generateXHub256Sig = (body: string, appSecret: string) => {
	return crypto
		.createHmac('sha256', appSecret)
		.update(body, 'utf-8')
		.digest('hex');
};
