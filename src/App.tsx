import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout';
import StudyPage from './pages/StudyPage';
import './App.css';

// メインのAppコンポーネント（ルーティング設定）
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/study" element={<StudyPage />} />
    </Routes>
  );
}

export default App;
