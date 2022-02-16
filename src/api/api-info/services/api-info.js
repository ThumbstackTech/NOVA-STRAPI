'use strict';

/**
 * api-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api-info.api-info');
