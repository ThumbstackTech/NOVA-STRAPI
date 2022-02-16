const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    (ctx.query = {
      ...ctx.query,
      fields: ["title"],
      populate: {
        section_data: {
          fields: ["title"],
          populate: {
            api_kits_cards: {
              sort: ["id:ASC"],
              fields: [
                "title",
                "subTitle",
                "cardTag",
                "subTag",
                "desc",
                "filterTag",
              ],
              populate: {
                avatar: {
                  fields: ["url"],
                },
                descImg: {
                  fields: ["url"],
                },
                bgSvg: {
                  fields: ["url"],
                },
                topRightCornerImg: {
                  fields: ["url"],
                },
                points: {
                  fields: ["title", "tag", "sortDesc"],
                  populate: {
                    bg: {
                      fields: ["url"],
                    },
                    bgSvg: {
                      fields: ["url"],
                    },
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                api_info: {
                  fields: ["title", "tag", "titleTag", "api", "apiCallsAvg"],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                downloads_info: {
                  fields: ["title", "tag", "downloadTag", "downloadsCount"],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                investment_info: {
                  fields: ["title", "tag", "investmentTag", "investmentAmount"],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                rating_info: {
                  fields: [
                    "title",
                    "tag",
                    "ratingTag",
                    "ratingCount",
                    "rating",
                  ],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                return_info: { fields: ["title", "tag", "percentageReturn"] },
                links: {
                  fields: ["title", "href"],
                  populate: {
                    icon: { fields: ["url"] },
                  },
                },
                response_info: {
                  fields: ["title", "tag"],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
                success_info: {
                  fields: ["title", "tag", "successRate"],
                  populate: {
                    icon: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
      // Calling the default core action

      ({ data } = await super.find(ctx));
    console.log(data.attributes.section_data);
    return data;
  },
}));
