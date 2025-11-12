import React from 'react';
import { Box, Typography, Toolbar, useTheme } from '@mui/material';
import { Map as MapIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

interface MainContentProps {
  drawerWidth: number;
}

export const MainContent: React.FC<MainContentProps> = ({ drawerWidth }) => {
  const location = useLocation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: '100vh',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Toolbar sx={{ display: { sm: 'none' } }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: isDark ? '#1a1a1a' : '#e3f2fd',
          backgroundImage: isDark 
            ? 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a)'
            : 'linear-gradient(45deg, #e3f2fd 25%, #bbdefb 25%, #bbdefb 50%, #e3f2fd 50%, #e3f2fd 75%, #bbdefb 75%, #bbdefb)',
          backgroundSize: '20px 20px'
        }}
      >
        <Box textAlign="center">
          <MapIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" color="primary" gutterBottom>
            地図エリア
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ここに地図が表示されます
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            座標: 東京 (35.6895, 139.6917)
            <br />
            現在のページ: {location.pathname}
            <br />
            テーマ: {isDark ? 'ダーク' : 'ライト'}モード
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};