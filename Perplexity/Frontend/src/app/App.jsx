import React, { useEffect } from 'react'
import { router } from './app.routes';
import { RouterProvider } from 'react-router';
import {useAuth} from '../features/auth/hooks/useAuth';

const App = () => {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, [handleGetMe]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
