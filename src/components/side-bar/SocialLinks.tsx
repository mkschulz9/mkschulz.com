import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconLink from './IconLink';

const SocialLinks: React.FC = () => {
    return (
        <>
            <IconLink
                Icon={LinkedInIcon}
                href="https://www.linkedin.com/in/matthew--schulz/"
                ariaLabel="Matthew Schulz LinkedIn"
                text="LinkedIn"
            />
            <IconLink
                Icon={GitHubIcon}
                href="https://github.com/mkschulz9"
                ariaLabel="Matthew Schulz GitHub"
                text="GitHub"
            />
        </>
    );
};

export default SocialLinks;
