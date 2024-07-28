import {
  Button,
  CardContent,
  CardMedia,
  MobileStepper,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import salvador_collage_img from '../../assets/salvador_collage.png';
import entrepreneur_img from '../../assets/entrepreneur_img.webp';
import cs_ai_img from '../../assets/computer_science_ai.webp';
import first_generation_img from '../../assets/first_generation.webp';
import background from '../../assets/main_background.png';

export const WelcomeAboutMe: React.FC = () => {
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

  const cardData = [
    {
      title: 'Passion for Computer Science & AI',
      img: cs_ai_img,
      content: [
        'Fun fact: I began college as a business major. After my first semester, I knew it was not the right fit, so I switched to computer science, and the rest is history. I fell in love with the fact that whatever idea you could dream up, you could build and bring to life!',
        'Now, as I complete my M.S. in Computer Science specializing in AI, I have developed a strong passion for this field, and am constantly seeking opportunities to apply the concepts I learn in innovative ways that can solve real-world problems.',
      ],
    },
    {
      title: 'Entrepreneurial Spirit',
      img: entrepreneur_img,
      content: [
        'From a young age, I have always been driven by business! You would likely find me running a lemonade stand on the sidewalk or pitching my lawnmowing services door to door in my neighborhood.',
        'These early ventures taught me the value of persistence and the importance of consistently pursuing my goals, no matter the obstacles. Fast-forward to today, and I still carry that same passion. I dream of building an innovative, inspiring company that can positively influence others.',
      ],
    },
    {
      title: 'World Explorer',
      img: salvador_collage_img,
      content: [
        'I love traveling! Over the Summer of 2023, I had the opportunity to visit El Salvador. I went zip-lining, hiked volcanoes, swam in volcanic lakes, and even tried surfing for the first time.',
        'Surfing is a lot harder than it looks, but embracing this challenge taught me resilience and the importance of stepping out of my comfort zone. I value traveling and appreciate the diverse perspectives and experiences it provides!',
      ],
    },
    {
      title: 'First Generation American',
      img: first_generation_img,
      content: [
        'I am a first-generation American. My mother was born and raised in Spain, while my father was born in Germany and raised in England. My parents met in England and moved to the Bay Area in the early 2000s, where I was then born in Berkeley, CA.',
        'While growing up, I had the privilege of visiting Spain, Germany, and England. These experiences widened my perspective and taught me to appreciate and be thankful for my life in the United States.',
      ],
    },
  ];

  const maxSteps = cardData.length;

  return (
    <Stack alignItems={'center'}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 2,
          mt: -2,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          W&bull;E&bull;L&bull;C&bull;O&bull;M&bull;E
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to my personal website, built from scratch! This site
          showcases everything about me. Here, you will find a featured display
          of my projects detailing the challenges I have tackled and the
          solutions I have engineered in machine learning and computer science.
          Additionally, I have included sections about my educational background
          and work experience to give you a well-rounded view of my expertise
          and professional growth.
        </Typography>
        <Typography variant="body1" gutterBottom>
          But that's not all—this website is also a window into the lighter side
          of my life. Dive into fun facts about me, explore my varied hobbies,
          and discover my goals and aspirations.
        </Typography>
        <Typography variant="body1">
          Thank you for visiting. Whether you're a potential collaborator,
          recruiter, or simply here out of curiosity, I hope you enjoy exploring
          and leave inspired by what you find!
        </Typography>
      </Paper>
      <Stack maxWidth={'95%'} maxHeight={'80%'}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: 440,
            bgcolor: 'secondary.main',
            borderRadius: '10px',
          }}
        >
          <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
            {cardData.map((card, index) => (
              <Stack key={index} maxWidth={440}>
                <CardMedia
                  sx={{
                    height: 240,
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                  image={card.img}
                />
                <CardContent sx={{ bgcolor: 'secondary.main' }}>
                  <Typography gutterBottom variant="h5">
                    {card.title}
                  </Typography>
                  {card.content.map((paragraph, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                      mb={idx === card.content.length - 1 ? 0 : 2}
                    >
                      {paragraph}
                    </Typography>
                  ))}
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
