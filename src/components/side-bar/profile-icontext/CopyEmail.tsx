import { Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';

export const EmailCopyTooltip: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [tooltipTitle, setTooltipTitle] = useState('Copy');

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('mkschulz@usc.edu');
            setTooltipTitle('Copied!');
            setTimeout(() => {
                setTooltipTitle('Copy');
                handleTooltipClose();
            }, 1500);
        } catch (err) {
            setTooltipTitle('Failed to copy');
            setTimeout(() => {
                setTooltipTitle('Copy');
                handleTooltipClose();
            }, 1500);
        }
    };

    return (
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0.75,
        }}>
            <EmailIcon aria-label="email" />
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -8],
                            },
                        },
                    ],
                }}
                arrow
                placement="right"
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={tooltipTitle}
            >
                <Typography
                    variant="body2"
                    onMouseOver={handleTooltipOpen}
                    onMouseOut={handleTooltipClose}
                    onClick={copyToClipboard}
                    style={{ cursor: 'pointer' }}
                    sx={{ textDecoration: 'underline' }}
                >
                    mkschulz@usc.edu
                </Typography>
            </Tooltip>
        </Stack>
    );
};

// tooltip could do with some minor improvements (i.e., 'copied' stay until hoveraway, spazzy tooltip at times)