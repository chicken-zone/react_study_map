import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

// 最初は固定幅のシンプルなサイドバー
function StudyPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 240, backgroundColor: 'white', height: '100vh', borderRight: '1px solid #e0e0e0' }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">サイドバー練習</Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Study Page - サイドバー実装練習
        </Typography>
        <Typography variant="body1">
          ここでサイドバーの実装を練習できます。
        </Typography>
      </Box>
    </Box>
  );
}

export default StudyPage;