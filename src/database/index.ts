const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE, MONGO_FULL_URI } = process.env;

export const dbConnection = {
  url: `${MONGO_FULL_URI || `mongodb://${MONGO_HOST}:${MONGO_PORT}`}/${MONGO_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
