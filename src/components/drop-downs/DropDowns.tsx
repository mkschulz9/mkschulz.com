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
            border: '2px solid grey'
        }}>
            <ExpandableListItem primary="PROJECT DEMOS" children={undefined}></ExpandableListItem>
            <ExpandableListItem primary="ABOUT ME" children={<AboutMe />}></ExpandableListItem>
            <ExpandableListItem primary="EDUCATION" children={<Education />}></ExpandableListItem>
            <ExpandableListItem primary="WORK EXPERIENCE" children={undefined}></ExpandableListItem>
        </Stack>
    );
};

export default DropDowns;
