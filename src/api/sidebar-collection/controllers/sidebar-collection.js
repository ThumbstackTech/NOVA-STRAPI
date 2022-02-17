const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::sidebar-collection.sidebar-collection",
  ({ strapi }) => ({
    async find(ctx) {
      (ctx.query = {
        ...ctx.query,
        fields: ["title"],
        populate: {
          sidebar_links: {
            fields: ["name", "to"],
            populate: {
              icon: {
                fields: ["url"],
              },
            },
          },
        },
      }),
        // Calling the default core action

        ({ data } = await super.find(ctx));

      return data;
    },
  })
);
