import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import bits_background from '../../assets/bits_background.jpg';
import personal_website_github from '../../assets/personal_website_github.png';
import poster_img from '../../assets/mindmap_poster.jpg';
import coming_soon_img from '../../assets/coming_soon.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const FeaturedProjects: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [interval, setInterval] = React.useState(5000);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleManualNav = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setInterval(20000);
    timerRef.current = setTimeout(() => {
      setInterval(5000);
    }, 20000);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    handleManualNav();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    handleManualNav();
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const projects = [
    {
      name: 'mkschulz9.github.io',
      description:
        'This website! I built it from scratch, incorporating modern web development practices, including CI/CD actions, automatic linting and formatting, and commit hooks. Check out the link below to see how it all works under the hood!',
      img: personal_website_github,
      githubLink: 'https://github.com/mkschulz9/mkschulz9.github.io',
    },
    {
      name: 'Emotion Classification',
      description:
        'In this group project, I led a team of three in developing two custom deep learning models for classifying emotions across facial images and textual data. Find our detailed report by visiting the link below!',
      img: poster_img,
      githubLink:
        'https://github.com/marreddysainikhilreddy/emotion-classification',
    },
    {
      name: 'Personal Chatbot (In-progress)',
      description:
        'I fine-tuned an LLM, training it on information about my education, work experience, aspirations, and more! I am currently working on getting the fine-tuned model deployed and an interface setup. Check back soon!',
      img: coming_soon_img,
    },
  ];

  const maxSteps = projects.length;

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${bits_background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '10px',
        p: 3,
      }}
    >
      <Stack sx={{ width: '100%', maxWidth: 426 }}>
        <MobileStepper
          sx={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            bgcolor: 'secondary.main',
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
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents={false}
          interval={interval}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
              }}
            >
              <CardMedia sx={{ height: 290 }} image={project.img} />
              <CardContent sx={{ bgcolor: 'secondary.main' }}>
                <Typography gutterBottom variant="h5">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                {project.githubLink && (
                  <IconButton
                    size="small"
                    href={project.githubLink}
                    target="_blank"
                    sx={{ mt: 1, mb: -2 }}
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
              </CardContent>
            </Card>
          ))}
        </AutoPlaySwipeableViews>
      </Stack>
    </Stack>
  );
};
