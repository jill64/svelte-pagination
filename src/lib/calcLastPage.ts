export const calcLastPage = (arg: { total: number; per: number }) =>
  Math.ceil(arg.total / arg.per)
