import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledLandingContainer } from "./Landing.styles";
import Input from "../UI/input/Input";

const Landing = () => {
  const [formState, setFormState] = useState({
    autoPurchasePrice: 0,
    autoMake: "",
    autoModel: "",
    userEstimatedYearlyIncome: 0,
    userEstimatedCreditScore: 0,
  });
  //   const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  const handleChange = (inputName: string, inputValue: string | number) => {
    setFormState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  return (
    <StyledLandingContainer>
      <div className="cuna-auto-loan-form">
        <div className="cuna-auto-loan-inputs">
        <Input
          handleChange={handleChange}
          placeholder="Auto Purchase Price"
          name="autoPurchasePrice"
          label="Auto Purchase Price"
        />
        <Input
          placeholder="Auto Make"
          name="autoMake"
          label="Auto Make"
          handleChange={handleChange}
        />
        <Input
          placeholder="Auto Model"
          name="autoModel"
          label="Auto Model"
          handleChange={handleChange}
        />
        <Input
          placeholder="Estimated Income"
          name="estimatedIncome"
          label="Estimated Income"
          handleChange={handleChange}
        />
        <Input
          placeholder="Estimated Credit Score"
          name="estimatedCreditScore"
          label="Estimated Credit Score"
          handleChange={handleChange}
        />
        </div>
      
      </div>
    </StyledLandingContainer>
  );
};

export default Landing;
