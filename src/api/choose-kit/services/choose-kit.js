'use strict';

/**
 * choose-kit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::choose-kit.choose-kit');
