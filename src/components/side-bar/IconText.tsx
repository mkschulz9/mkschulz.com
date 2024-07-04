import React from 'react';
import { Stack, Link, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type IconTextProps = {
  Icon: SvgIconComponent;
  href?: string;
  text: string;
};

export const IconText: React.FC<IconTextProps> = props => {
  const content = props.href ? (
    <Link href={props.href} target="_blank">
      <Typography variant="body2">{props.text}</Typography>
    </Link>
  ) : (
    <Typography variant="body2">{props.text}</Typography>
  );

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <props.Icon />
      {content}
    </Stack>
  );
};
