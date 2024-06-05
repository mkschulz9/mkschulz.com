import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export const ProjectDemos: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 230 }} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            This Website!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            [Blank]
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

//make project demos a carosel where users can flip through my projects on display (chatbot; this website (reactive); link to github with more of my project)
