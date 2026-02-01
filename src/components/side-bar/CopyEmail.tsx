import { Stack, Tooltip, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import TagManager from 'react-gtm-module';

export const EmailCopyTooltip: React.FC = ({}) => {
  const [tooltipTitle, setTooltipTitle] = useState('Copy');
  const email = 'mkschulzcr@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipTitle('Copied!');
      TagManager.dataLayer({
        dataLayer: {
          event: 'email_copy',
          email: email,
        },
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleMouseLeave = () => {
    setTooltipTitle('Copy');
  };

  return (
    <Tooltip
      title={tooltipTitle}
      placement="right"
      arrow
      onMouseLeave={handleMouseLeave}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          gap: 0.75,
          width: 'fit-content',
          cursor: 'pointer',
          color: 'text.secondary',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: 'text.primary',
          },
        }}
        onClick={copyToClipboard}
      >
        <EmailIcon />
        <Typography sx={{ textDecoration: 'underline' }}>{email}</Typography>
      </Stack>
    </Tooltip>
  );
};
