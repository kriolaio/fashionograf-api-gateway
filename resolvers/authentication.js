const resolver = {
  Mutation: {
    signin: async () => {
      console.log("signin is called");
      return { content: "xxxxxx" };
    },
    signup: async () => {
      console.log("signup is called");
      return { content: "xxxxxx" };
    }
  }
};

module.exports = resolver;
