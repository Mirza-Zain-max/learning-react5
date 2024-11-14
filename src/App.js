import React from 'react';
import './App.scss';
import { ConfigProvider } from 'antd';
import Routes from './Components/Pages/Routes'

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#21625a'}}} >
      <Routes/>
    </ConfigProvider>
  )
  ;
}

export default App;
