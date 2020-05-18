import React from "react";
const dispatch = (action) => {};

export default function SearchPatientInput() {
  const searchPatient = (e) => {
    const patientName = e.target.value;
    dispatch({ type: "FETCH_PATIENT", payload: { patientName } });
  };
  return (
    <div>
      <input type="text" onChange={searchPatient} />
    </div>
  );
}
