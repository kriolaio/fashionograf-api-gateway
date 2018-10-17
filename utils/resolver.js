const areArraysIntersected = (arr1, arr2) => {
  const commonVals = arr1.filter(value => arr2.indexOf(value) > -1);
  return commonVals && commonVals.length > 0;
};

const schemaFormatter = (
  resolvers,
  opts = { schemaQueryName: "Query", schemaMutationName: "Mutation" }
) => {
  if (Array.isArray(resolvers) && resolvers.length > 0) {
    const schemaFormat = {
      [opts.schemaQueryName]: {},
      [opts.schemaMutationName]: {}
    };
    resolvers.forEach(resolver => {
      if (resolver.Query) {
        if (
          areArraysIntersected(
            Object.keys(schemaFormat[opts.schemaQueryName]),
            Object.keys(resolver.Query)
          )
        ) {
          throw new Error("Query key(s) is already defined");
        }
        Object.assign(schemaFormat[opts.schemaQueryName], resolver.Query);
      }
      if (resolver.Mutation) {
        if (
          areArraysIntersected(
            Object.keys(schemaFormat[opts.schemaMutationName]),
            Object.keys(resolver.Mutation)
          )
        ) {
          throw new Error("Mutation key(s) is already defined");
        }
        Object.assign(schemaFormat[opts.schemaMutationName], resolver.Mutation);
      }
    });
    return schemaFormat;
  }
  throw new TypeError("Resolvers should be defined and type of array");
};

module.exports = {
  schemaFormatter
};
