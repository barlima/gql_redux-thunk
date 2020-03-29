import { gql } from "apollo-boost";

const INITIAL_STATE = {};
const LOAD_ALL = 'LOAD_ALL';

const store = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_ALL:
      return action.list;
    default:
      return state;
  }
}

export default store;

// actions

export const fillList = list => ({
  type: LOAD_ALL,
  list,
})

// selectors

export const getList = (state, props) => state;

// thunk 

const QUERY = gql`
  query getBridges {
    bridges {
      id
      name
      city
    }
  }
`;

export const fetchList = () => {
  return async function(dispatch, getState, { client }) {
    const request = await client.query({
      query: QUERY
    });

    const result = await request;

    dispatch(fillList(result));
  }
}