'use strict';

/**
 * return-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::return-info.return-info');
