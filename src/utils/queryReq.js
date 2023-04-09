const getQuery = (req) => {
  let { pageIndex, pageSize, search, ...rest } = req.query;
  pageIndex = req?.query?.pageIndex || 1;
  pageSize = req?.query?.pageSize || 10;
  search = new RegExp(req.query.search || "", "i");
  const sort = req.query.sort || "asc";
  return {
    pageIndex,
    pageSize,
    search,
    sort,
    ...rest,
  };
};

module.exports = {
  getQuery,
};
