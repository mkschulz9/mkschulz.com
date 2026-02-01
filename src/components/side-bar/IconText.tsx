import React from 'react';
import { Stack, Link, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import TagManager from 'react-gtm-module';

type IconTextProps = {
  Icon: SvgIconComponent;
  href?: string;
  text: string;
};

export const IconText: React.FC<IconTextProps> = props => {
  const handleLinkClick = () => {
    if (!props.href) return;
    TagManager.dataLayer({
      dataLayer: {
        event: 'outbound_link_click',
        link_label: props.text,
        link_url: props.href,
        link_context: 'sidebar',
      },
    });
  };

  const content = props.href ? (
    <Link href={props.href} target="_blank" onClick={handleLinkClick}>
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
        color: 'text.secondary',
        transition: 'color 0.2s ease',
        '&:hover': {
          color: 'text.primary',
        },
      }}
    >
      <props.Icon />
      {content}
    </Stack>
  );
};
