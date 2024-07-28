import React from 'react';
import {
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import bits_background from '../../assets/bits_background.jpg';
import website_github_img from '../../assets/personal_website_github.png';
import poster_img from '../../assets/mindmap_poster.jpg';
import coming_soon_img from '../../assets/coming_soon.jpg';

export const FeaturedProjects: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const projects = [
    {
      title: 'mkschulz9.github.io',
      content:
        'This website! I built it from scratch, incorporating modern web development practices, including CI/CD actions, automatic linting and formatting, and commit hooks. Check out the link below to see how it all works under the hood!',
      img: website_github_img,
      githubLink: 'https://github.com/mkschulz9/mkschulz9.github.io',
    },
    {
      title: 'Emotion Classification',
      content:
        'In this group project, I led a team of three in developing two custom deep learning models for classifying emotions across facial images and textual data. Find our detailed report by visiting the link below!',
      img: poster_img,
      githubLink:
        'https://github.com/marreddysainikhilreddy/emotion-classification',
    },
    {
      title: 'Personal Chatbot (In-progress)',
      content:
        'I fine-tuned an LLM, training it on information about my education, work experience, aspirations, and more! I am currently working on getting the fine-tuned model deployed and an interface setup. Check back soon!',
      img: coming_soon_img,
    },
  ];

  const maxSteps = projects.length;

  return (
    <Stack
      sx={{
        alignItems: 'center',
        backgroundImage: `url(${bits_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        p: 3,
      }}
    >
      <Stack maxWidth={'95%'}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: 440,
            bgcolor: 'secondary.main',
            borderRadius: '10px',
          }}
        >
          <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
            {projects.map((project, index) => (
              <Stack key={index} maxWidth={440}>
                <CardMedia
                  sx={{
                    height: 240,
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                  image={project.img}
                />
                <CardContent sx={{ bgcolor: 'secondary.main' }}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.content}
                  </Typography>
                  {project.githubLink && (
                    <IconButton
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                      sx={{ mb: -3 }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </CardContent>
              </Stack>
            ))}
          </SwipeableViews>
          <MobileStepper
            sx={{
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              bgcolor: 'secondary.main',
              maxWidth: 440,
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Paper>
      </Stack>
    </Stack>
  );
};
