import React from "react";
const $fhir = {
  search: (query) => Promise.resolve(),
};
const dispatch = (action) => {};

export default function SearchPatientInput(props) {
  const searchPatient = (e) => {
    const patientName = e.target.value;
    const user = props.user;
    const query = {
      family: { $exact: patientName },
      generalPractitioner: user.defaultIdentity,
    };

    $fhir.search(query).then(
      (patient) =>
        dispatch({ type: "FETCH_PATIENT_SUCCESS", payload: patient }),
      (error) => dispatch({ type: "FETCH_PATIENT_ERROR", payload: error })
    );
  };
  return (
    <div>
      <input type="text" onChange={searchPatient} />
    </div>
  );
}
