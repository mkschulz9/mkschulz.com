import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ListItemButton,
  Stack,
  Typography,
  Collapse,
  Box,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';

export interface ExpandableListProps {
  primary: string;
  secondary?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon: ReactNode;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

const MotionPaper = motion(Paper);

export const ExpandableList: React.FC<ExpandableListProps> = props => {
  const [expanded, setExpanded] = useState<boolean>(props.defaultOpen || false);
  const isControlled = typeof props.expanded === 'boolean';
  const isExpanded = isControlled ? props.expanded : expanded;

  const handleToggle = () => {
    if (isControlled) {
      props.onToggle?.(!isExpanded);
      return;
    }
    setExpanded(!isExpanded);
    props.onToggle?.(!isExpanded);
  };

  return (
    <MotionPaper
      elevation={0}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      sx={{
        border: '1px solid rgba(148, 163, 184, 0.16)',
        background: 'rgba(11, 16, 32, 0.7)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <ListItemButton
        sx={{ pt: 1.5, pb: 1.5, maxHeight: '60px' }}
        onClick={handleToggle}
      >
        <Stack direction="row" width="100%" alignItems="center" spacing={1.5}>
          {props.icon}
          <Typography flex={1} sx={{ flexGrow: 1, fontWeight: 600 }}>
            {props.primary}
          </Typography>
          {props.secondary && (
            <Typography flex={1} variant="caption" color="text.secondary">
              {props.secondary}
            </Typography>
          )}
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </Stack>
      </ListItemButton>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box m={2.5}>{props.children}</Box>
      </Collapse>
    </MotionPaper>
  );
};
