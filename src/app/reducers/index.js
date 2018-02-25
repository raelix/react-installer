import { combineReducers } from 'redux'



var tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

const tabSection = (state = {section: ''}, action) => {
  console.log(action);
  switch (action.type) {
    case 'onActive':
      return  {
          section: action.section
        }
    default:
      return state
  }
}
const tabVisibilty = (state = {toggle : true}, action) => {
  console.log(action);
  switch (action.type) {
    case 'click':
      return  {
          toggle: !state.toggle
        }
    default:
      return state
  }
}
const tabContent = (state = {datas: tableData}, action) => {
  console.log(action);
  switch (action.type) {
    case 'onActive':
      return  {
          datas: action.datas
        }
    default:
      return state
  }
}

const installerPage = combineReducers({
  tabSection,
  tabVisibilty,
  tabContent
})

export default installerPage
