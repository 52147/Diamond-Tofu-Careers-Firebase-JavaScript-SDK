import { useReducer } from 'react';

export function reducer(state, action) {
    console.log(action);
    console.log(state);

  switch (action.type) {
    case 'setData': {
      return {
        googleAuthData: action.googleAuthData,
      };
    }

  }
  throw Error('Unknown action: ' + action.type);
}

