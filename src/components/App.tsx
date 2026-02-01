import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Stack,
} from '@mui/material';
import { SideBar } from './side-bar/SideBar';
import { ResponsiveBox } from './lib/ResponsiveBox';
import { DropDowns } from './drop-downs/DropDowns';
import { Footer } from './Footer';
import TagManager from 'react-gtm-module';
import { Hero } from './hero/Hero';
import { TopNav } from './nav/TopNav';

export const App: React.FC = ({}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const topNavRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef(0);
  const isNavigatingRef = useRef(false);

  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (!target) return;

    const navOffset = 120;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(targetTop - navOffset, 0),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'pageview',
        page: 'Home',
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) {
        return;
      }
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      const shouldShow = !isScrollingDown || currentY < 40;

      setNavVisible(shouldShow);
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(null);
      return;
    }

    isNavigatingRef.current = true;

    if (activeSection !== section) {
      setActiveSection(section);
    }

    window.setTimeout(() => scrollToSection(section), 240);
    window.setTimeout(() => scrollToSection(section), 520);
    window.setTimeout(() => setNavVisible(false), 720);
    window.setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 521,
        md: 769,
        lg: 867,
        xl: 1000,
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#60a5fa',
      },
      secondary: {
        main: '#1f2937',
      },
      background: {
        default: '#05070f',
        paper: '#0b1020',
      },
      text: {
        primary: '#f8fafc',
        secondary: '#94a3b8',
      },
    },
    typography: {
      fontFamily: 'Manrope, Inter, sans-serif',
      h1: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
      h2: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
      h3: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
      h4: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
      h5: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
      h6: { fontFamily: 'Space Grotesk, Manrope, sans-serif' },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: '20px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={3} sx={{ px: { xs: 2, md: 6 }, pb: 4, pt: 10 }}>
        <Box ref={topNavRef} id="topnav">
          <TopNav onNavigate={handleNavigate} isVisible={navVisible} />
        </Box>
        <Hero onNavigate={handleNavigate} />
        <ResponsiveBox>
          <SideBar />
          <DropDowns
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </ResponsiveBox>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};
