import React from "react";
import { useParams } from "react-router-dom";

export const CandidateDetails = () => {
  const { lista } = useParams();

  return <div>{`candidato de la lista ${lista}`}</div>;
};
