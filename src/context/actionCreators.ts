import actions from './actions';

export const toggleModal = ({ dispatch, payload }) => {
  return dispatch({
    type: actions.TOGGLE_MODAL,
    payload,
  });
};
