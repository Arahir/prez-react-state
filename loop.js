const initialState = {
  loading: false,
  patient: null,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PATIENT":
      return loop(
        { ...state, loading: true },
        Cmd.run(fetchPatient, {
          successActionCreator: patientFetchSuccessfulAction,
          failActionCreator: patientFetchFailedAction,
          args: [
            {
              family: { $exact: action.payload.patientName },
              generalPractitioner: Cmd.getState().user.defaultIdentity
            }
          ]
        })
      );

    case "PATIENT_FETCH_SUCCESSFUL":
      return { ...state, loading: false, user: action.patient };

    case "PATIENT_FETCH_FAILED":
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}
