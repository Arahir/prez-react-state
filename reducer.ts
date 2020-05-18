const initialState = {};
function crReducer(state = initialState, action) {
  if (action.type === "ADD_CR") {
    return {
      ...state,
      [action.payload.id]: action.payload,
    };
  }
  return state;
}

const action = {
  type: "ADD_CR",
  payload: {
    id: "12",
    resourceType: "CommunicationRequest",
    requester: "Practitioner/24",
  },
};

//state
const state = {
  12: {
    id: "12",
    resourceType: "CommunicationRequest",
    requester: "Practitioner/24",
  },
};
