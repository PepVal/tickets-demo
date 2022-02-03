import { useState } from "react";

interface IField {
  type: string;
  initialValue: string | number;
}

export const useField = ({ type, initialValue }: IField) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return { value, onChange, type };
};
