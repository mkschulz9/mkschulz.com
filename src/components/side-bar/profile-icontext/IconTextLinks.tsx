import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconLink from './IconLink';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';

const IconTextLinks: React.FC = () => {
    return (
        <>
            <IconLink
                Icon={LinkedInIcon}
                href="https://www.linkedin.com/in/matthew--schulz/"
                text="LinkedIn"
            />
            <IconLink
                Icon={GitHubIcon}
                href="https://github.com/mkschulz9"
                text="GitHub"
            />
            <IconLink
                Icon={LocationOnIcon}
                text="Los Angeles, CA"
            />
            <IconLink
                Icon={HomeIcon}
                text="Bay Area, CA"
            />
        </>
    );
};

export default IconTextLinks;
