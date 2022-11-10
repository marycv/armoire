export const clothesReducer = (state,action) => {
    switch (action.type) {
      case 'ADD_ITEM' :
        return [action.newItem, ...state];
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.id);
      case 'EDIT_ITEM':
        const index = state.findIndex(item => item.id === action.editedItem.id);
        if (index < 0 || index > state.length -1) {
          console.log('Did not find shirt to edit...');
          return
        }
        return ([
            ...state.slice(0,index),
            action.editedItem,
            ...state.slice(index + 1)
        ])
      default:
        return state
    }
  }