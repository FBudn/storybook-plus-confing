import Checkbox from "expo-checkbox";
import React from "react";
import CheckboxInputStyles from "./CheckboxInput.style";

export interface CheckboxInputProps {
  testId: string;
}

// export type CheckboxRef = HTMLInputElement;
const CheckboxInput: React.FC<CheckboxInputProps> = ({ testId }) => {
  return <Checkbox style={CheckboxInputStyles.container} testID={testId} />;
};

export default CheckboxInput;
