import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import TagManager from 'react-gtm-module';

const MotionAppBar = motion(AppBar);

const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Projects', section: 'projects' },
  { label: 'Timeline', section: 'timeline' },
  { label: 'Goals', section: 'goals' },
];

export interface TopNavProps {
  onNavigate: (section: string) => void;
  isVisible?: boolean;
}
export const TopNav: React.FC<TopNavProps> = ({ onNavigate, isVisible }) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);

  const trackNavClick = (section: string, label: string, source: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'navigation_click',
        nav_section: section,
        nav_label: label,
        nav_source: source,
      },
    });
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleMenuNavigate = (section: string) => {
    const label =
      navItems.find(item => item.section === section)?.label ?? section;
    trackNavClick(section, label, 'topnav_menu');
    onNavigate(section);
    handleMenuClose();
  };

  return (
    <MotionAppBar
      position="fixed"
      elevation={0}
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: isVisible === false ? -80 : 0,
        opacity: isVisible === false ? 0 : 1,
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      sx={{
        top: 16,
        left: 0,
        right: 0,
        mx: 'auto',
        width: { xs: 'calc(100% - 32px)', md: 'calc(100% - 96px)' },
        borderRadius: '20px',
        background: 'rgba(12, 15, 26, 0.85)',
        border: '1px solid rgba(148, 163, 184, 0.16)',
        backdropFilter: 'blur(16px)',
        zIndex: theme => theme.zIndex.appBar + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'linear-gradient(120deg, #60a5fa, #a855f7)',
            }}
          />
          <Typography variant="subtitle1" fontWeight={700}>
            mkschulz.com
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {navItems.map(item => (
            <Button
              key={item.section}
              size="small"
              onClick={() => {
                trackNavClick(item.section, item.label, 'topnav');
                onNavigate(item.section);
              }}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': { color: 'text.primary' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="Open navigation menu"
            onClick={handleMenuOpen}
            size="small"
            sx={{
              color: 'text.primary',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              background: 'rgba(15, 23, 42, 0.6)',
              '&:hover': { background: 'rgba(30, 41, 59, 0.8)' },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 180,
                background: 'rgba(12, 15, 26, 0.95)',
                border: '1px solid rgba(148, 163, 184, 0.16)',
                backdropFilter: 'blur(16px)',
              },
            }}
          >
            {navItems.map(item => (
              <MenuItem
                key={item.section}
                onClick={() => handleMenuNavigate(item.section)}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </MotionAppBar>
  );
};
