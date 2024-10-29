import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import{CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./Topbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home'; // Adjust the path as necessary
import OtherPage from './OtherPage'; // Other routes
import Cookies from 'js-cookie';
import Sidebar from './Sidebar';

const App: React.FC = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Sidebar/>
        {/* add top bar back here */}
        <Routes>
          <Route path="/" element={(Cookies.get('sessionToken') ? <OtherPage /> : <HomePage/>)} />
          <Route path="/otherpage" element={<OtherPage />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
};

export default App;
