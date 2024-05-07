import { Stack, Avatar } from '@mui/material';
import { StyledTitle } from '../../lib/StyledTitle';
import davis_portrait from '../../assets/davis_portrait.jpg'

interface ProfileAvatarProps {
    name: string;
    src?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name, src }) => {
    return (
        <Stack spacing={1} alignItems="center" direction="column">
            <Avatar
                alt={name}
                src={davis_portrait}
                sx={{
                    width: { xs: 100, sm: 120, md: 140, lg: 160, xl: 190 },
                    height: { xs: 100, sm: 120, md: 140, lg: 160, xl: 190 },
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}
            />
            <StyledTitle>{name}</StyledTitle>
        </Stack>
    );
};

export default ProfileAvatar;
