import React from 'react';
import Menu from './components/Menu';
import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Acordes from './components/QuestionsAcordes';

const App: React.FC = () => {
  const items = [
    { label: 'Home', url: '/' },
    { label: 'Formação de acordes', url: '/formacaoAcordes' },
    { label: 'Contato', url: '/contato' },
  ];

  return (
    <Router>
      <div>
        <header>
          <Menu items={items} />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/formacaoAcordes" element={<Acordes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
