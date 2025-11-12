import React from 'react';
import { Box } from '@mui/material';
import { useSidebar } from '../hooks/useSidebar';
import { createMenuItems } from '../hooks/useMenuItems';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { MainContent } from '../components/MainContent';

export const MainLayout: React.FC = () => {
  const {
    mobileOpen,
    isHovered,
    isSettingsOpen,
    drawerWidth,
    handleDrawerToggle,
    handleSettingsClick,
    handleCloseSettings,
    handleStudyClick,
    handleHomeClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useSidebar();

  const menuItems = createMenuItems({
    handleHomeClick,
    handleStudyClick,
    handleSettingsClick,
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <Header 
        drawerWidth={drawerWidth} 
        onDrawerToggle={handleDrawerToggle} 
      />
      
      <Sidebar
        mobileOpen={mobileOpen}
        isHovered={isHovered}
        isSettingsOpen={isSettingsOpen}
        drawerWidth={drawerWidth}
        menuItems={menuItems}
        onDrawerToggle={handleDrawerToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onCloseSettings={handleCloseSettings}
      />

      <MainContent drawerWidth={drawerWidth} />
    </Box>
  );
};