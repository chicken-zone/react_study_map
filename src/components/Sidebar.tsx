import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Map as MapIcon } from '@mui/icons-material';
import { MenuItem } from '../hooks/useMenuItems';
import { SettingsPage } from './SettingsPage';

interface SidebarProps {
  mobileOpen: boolean;
  isHovered: boolean;
  isSettingsOpen: boolean;
  drawerWidth: number;
  menuItems: MenuItem[];
  onDrawerToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onCloseSettings: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  isHovered,
  isSettingsOpen,
  drawerWidth,
  menuItems,
  onDrawerToggle,
  onMouseEnter,
  onMouseLeave,
  onCloseSettings,
}) => {
  const drawerContent = (
    <Box 
      sx={{ 
        width: drawerWidth,
        backgroundColor: 'background.paper',
        height: '100%',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isSettingsOpen ? (
        <SettingsPage onClose={onCloseSettings} />
      ) : (
        <>
          <Toolbar sx={{ 
            minHeight: '64px !important',
            justifyContent: 'flex-start',
            px: 2,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 44,
                width: 44,
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MapIcon 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: 28,
                  opacity: isHovered ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out'
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              noWrap 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                ml: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
            >
              Study Map
            </Typography>
          </Toolbar>
          <List sx={{ pt: 2 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ px: 1, mb: 1 }}>
                <ListItemButton 
                  onClick={item.action}
                  sx={{
                    minHeight: 48,
                    justifyContent: 'flex-start',
                    px: 2,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 44,
                      width: 44,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 24,
                      color: 'primary.main',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      opacity: isHovered ? 1 : 0,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      ml: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, margin-left 0.3s ease-in-out',
                      '& .MuiListItemText-primary': {
                        fontWeight: 500,
                      }
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 },
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 360,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box 
          sx={{ 
            width: 360,
            backgroundColor: 'background.paper',
            height: '100%'
          }}
        >
          <Toolbar sx={{ minHeight: '64px !important', px: 2 }}>
            <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
              Study Map
            </Typography>
          </Toolbar>
          <List sx={{ pt: 2 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ px: 1, mb: 1 }}>
                <ListItemButton 
                  onClick={item.action}
                  sx={{
                    minHeight: 48,
                    px: 3,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: 'center',
                      fontSize: 24,
                      color: 'primary.main',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        fontWeight: 500,
                      }
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: 'background.paper',
            border: 'none',
            boxShadow: (theme) => theme.palette.mode === 'dark' 
              ? '2px 0 8px rgba(0,0,0,0.3)' 
              : '2px 0 8px rgba(0,0,0,0.1)',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};