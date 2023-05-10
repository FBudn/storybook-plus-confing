import Checkbox from "expo-checkbox";
import React from "react";
import CheckboxInputstyles from "./CheckboxInput.style";

export interface CheckboxInputProps {
  testId: string;
}

// export type CheckboxRef = HTMLInputElement;
const CheckboxInput: React.FC<CheckboxInputProps> = ({ testId }) => {
  return <Checkbox style={CheckboxInputstyles.container} testID={testId} />;
};

export default CheckboxInput;
