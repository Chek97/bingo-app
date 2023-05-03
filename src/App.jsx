import React from 'react';
import { Footer } from './components';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <div className='container'>
      <AppRouter />
      <Footer />
    </div>
  )
}
