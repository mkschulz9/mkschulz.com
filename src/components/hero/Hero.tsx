import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import TagManager from 'react-gtm-module';

const MotionStack = motion(Stack);

export interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const trackHeroClick = (section: string, label: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'navigation_click',
        nav_section: section,
        nav_label: label,
        nav_source: 'hero',
      },
    });
  };
  const highlights = useMemo(
    () => [
      'AI/ML Systems & Applications',
      'Full-Stack Engineering',
      'Product-Focused Delivery',
      'M.S. Computer Science (AI/ML Focus), USC',
      'B.S. Computer Science, UC Davis',
      'A.S. Computer Science, Diablo Valley College',
      'Software Engineer at Visa (AI Applications)',
      'Ex-NASA Deep Space Network Intern (Peraton)',
      'Ex-USC AutoDrive Lab ML Researcher',
      'Ex-Lead Software Engineer at SchedGo (now EduRoute)',
      'Big Bang! Business Competition Winner (2023)',
      'RAG Chatbot Powered by Claude Haiku 4.5',
      'Multi-Label Emotion Classification Research',
      'Built This Site with React + TypeScript + MUI',
      'Entrepreneurial Spirit & Builder Mindset',
      'First-Generation American',
      'World Explorer & Lifelong Learner',
    ],
    []
  );
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHighlight(prev => (prev + 1) % highlights.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [highlights.length]);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '28px',
        p: { xs: 3, md: 5 },
        background:
          'radial-gradient(circle at top left, rgba(91, 143, 255, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(109, 40, 217, 0.4), transparent 60%), rgba(12, 15, 26, 0.9)',
        border: '1px solid rgba(148, 163, 184, 0.16)',
        boxShadow: '0px 30px 80px rgba(5, 8, 20, 0.65)',
      }}
    >
      <MotionStack
        spacing={3}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Stack spacing={1}>
          <Typography
            variant="overline"
            color="primary.main"
            letterSpacing="0.32em"
          >
            PERSONAL PORTFOLIO
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Matthew K. Schulz
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Software Engineer focused on AI/ML, delivering modern, data-driven
            products and experiences.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { sm: 'center' } }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              trackHeroClick('projects', 'View Projects');
              onNavigate('projects');
            }}
            sx={{
              borderRadius: 999,
              px: 4,
              boxShadow: '0px 18px 45px rgba(56, 189, 248, 0.4)',
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              trackHeroClick('timeline', 'Professional Timeline');
              onNavigate('timeline');
            }}
            sx={{
              borderRadius: 999,
              px: 4,
              borderColor: 'rgba(148, 163, 184, 0.6)',
              color: 'text.primary',
            }}
          >
            Professional Timeline
          </Button>
        </Stack>
        <Box
          sx={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            px: 2.5,
            py: 1.5,
            borderRadius: '16px',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(148, 163, 184, 0.12)',
            overflow: 'hidden',
            width: 'fit-content',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHighlight}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                {highlights[activeHighlight]}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </MotionStack>
    </Box>
  );
};
