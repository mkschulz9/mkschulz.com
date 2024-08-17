import React from 'react';
import {
  CardContent,
  CardMedia,
  IconButton,
  ImageList,
  ImageListItem,
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
import aws_logo from '../../assets/aws_logo.png';
import poster_img from '../../assets/mindmap_poster.jpg';
import coming_soon_img from '../../assets/coming_soon.jpg';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import react_logo from '../../assets/react_logo.png';
import typescript_logo from '../../assets/typescript_logo.png';
import vite_logo from '../../assets/vite_logo.jpg';
import prettier_logo from '../../assets/prettier_logo.png';
import eslint_logo from '../../assets/eslint_logo.png';
import mui_logo from '../../assets/mui_logo.jpg';
import express_js_logo from '../../assets/express-js-logo.png';
import swagger_logo from '../../assets/swagger_logo.png';
import beanstalk_logo from '../../assets/beanstalk_logo.png';
import ec2_logo from '../../assets/ec2_logo.png';
import route53_logo from '../../assets/route53_logo.png';

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
      title: 'mkschulz.com',
      content: [
        <>
          This website! It is not just any website but a modern single-page
          application (SPA) crafted with <strong>React</strong>,
          <strong> TypeScript</strong>, and <strong>Material UI </strong>
          components.
        </>,
        <>
          Hosted on <strong>GitHub Pages</strong> under a custom domain with
          <strong> SSL configuration</strong> for secure browsing, the project
          uses <strong>Vite</strong>, <strong>pnpm</strong>, and
          <strong> CI/CD pipelines</strong> through
          <strong> GitHub Actions</strong> for seamless development and
          deployment. To ensure top-notch code quality, <strong>ESLint </strong>
          and
          <strong> Prettier</strong> are in place, along with{' '}
          <strong>commitlint</strong> and <strong>husky git hooks</strong> for
          enforcing commit standards. For a closer look, check out the project's
          GitHub below!
        </>,
      ],
      imgList: [
        react_logo,
        typescript_logo,
        mui_logo,
        vite_logo,
        prettier_logo,
        eslint_logo,
      ],
      githubLink: 'https://github.com/mkschulz9/mkschulz.com',
    },
    {
      title: 'Emotion Classification using ML',
      content: [
        <>
          In this group project, I led a team of three in exploring
          <strong> transformer-based models </strong>for text emotion
          classification and <strong>CNNs </strong>for
          <strong> facial emotion recognition</strong>. We enhance model
          performance by customizing architectures like
          <strong> RoBERTa </strong>for text and a<strong> VGG16 CNN</strong>{' '}
          for images, focusing on optimizing metrics such as
          <strong> F1 score</strong> and <strong>accuracy</strong>.
        </>,
        <>
          Overall, the transformer model achieves a validation
          <strong> F1 score of 59.03%</strong> (a 10% improvement), and the CNN
          reaches a validation <strong>accuracy of 90.33%</strong>. Check out
          the GitHub linked below to learn more!
        </>,
      ],
      imgList: [poster_img],
      githubLink:
        'https://github.com/marreddysainikhilreddy/emotion-classification',
    },
    {
      title: 'api.mkschulz.com',
      content: [
        <>
          The backend server for this site is built using
          <strong> Express.js</strong> and has security features such as
          <strong> CORS</strong>, <strong>Helmet</strong>, and API
          <strong> rate limiting</strong>. API documentation is provided via
          <strong> Swagger</strong>.
        </>,
        <>
          The server is deployed using <strong>AWS Elastic Beanstalk</strong>,
          with <strong>Route 53</strong> managing DNS services, including custom
          domain configuration. The server runs on an
          <strong> EC2 instance</strong>, configured with
          <strong> SSL certificates</strong> that enable <strong>HTTPS </strong>
          for secure communication. Check out the link below to view the Swagger
          API Docs.
        </>,
      ],
      imgList: [
        aws_logo,
        express_js_logo,
        swagger_logo,
        beanstalk_logo,
        ec2_logo,
        route53_logo,
      ],
      githubLink: 'https://api.mkschulz.com/docs',
      alternateIcon: <OpenInNewIcon />,
    },
    {
      title: 'Personal Chatbot (In-progress)',
      content: [
        <>
          I fine-tuned a <strong>large language model </strong>
          (meta-llama-3-8B-Instruct) with the vision of it serving as a chatbot
          that can answer questions about me! To fine-tune, I use
          <strong> Hugging Face</strong> with techniques like
          <strong> QLoRA</strong> and <strong>4-bit quantization</strong> to
          optimize memory usage and performance.
        </>,
        <>
          I also created a custom conversational dataset and incorporated
          techniques like <strong>flash attention</strong> and
          <strong> TF32 precision</strong> to boost computational speed on
          compatible GPUs. While this project is a work in progress, please
          follow the link below to learn more on how I fine-tuned the model!
        </>,
      ],
      imgList: [coming_soon_img],
      githubLink:
        'https://colab.research.google.com/drive/1Cz4XMSQtlArZ8D0M9wKXWW5f_c8wBM4Z?usp=sharing',
      alternateIcon: <OpenInNewIcon />,
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
                {project.imgList.length === 1 ? (
                  <CardMedia
                    sx={{
                      height: 280,
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                    image={project.imgList[0]}
                  />
                ) : (
                  <ImageList
                    rowHeight={140}
                    cols={project.imgList.length > 1 ? 3 : 1}
                    sx={{ mt: 0, mb: 0, overflow: 'hidden' }}
                  >
                    {project.imgList.map((img, idx) => (
                      <ImageListItem key={idx}>
                        <img
                          src={img}
                          loading="lazy"
                          style={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                          }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                )}

                <CardContent sx={{ bgcolor: 'secondary.main' }}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  {project.content.map((paragraph, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                      mb={idx === project.content.length - 1 ? 0 : 2}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                  {project.githubLink && (
                    <IconButton
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                      sx={{ mb: -3 }}
                    >
                      {project.alternateIcon ? (
                        project.alternateIcon
                      ) : (
                        <GitHubIcon />
                      )}
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
