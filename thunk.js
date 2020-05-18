function fetchPatientThunk(patientName) {
  return function (dispatch, getState) {
    const query = {
      family: { $exact: patientName },
      generalPractitioner: getState().user.defaultIdentity,
    };

    return $fhir.search(query).then(
      (patient) =>
        dispatch({ type: "FETCH_PATIENT_SUCCESS", payload: patient }),
      (error) => dispatch({ type: "FETCH_PATIENT_ERROR", payload: error })
    );
  };
}
dispatch(fetchPatientThunk("FAUGERE"));
