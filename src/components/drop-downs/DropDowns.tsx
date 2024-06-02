import { Stack } from '@mui/material';
import { ExpandableListItem } from '../lib/ExpandableListItem';
import { AboutMe } from './AboutMe';
import { Education } from './Education'

interface DropDownsProps {

}

const DropDowns: React.FC<DropDownsProps> = () => {
    return (
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 0.5
            //border: '2px solid grey'
        }}>
            <ExpandableListItem primary="PROJECT DEMOS" children={undefined} defaultOpen={true}></ExpandableListItem>
            <ExpandableListItem primary="ABOUT ME" children={<AboutMe />}></ExpandableListItem>
            <ExpandableListItem primary="GOALS & ASPIRATIONS" children={<Education />}></ExpandableListItem>
        </Stack>
    );
};

export default DropDowns;
