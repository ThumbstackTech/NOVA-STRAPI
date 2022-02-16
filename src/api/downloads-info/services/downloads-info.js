'use strict';

/**
 * downloads-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::downloads-info.downloads-info');
