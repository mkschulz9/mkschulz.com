import { Stack } from '@mui/material';
import { ExpandableListItem } from '../lib/ExpandableListItem';
import { AboutMe } from './AboutMe';
import { Education } from './Education'

export const DropDowns: React.FC = ({
}) => {
    return (
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 0.5
        }}>
            <ExpandableListItem primary="PROJECT DEMOS" children={undefined} defaultOpen={true}></ExpandableListItem>
            <ExpandableListItem primary="ABOUT ME" children={<AboutMe />}></ExpandableListItem>
            <ExpandableListItem primary="GOALS & ASPIRATIONS" children={<Education />}></ExpandableListItem>
        </Stack>
    );
};