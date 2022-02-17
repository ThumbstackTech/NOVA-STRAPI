const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    (ctx.query = {
      ...ctx.query,
      fields: ["title", "description"],
      populate: {
        footerLogo: { fields: ["url"] },
        footer_collections: {
          fields: ["title"],
          populate: {
            footer_links: {
              fields: ["name", "to"],
              populate: { icon: { fields: ["url"] } },
            },
          },
        },
      },
    }),
      // Calling the default core action

      ({ data, meta } = await super.find(ctx));

    return data;

    // return { data };
  },
}));
