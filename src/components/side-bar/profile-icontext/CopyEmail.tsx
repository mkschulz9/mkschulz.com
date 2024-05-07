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
        <Stack direction="row" spacing={1} alignItems="center">
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
                placement="top-start"
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

//make component reusable later (if funcitonality is needed again)