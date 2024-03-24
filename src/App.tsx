import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './Page/pokemonList';
import PokemonDetail from './Page/pokemonDetail';

import './App.css';

function App() {
  return (
    <Container maxWidth="xl" sx={{padding:10}}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<PokemonList />} />
          <Route path="/pokemonDetail/:ID" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
      </Container>
  );
}

export default App;
