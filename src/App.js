import React from 'react';
import './App.scss';
import { ConfigProvider } from 'antd';
import Routes from './Components/Pages/routes/Routes'
import { useAuthContext } from 'Context/Auth';
import ScreenLoader from 'Components/ScreenLoader';

function App() {
  const  {isAppLoading} =useAuthContext()
  
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#21625a' } }} >
    {isAppLoading 
    ? <ScreenLoader/>
    :<Routes />
  }
    </ConfigProvider>
  )
    ;
}

export default App;
