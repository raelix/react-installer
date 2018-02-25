export const MENU_LABEL = 'menuLabel'
export const CLICK_LEFT_MENU = 'clickTitleLeftIcon'
export const CHANGED_SECTION = 'changedSection'
export const UPDATE_TABLE_DATA = 'updateTableData'

export const menuLabel = () => {
  type: MENU_LABEL,
  names: [ 'EMS', 'E-XMS', 'Intellisight' ],
  show: true
}
export const clickLeftMenu = () => {
  type: CLICK_LEFT_MENU,
  toggle: true
}

export const changedSection = (section) => {
  type: CHANGED_SECTION,
  section: section
}

export const updateTableData = (data) => {
  type: UPDATE_TABLE_DATA,
  data: data
}
