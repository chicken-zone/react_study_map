import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  ArrowBack,
  Brightness6,
  Language,
  Notifications,
  LightMode,
  DarkMode,
  SettingsBrightness,
} from '@mui/icons-material';
import { useTheme } from '../theme';

interface SettingsPageProps {
  onClose: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onClose }) => {
  const { mode, toggleTheme, setTheme } = useTheme();

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: string | null,
  ) => {
    if (newTheme && (newTheme === 'light' || newTheme === 'dark')) {
      setTheme(newTheme);
    }
  };

  return (
    <Box sx={{ p: 3, height: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={onClose} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          設定
        </Typography>
      </Box>
      
      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Brightness6 sx={{ mr: 2 }} />
          テーマ設定
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            アプリの外観を選択してください
          </Typography>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleThemeChange}
            aria-label="theme selection"
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="light" aria-label="light theme">
              <LightMode sx={{ mr: 1 }} />
              ライト
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark theme">
              <DarkMode sx={{ mr: 1 }} />
              ダーク
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <FormControlLabel
          control={
            <Switch 
              checked={mode === 'dark'}
              onChange={toggleTheme}
            />
          }
          label="ダークモード"
          sx={{ mb: 2 }}
        />
        
        <FormControlLabel
          control={<Switch />}
          label="高コントラスト"
        />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Language sx={{ mr: 2 }} />
          言語設定
        </Typography>
        <TextField
          select
          label="言語"
          defaultValue="ja"
          size="small"
          sx={{ minWidth: 200 }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="ja">日本語</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </TextField>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Notifications sx={{ mr: 2 }} />
          通知設定
        </Typography>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="プッシュ通知"
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="メール通知"
        />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          地図設定
        </Typography>
        <TextField
          label="デフォルト地図スタイル"
          select
          defaultValue="streets"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="streets">Streets</option>
          <option value="satellite">Satellite</option>
          <option value="outdoors">Outdoors</option>
        </TextField>
        <TextField
          label="初期ズームレベル"
          type="number"
          defaultValue="10"
          size="small"
          inputProps={{ min: 1, max: 20 }}
          fullWidth
        />
      </Paper>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary">
          保存
        </Button>
        <Button variant="outlined" onClick={onClose}>
          キャンセル
        </Button>
      </Box>
    </Box>
  );
};