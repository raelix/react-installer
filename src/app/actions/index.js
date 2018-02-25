export const MENU_LABEL = 'menuLabel'
export const CLICK_LEFT_MENU = 'clickTitleLeftIcon'
export const CHANGED_SECTION = 'changedSection'
export const UPDATE_TABLE_DATA = 'updateTableData'
export const CHANGE_LEFT_MENU_LIST = 'changeLeftMenuList'

export const changeLeftMenuList = (list) => {
  return {
    type: CHANGE_LEFT_MENU_LIST,
    data: list
  }
}

export const menuLabel = () => {
  return {
    type: MENU_LABEL,
    names: [ 'EMS', 'E-XMS', 'Intellisight' ],
    show: true
  }
}
export const clickLeftMenu = () => {
  return  {
    type: CLICK_LEFT_MENU,
    toggle: true
  }
}

export const changedSection = (section) => {
  return  {
    type: CHANGED_SECTION,
    section: section
  }
}

export const updateTableData = (data) => {
  return  {
    type: UPDATE_TABLE_DATA,
    data: data
  }
}
