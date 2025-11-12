import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleStudyClick = () => {
    navigate('/study');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMouseEnter = () => {
    if (!isSettingsOpen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isSettingsOpen) {
      setIsHovered(false);
    }
  };

  const drawerWidth = isSettingsOpen ? 500 : (isHovered ? 360 : 120);

  return {
    // States
    mobileOpen,
    isHovered,
    isSettingsOpen,
    drawerWidth,
    
    // Handlers
    handleDrawerToggle,
    handleSettingsClick,
    handleCloseSettings,
    handleStudyClick,
    handleHomeClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};