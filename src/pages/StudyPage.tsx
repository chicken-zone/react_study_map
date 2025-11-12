import React, { useState } from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Toolbar
} from "@mui/material";
// 【STEP 2で追加】アイコンのインポート
import { Home, LocationOn, Settings, Map as MapIcon } from "@mui/icons-material";

/**
 * 🎯 サイドバー実装練習 - 段階的実装ガイド
 * 
 * 📋 実装順序とポイント：
 * 
 * 【STEP 1】基本的なメニューアイテムを追加 ✅ (現在のステップ)
 * - 目標: 固定幅サイドバーにアイコン付きメニューを表示
 * - 必要な要素: List, ListItem, ListItemButton, ListItemIcon, ListItemText
 * - ポイント: Material-UIコンポーネントの基本的な使い方を覚える
 * 
 * 【STEP 2】ホバー状態管理を追加
 * - 目標: マウスホバーで幅が変わる動的サイドバー
 * - 追加要素: useState, onMouseEnter, onMouseLeave
 * - ポイント: React hooksの基本的な使い方
 * 
 * 【STEP 3】幅のアニメーション実装
 * - 目標: 120px ⇔ 360px のスムーズな幅変更
 * - 追加要素: transition CSS プロパティ
 * - ポイント: CSS transitionの理解
 * 
 * 【STEP 4】テキストのフェードイン/アウト
 * - 目標: ホバー時にメニューテキストを表示/非表示
 * - 追加要素: opacity, transform の動的制御
 * - ポイント: 複数のCSSプロパティの同期アニメーション
 * 
 * 【STEP 5】レイアウト安定化
 * - 目標: アニメーション中のUIずれを防止
 * - 追加要素: 固定幅レイアウト、position調整
 * - ポイント: レイアウトシフト防止のテクニック
 * 
 * 【STEP 6】設定ページ機能追加
 * - 目標: 設定クリックで500px幅の設定ページを表示
 * - 追加要素: 条件分岐レンダリング、追加の状態管理
 * - ポイント: 複雑な状態管理とUIの切り替え
 */

function StudyPage() {
  // 【STEP 2で追加】ホバー状態の管理
  // const [isHovered, setIsHovered] = useState(false);
  
  // 【STEP 6で追加】設定ページ状態の管理
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 【STEP 2で追加】マウスイベントハンドラー
  // const handleMouseEnter = () => setIsHovered(true);
  // const handleMouseLeave = () => setIsHovered(false);

  // 【STEP 6で追加】設定ページの開閉ハンドラー
  const handleSettingsClick = () => setIsSettingsOpen(!isSettingsOpen);
  // const handleCloseSettings = () => setIsSettingsOpen(false);

  // 【STEP 3で追加】動的な幅の計算
  // const sidebarWidth = isSettingsOpen ? 500 : (isHovered ? 360 : 120);

  // 【STEP 1】メニューアイテムの定義
  // TODO: 以下のコメントアウトを外して、アイコンをインポートしてください
  const menuItems = [
    { text: 'ホーム', icon: <Home />, action: () => console.log('ホームクリック') },
    { text: '場所', icon: <LocationOn />, action: () => console.log('場所クリック') },
    { text: '設定', icon: <Settings />, action: handleSettingsClick }, // STEP 6で使用
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* 🎨 サイドバーエリア */}
      <Box 
        sx={{ 
          // 【STEP 3で変更】固定幅 → 動的幅
          width: 240, // 後で sidebarWidth に変更
          backgroundColor: 'background.paper', // テーマ対応
          height: '100vh',
          borderRight: '1px solid',
          borderColor: 'divider', // テーマ対応
          
          // 【STEP 3で追加】スムーズなアニメーション
          // transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          
          // 【STEP 4で追加】オーバーフロー制御
          // overflow: 'hidden',
          
          // 【STEP 5で追加】位置調整
          // position: 'relative'
        }}
        // 【STEP 2で追加】マウスイベント
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {/* 🏠 ヘッダー部分 */}
        <Toolbar sx={{ 
          minHeight: '64px !important',
          
          // 【STEP 4で変更】動的レイアウト
          justifyContent: 'flex-start', // 後で動的に変更
          px: 2,
          
          // 【STEP 5で追加】レイアウト安定化
          // position: 'relative',
          // overflow: 'hidden'
        }}>
          {/* 【STEP 5で追加】アイコンとタイトルの分離レイアウト */}
          <Typography variant="h6">
            サイドバー練習
          </Typography>
          
          {/* 【STEP 5で実装】アイコンとタイトルの切り替えロジック
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
          */}
        </Toolbar>

        {/* 📋 メニューリスト */}
        <List sx={{ pt: 2 }}>
          {/* 【STEP 1で実装】動的メニューアイテム */}
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ px: 1, mb: 1 }}>
              <ListItemButton 
                onClick={item.action}
                sx={{
                  minHeight: 48,
                  
                  // 【STEP 4で追加】動的レイアウト調整
                  justifyContent: 'flex-start',
                  px: 2,
                  borderRadius: 2,
                  
                  // 【STEP 5で追加】レイアウト安定化
                  // position: 'relative',
                  // overflow: 'hidden',
                  
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
                    // 【STEP 5で追加】固定幅レイアウト
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
                    // 【STEP 4で追加】テキストアニメーション（STEP 1では固定表示）
                    opacity: 1, // 後で isHovered ? 1 : 0 に変更
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    ml: 1, // 後で isHovered ? 1 : 0 に変更
                    transform: 'translateX(0)', // 後で動的に変更
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
      </Box>

      {/* 📱 メインコンテンツエリア */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          🎯 Study Page - サイドバー実装練習
        </Typography>
        
        <Typography variant="h6" color="primary" gutterBottom>
          📋 現在のステップ: STEP 1 - 基本メニューアイテム
        </Typography>
        
        <Typography variant="body1" paragraph>
          ここでサイドバーの実装を段階的に練習していきます。
        </Typography>

        <Box sx={{ 
          p: 3, 
          backgroundColor: 'background.paper', 
          borderRadius: 2, 
          mt: 3,
          border: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography variant="h6" gutterBottom>
            📝 実装チェックリスト
          </Typography>
          
          <Typography component="div">
            <ul>
              <li>✅ 基本レイアウト完成</li>
              <li>✅ メニューアイテム追加</li>
              <li>⏳ ホバー状態管理 ← 次はここ！</li>
              <li>⬜ 幅アニメーション</li>
              <li>⬜ テキストフェード</li>
              <li>⬜ レイアウト安定化</li>
              <li>⬜ 設定ページ機能</li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ 
          p: 2, 
          backgroundColor: 'warning.light', 
          borderRadius: 1, 
          mt: 2 
        }}>
          <Typography variant="body2" color="warning.contrastText">
            💡 <strong>次にやること:</strong><br />
            1. Material-UI アイコンをインポート<br />
            2. menuItems 配列のコメントアウトを外す<br />
            3. 動的メニューレンダリングを有効化
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StudyPage;