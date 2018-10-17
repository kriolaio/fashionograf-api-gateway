const { schemaFormatter } = require("./resolver");

describe("Resolver Util Tests", () => {
  test("SchemaFormatter should throw exception is resolver is null", () => {
    expect(() => {
      schemaFormatter();
    }).toThrow(TypeError);
  });
  test("SchemaFormatter should throw exception is resolver is empty array", () => {
    expect(() => {
      schemaFormatter([]);
    }).toThrow(TypeError);
  });
  test("SchemaFormatter should create formated object with a resolver with empty resolver", () => {
    const resolver = {};
    const formattedResolverSchema = { Query: {}, Mutation: {} };
    expect(schemaFormatter([resolver])).toEqual(formattedResolverSchema);
  });
  test("SchemaFormatter should create formated object with a resolver with Query", () => {
    const testFn = () => {};
    const resolver = { Query: { test: testFn } };
    const formattedResolverSchema = { Query: { test: testFn }, Mutation: {} };
    expect(schemaFormatter([resolver])).toEqual(formattedResolverSchema);
  });
  test("SchemaFormatter should create formated object with multiple resolvers with Query", () => {
    const testFn = () => {};
    const test2Fn = () => {};
    const resolver = { Query: { test: testFn } };
    const resolver2 = { Query: { test2: test2Fn } };
    const formattedResolverSchema = {
      Query: { test: testFn, test2: test2Fn },
      Mutation: {}
    };
    expect(schemaFormatter([resolver, resolver2])).toEqual(
      formattedResolverSchema
    );
  });
  test("SchemaFormatter should create formated object with a resolver with opts", () => {
    const testFn = () => {};
    const resolver = { Query: { test: testFn } };
    const formattedResolverSchema = { query: { test: testFn }, mutation: {} };
    expect(
      schemaFormatter([resolver], {
        schemaQueryName: "query",
        schemaMutationName: "mutation"
      })
    ).toEqual(formattedResolverSchema);
  });
  test("SchemaFormatter should throw exception is Query key is already defined", () => {
    const testFn = () => {};
    const test2Fn = () => {};
    const resolver = { Query: { test: testFn } };
    const resolver2 = { Query: { test: test2Fn } };

    expect(() => {
      schemaFormatter([resolver, resolver2]);
    }).toThrow(Error);
  });
});
