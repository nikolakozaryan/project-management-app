import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInput = (name: string) => {
  const methods = useFormContext();
  const { formState } = methods;
  const [invalid, setInvalid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const { errors } = formState;
    const haveErrors = Object.keys(errors).includes(name);
    if (haveErrors) {
      setError(errors[name]?.message as string);
      setInvalid(true);
    } else {
      setError('');
      setInvalid(false);
    }
  }, [formState, name]);

  return { methods, invalid, error };
};
