import actions from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
}
