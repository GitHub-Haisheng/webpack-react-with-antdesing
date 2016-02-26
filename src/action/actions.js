/*
 * action 类型
 */

export const SLIDE_MENU = 'SLIDE_MENU';

/*
 * action 创建函数
 */


export function slideMenu(menuarray) {
  return { type: SLIDE_MENU, menuarray:menuarray }
}
