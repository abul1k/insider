/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/state/store';

export const useFetching = (someFetchActionCreator: any) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(someFetchActionCreator());
  }, [dispatch, someFetchActionCreator]);
}
