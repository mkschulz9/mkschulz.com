import React from 'react';
import { Stack, Link, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type IconLinkProps = {
    Icon: SvgIconComponent;
    href?: string;
    text: string;
};

const IconLink: React.FC<IconLinkProps> = ({ Icon, href, text }) => {
    const content = href ? (
        <Link href={href} target="_blank">
            <Typography variant="body2">{text}</Typography>
        </Link>
    ) : (
        <Typography variant="body2">{text}</Typography>
    );

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Icon />
            {content}
        </Stack>
    );
};

export default IconLink;
