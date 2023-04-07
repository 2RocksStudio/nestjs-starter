import { LanguageType } from '../common/enum/language.type.enum';

export default () => ({
  app: {
    name: process.env.SERVICE_NAME,
    appPort: process.env.PORT,
    swaggerPath: process.env.SWAGGER_PATH,
    env: process.env.ENV,
    defaultLanguage: LanguageType.ZH,
  },
  database: {},
  jwt: {},
  services: {
    // redis: {
    //   url: process.env.REDIS_URL,
    //   cacheTime: {
    //     shopRating: 60 * 60 * 24,
    //     location: 60 * 60 * 24,
    //   },
    // },
  },
  static: {
    paginateLimit: 50,
  },
});
