const { createCoreController } = require("@strapi/strapi").factories;
const Mapitem =
  require("../../../extensions/strapiEliminateExtraField.js").default;

module.exports = createCoreController(
  "api::api-product.api-product",
  ({ strapi }) => ({
    async findOne(ctx) {
      (ctx.query = {
        fields: [
          "title",
          "apiFormat",
          "apiType",
          "desc",
          "subTitle",
          "cardTag",
          "subTag",
        ],
        populate: {
          section_data: {
            fields: ["title"],
            populate: {
              api_kits_cards: {
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
                  download_info: {
                    fields: ["title", "tag", "downloadTag", "downloadsCount"],
                    populate: {
                      icon: {
                        fields: ["url"],
                      },
                    },
                  },
                  investment_info: {
                    fields: [
                      "title",
                      "tag",
                      "investmentTag",
                      "investmentAmount",
                    ],
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
          api_info: {
            fields: ["title", "tag", "titleTag", "api", "apiCallsAvg"],
            populate: {
              icon: {
                fields: ["url"],
              },
            },
          },
          response_infos: {
            fields: ["title", "tag", "titleTag", "api", "apiCallsAvg"],
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
          headers_code: {
            fields: ["title"],
            populate: {
              documentation_codes: {
                fields: [
                  "title",
                  "key",
                  "field",
                  "mandatory",
                  "description",
                  "values",
                  "subTitle",
                  "typeNameTag",
                ],
              },
            },
          },
          res_code: {
            fields: ["title"],
            documentation_codes: {
              fields: [
                "title",
                "key",
                "field",
                "mandatory",
                "description",
                "values",
                "subTitle",
                "typeNameTag",
              ],
            },
          },
          req_code: {
            fields: ["title"],
            documentation_codes: {
              fields: [
                "title",
                "key",
                "field",
                "mandatory",
                "description",
                "values",
                "subTitle",
                "typeNameTag",
              ],
            },
          },
          links: { fields: ["title", "href"] },
          paras: {
            fields: ["title"],
            populate: {
              desc: {
                populate: "*",
              },
            },
          },
        },
      }),
        // Calling the default core action

        ({ data } = await super.findOne(ctx));

      return data;
    },
  })
);
