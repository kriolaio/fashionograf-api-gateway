const app = require("./app");

const { PORT } = process.env;

app.listen(PORT).then(({ url }) => {
  console.info(`GraphQL Server ready at ${url}`);
});
