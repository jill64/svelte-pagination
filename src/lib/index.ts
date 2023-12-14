export {
  /**
   * @deprecated Use instead `PaginateItems`
   * @see https://github.com/jill64/svelte-pagination#migrate-from-v1
   */
  default as Paginate
} from './Paginate.svelte'

export { default as PaginateItems } from './PaginateItems.svelte'
export { calcLastPage } from './utils/calcLastPage.js'
export { int } from './utils/int.js'
