import { Stack, Tooltip, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

export const EmailCopyTooltip: React.FC = ({}) => {
  const [tooltipTitle, setTooltipTitle] = useState('Copy');
  const email = 'mkschulz@usc.edu';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipTitle('Copied!');
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
        }}
        onClick={copyToClipboard}
      >
        <EmailIcon />
        <Typography sx={{ textDecoration: 'underline' }}>{email}</Typography>
      </Stack>
    </Tooltip>
  );
};
