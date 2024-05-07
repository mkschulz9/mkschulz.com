import React from 'react';
import { Stack, Link, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type IconLinkProps = {
    Icon: SvgIconComponent; // Pass MUI Icon component
    href: string;          // URL for the link
    ariaLabel: string;     // Accessibility label
    text: string;          // Display text
};

const IconLink: React.FC<IconLinkProps> = ({ Icon, href, ariaLabel, text }) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Icon aria-label={ariaLabel} />
            <Link href={href} target="_blank" aria-label={ariaLabel}>
                <Typography variant="body2">{text}</Typography>
            </Link>
        </Stack>
    );
};

export default IconLink;