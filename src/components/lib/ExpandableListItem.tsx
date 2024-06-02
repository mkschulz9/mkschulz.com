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
}

export const ExpandableListItem: React.FC<ExpandableListItemProps> = ({
  primary,
  secondary,
  children,
  defaultOpen = false
}) => {
  const [expanded, setExpanded] = useState<boolean>(defaultOpen);

  return (
    <>
      <Paper elevation={6}>
        <ListItemButton
          sx={{ pt: 1.5, pb: 1.5, maxHeight: '60px' }}
          onClick={() => setExpanded(!expanded)}
        >
          <Stack direction="row" width="100%" alignItems="center" spacing={1}>
            <Typography flex={1}>{primary}</Typography>
            <Typography flex={2} variant="caption" color="text.secondary">
              {secondary}
            </Typography>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </Stack>
        </ListItemButton>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box m={2}>{children}</Box>
        </Collapse>
      </Paper>

    </>
  );
};
