import Checkbox from "expo-checkbox";
import React from "react";
import CheckboxInputStyles from "./CheckboxInput.style";

export interface CheckboxInputProps {
  testId: string;
  setCheckboxValue: any;
  checkboxValue: boolean;
}

// export type CheckboxRef = HTMLInputElement;
const CheckboxInput: React.FC<CheckboxInputProps> = ({
  testId,
  setCheckboxValue,
  checkboxValue,
}) => {
  return (
    <Checkbox
      style={CheckboxInputStyles.container}
      testID={testId}
      value={checkboxValue}
      onValueChange={setCheckboxValue}
    />
  );
};

export default CheckboxInput;
