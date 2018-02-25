import { combineReducers } from 'redux'
import {TABLE_DATA, FUNCTIONALITIES} from '../define'
import {
  MENU_LABEL,
  CLICK_LEFT_MENU,
  CHANGED_SECTION,
  UPDATE_TABLE_DATA,
  CHANGE_LEFT_MENU_LIST,
  changedSection,
  clickLeftMenu,
  updateTableData,
  changeLeftMenuList
} from '../actions'

const tabSection = (state = changedSection(''), action) => {
  switch (action.type) {
    case CHANGED_SECTION:
      return  {
          section: action.section
        }
    default:
      return state
  }
}
const tabVisibilty = (state = clickLeftMenu(), action) => {
  switch (action.type) {
    case CLICK_LEFT_MENU:
      return  {
          toggle: !state.toggle
        }
    default:
      return state
  }
}
const tabContent = (state = updateTableData(TABLE_DATA), action) => {
  switch (action.type) {
    case UPDATE_TABLE_DATA:
      return  {
          data: action.data
        }
    default:
      return state
  }
}

const onChangeLeftMenuList = (state = changeLeftMenuList(FUNCTIONALITIES), action) => {
  switch (action.type) {
    case CHANGE_LEFT_MENU_LIST:
      return  {
          data: action.data
        }
    default:
      return state
  }
}

const installerPage = combineReducers({
  tabSection,
  tabVisibilty,
  tabContent,
  onChangeLeftMenuList
})

export default installerPage
