"use client"

import Hello from "~/components/HelloWorld";
import DataGrid from "~/components/DataGrid";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import axios from 'axios'

const App: React.FC = () => {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const { data: session, status } = useSession()

  // TODO:axios get data
  /*
  useEffect(() => {
    axios.get('/api/provinces').then(response => {
      setProvinces(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      axios.get(`/api/provinces/${selectedProvince}/cities`).then(response => {
        setCities(response.data);
      });
    }
  }, [selectedProvince]);
  */

  return (
    <div>
      <p>Signed in as {session.user.email}</p>
      <Hello />
      <FormControl>
        <InputLabel>Province</InputLabel>
        <Select
          value={selectedProvince}
          onChange={e => setSelectedProvince(e.target.value as string)}
        >
          {provinces.map(province => (
            <MenuItem key={province.id} value={province.id}>
              {province.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl>
        <InputLabel>City</InputLabel>
        <Select
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value as string)}
          disabled={!selectedProvince}
        >
          {cities.map(city => (
            <MenuItem key={city.id} value={city.id}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DataGrid />
    </div>
  );
};

export default App;
