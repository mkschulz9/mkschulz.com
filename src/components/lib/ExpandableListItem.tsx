import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  ListItemButton,
  Stack,
  Typography,
  Collapse,
  Box,
} from '@mui/material';
import React, { ReactNode, useState } from 'react';

export interface ExpandableListItemProps {
  primary: string;
  secondary?: string;
  children: ReactNode;
}

export const ExpandableListItem: React.FC<ExpandableListItemProps> = props => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <ListItemButton
        sx={{ pt: 1.5, pb: 1.5, maxHeight: '60px' }}
        onClick={() => setExpanded(!expanded)}
      >
        <Stack direction="row" width="100%" alignItems="center" spacing={1}>
          <Typography flex={1}>{props.primary}</Typography>
          <Typography flex={2} variant="caption" color="text.secondary">
            {props.secondary}
          </Typography>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </Stack>
      </ListItemButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box m={2}>{props.children}</Box>
      </Collapse>
    </>
  );
};
