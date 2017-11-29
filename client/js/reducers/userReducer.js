export default function reducer(state = {
  user: {
    name: null,
    email: null,
    password: null,
    role: null,
    id: null,
    token: null,
  },
  status: {
    fetching: false,
    fetched: false,
    error: false,
  }
}, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: true,
          fetched: false,
          error: false
        }
      };
    }
    case 'FETCH_USER_RESOLVED': {
      const { name, email, role, id } = action.payload.user;
      const token = action.payload.token;
      const newUser = { name, email, role, id, token };
      return {
        ...state,
        user: newUser,
        status: {
          ...state.status,
          fetching: false,
          fetched: true,
        }
      };
    }
    case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        status: {
          ...state.status,
          fetching: false,
          error: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}
