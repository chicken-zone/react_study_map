import React from 'react';
import { Map as MapIcon, LocationOn, Layers, Settings, School } from '@mui/icons-material';

export interface MenuItem {
  text: string;
  icon: React.ReactNode;
  action: () => void;
}

export const createMenuItems = (handlers: {
  handleHomeClick: () => void;
  handleStudyClick: () => void;
  handleSettingsClick: () => void;
}): MenuItem[] => [
  { text: '地図', icon: <MapIcon />, action: handlers.handleHomeClick },
  { text: '場所', icon: <LocationOn />, action: () => console.log('場所クリック') },
  { text: 'レイヤー', icon: <Layers />, action: () => console.log('レイヤークリック') },
  { text: '練習', icon: <School />, action: handlers.handleStudyClick },
  { text: '設定', icon: <Settings />, action: handlers.handleSettingsClick },
];