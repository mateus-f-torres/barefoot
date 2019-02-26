/* Create an action constructor function
 * Params:
 *   actionType: string, action type to be created
 * Returns:
 *   action: function, action constructor function that can accept a payload
 */
export const actionCreator = (actionType) => {
  return function action(actionPayload) {
    return actionPayload
      ? {
        type: actionType,
        payload: actionPayload,
      }
      : {
        type: actionType,
      };
  };
};

/* Repeat given action n times to a reducer,
 * while feeding it the returned modified state from each iteration
 * Params:
 *   action: object, action to be repeated
 *   times: number, times said action should be repeated
 *   reducer: function, reducer that will receive repeated actions
 *   starter: object, optional state from which reducer should start
 * Returns:
 *   state: object, state returned by reducer after n iteration
 */
export const actionRepeater = (action, times, reducer, starter) => {
  let state = starter
    ? starter
    : reducer(undefined, {type: 'dummy'});
  for (let i = 0; i < times; i++) {
    state = reducer(state, action);
  }
  return state;
};

/* Pass all actions to a reducer,
 * while feeding it the returned modified state from each one
 * Params:
 *   script: object with iterator, list of all actions to pass to reducer
 *   reducer: function, reducer that will receive actions from script
 * Returns:
 *   state: object, state returned by reducer after all actions are passed
 */
export const actionScriptRunner = (script, reducer) => {
  let state = reducer(undefined, {type: 'dummy'});
  for (const action of script) {
    state = reducer(state, action);
  }
  return state;
};
