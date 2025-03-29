import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <Button type="back" onClick={handleBack}>
        &larr; Back
      </Button>
    </div>
  );
};

export default BackButton;
