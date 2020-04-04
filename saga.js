export function* fetchPatientAsync(action) {
  const user = yield select(state => state.user);
  const query = {
    family: { $exact: action.payload.patientName },
    generalPractitioner: user.defaultIdentity
  };
  try {
    const patient = yield call($fhir.search, query);
    yield put({ type: "FETCH_PATIENT_SUCCESS", payload: patient });
  } catch (error) {
    yield put({ type: "FETCH_PATIENT_ERROR", payload: error });
  }
}

export function* watchIncrementAsync() {
  yield takeEvery("FETCH_PATIENT", fetchPatientAsync);
}
