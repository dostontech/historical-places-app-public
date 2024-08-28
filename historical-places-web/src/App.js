import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HistoricalPlaceList from './components/HistoricalPlaceList';
import HistoricalPlaceDetails from './components/HistoricalPlaceDetails';
import RandomPlace from './components/RandomPlace';
import './index.css';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <div className="header">
          <h1>Historical Places To Explore</h1>
        </div>
        <div className="mainContent">
          <div className="contentArea">
            <div className="main">
              <Routes>
                <Route path="/" element={<HistoricalPlaceList />} />
                <Route path="/place/:id" element={<HistoricalPlaceDetails />} />
              </Routes>
            </div>
            <div className="sidebar">
              <RandomPlace />
            </div>
          </div>
          <div className="footer">
            <p>&copy; 2024 Historical Places App</p>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
