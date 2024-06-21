import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ListItemButton,
  Stack,
  Typography,
  Collapse,
  Box,
  Paper,
} from '@mui/material';
import React, { ReactNode, useState } from 'react';

export interface ExpandableListItemProps {
  primary: string;
  secondary?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon: ReactNode;
}

export const ExpandableListItem: React.FC<ExpandableListItemProps> = props => {
  const [expanded, setExpanded] = useState<boolean>(props.defaultOpen || false);

  return (
    <Paper elevation={6}>
      <ListItemButton
        sx={{ pt: 1, pb: 1, maxHeight: '60px' }}
        onClick={() => setExpanded(!expanded)}
      >
        <Stack direction="row" width="100%" alignItems="center" spacing={1}>
          {props.icon}
          <Typography flex={1} sx={{ flexGrow: 1 }}>
            {props.primary}
          </Typography>
          {props.secondary && (
            <Typography flex={1} variant="caption" color="text.secondary">
              {props.secondary}
            </Typography>
          )}
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </Stack>
      </ListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box m={2}>{props.children}</Box>
      </Collapse>
    </Paper>
  );
};
