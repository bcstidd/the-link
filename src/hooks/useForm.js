import { useState } from 'react';

export function useForm(callback) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  const handleReset = () => {
    setValues({});
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleReset,
  };
}
