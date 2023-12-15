import React, { useState, useEffect } from 'react';
import './App.css'; // Your CSS file

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);
}

 

export default App;
