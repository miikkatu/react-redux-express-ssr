const initialState = {
  email: 'example.user@example.com',
  name: 'Example User'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
}
