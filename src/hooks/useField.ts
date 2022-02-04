import { useState } from "react";

interface IField {
  type: string;
  initialValue: string | number;
  customOnChange?: (value: string) => void;
}

export const useField = ({ type, initialValue, customOnChange }: IField) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: any) => {
    if (customOnChange) {
      customOnChange(event.target.value);
    }
    setValue(event.target.value);
  };

  const updateValue = (value: string) => {
    setValue(value);
  };

  return { value, onChange, type, updateValue };
};
